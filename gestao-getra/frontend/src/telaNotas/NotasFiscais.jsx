import React, { useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../Components/Sidebar';

export function NotasFiscais() {
  const [arquivo, setArquivo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState({
    numero: '',
    valor: '',
    data_emissao: '',
    cnpj: '',
    resumo: ''
  });

  // 1. Quando o usuário escolhe o arquivo
  const handleFileChange = (e) => {
    setArquivo(e.target.files[0]);
  };

  // 2. Enviar para o Backend ler
  const handleLerArquivo = async () => {
    if (!arquivo) return alert("Selecione um PDF primeiro!");

    const formData = new FormData();
    formData.append('pdf', arquivo); // 'pdf' deve bater com o nome na rota do backend

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/upload-nota', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const info = response.data.dadosExtraidos;
      
      // Preenche os campos automaticamente
      setDados({
        numero: info.numero_nota || '',
        valor: info.valor || '',
        data_emissao: formatarDataParaInput(info.data_emissao), // Converte dd/mm/aaaa para aaaa-mm-dd
        cnpj: info.cnpj_emitente || '',
        resumo: "Nota lida automaticamente do arquivo: " + arquivo.name
      });

      alert("Leitura concluída! Verifique os dados abaixo.");

    } catch (error) {
      console.error(error);
      alert("Erro ao ler o arquivo. Certifique-se que é um PDF de texto (não imagem).");
    } finally {
      setLoading(false);
    }
  };

  // Função auxiliar para converter dd/mm/aaaa -> aaaa-mm-dd (para o input date)
  function formatarDataParaInput(dataBrasileira) {
    if (!dataBrasileira) return '';
    const partes = dataBrasileira.split('/');
    if (partes.length === 3) {
      return `${partes[2]}-${partes[1]}-${partes[0]}`;
    }
    return '';
  }

  // 3. Salvar no Banco (Aqui podemos criar uma Fatura ou salvar na tabela NotaFiscal)
  // Função para o botão "Confirmar e Salvar"
  const handleSalvar = async () => {
    // 1. Validação simples antes de enviar
    if (!dados.numero || !dados.valor || !dados.cnpj) {
      alert("Por favor, preencha todos os campos obrigatórios antes de salvar.");
      return;
    }

    try {
      setLoading(true);

      // 2. Formatar a data para o Backend (IMPORTANTE!)
      // O seu backend espera "dd/mm/aaaa", mas o input date do HTML usa "aaaa-mm-dd".
      // Vamos converter:
      let dataParaBackend = dados.data_emissao;
      if (dados.data_emissao.includes('-')) {
         const [ano, mes, dia] = dados.data_emissao.split('-');
         dataParaBackend = `${dia}/${mes}/${ano}`;
      }

      // 3. Montar o objeto (Payload) igual o Backend espera
      const payload = {
        numero: dados.numero,
        valor: dados.valor,            // Ex: "1500.50"
        data_emissao: dataParaBackend, // Ex: "05/01/2026"
        cnpj_emitente: dados.cnpj,     // O backend usa esse CNPJ para achar o cliente
        link_pdf: ""                   // Opcional, ou mande o nome do arquivo se quiser
      };

      console.log("Enviando dados:", payload); // Debug no navegador

      // 4. Enviar para a rota que cria Nota + Fatura
      const response = await axios.post('http://localhost:3000/notas', payload);

      // 5. Sucesso!
      alert("Sucesso! Nota e Fatura geradas.");
      console.log("Resposta:", response.data);
      window.alert("Nota Salva com Sucesso!");
      
      setDados({
          numero: '',
          valor: '',
          data_emissao: '',
          cnpj: '',
          resumo: ''
      });
      setArquivo(null);

    } catch (error) {
      console.error("Erro ao salvar:", error);
      
      // Tratamento de erro detalhado (Ex: Cliente não encontrado)
      const msgErro = error.response?.data?.erro || "Erro desconhecido";
      const detalhe = error.response?.data?.detalhe || "";
      alert(`Falha ao salvar: ${msgErro}\n${detalhe}`);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <header className="page-header">
          <h2 className="page-title">Upload de Notas Fiscais (IA/OCR)</h2>
        </header>

        {/* ÁREA DE UPLOAD */}
        <div className="card" style={{ textAlign: 'center', border: '2px dashed var(--border-color)', background: 'var(--getra-gray-bg)' }}>
          <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>1. Selecione a Nota Fiscal (PDF)</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>O sistema irá ler o conteúdo automaticamente.</p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem' }}>
            <input type="file" accept=".pdf" onChange={handleFileChange} style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--white)' }} />
            <button 
              className="btn-primary" 
              style={{ width: 'auto' }}
              onClick={handleLerArquivo}
              disabled={loading || !arquivo}
            >
              {loading ? 'Lendo Arquivo...' : 'Fazer Upload e Ler'}
            </button>
          </div>
        </div>

        {/* FORMULÁRIO COM DADOS LIDOS */}
        <div className="card">
          <h3 style={{ marginTop: 0, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            2. Conferência de Dados
          </h3>
          
          <form onSubmit={handleSalvar}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              
              <div className="form-group">
                <label className="form-label">Número da Nota</label>
                <input 
                  type="text" 
                  value={dados.numero} 
                  onChange={e => setDados({...dados, numero: e.target.value})}
                  placeholder="Ex: 123456"
                />
              </div>

              <div className="form-group">
                <label className="form-label">CNPJ Emitente</label>
                <input 
                  type="text" 
                  value={dados.cnpj} 
                  onChange={e => setDados({...dados, cnpj: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Data de Emissão</label>
                <input 
                  type="date" 
                  value={dados.data_emissao} 
                  onChange={e => setDados({...dados, data_emissao: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Valor Total (R$)</label>
                <input 
                  type="number" 
                  step="0.01" 
                  value={dados.valor} 
                  onChange={e => setDados({...dados, valor: e.target.value})}
                  style={{ fontWeight: '600', color: 'var(--getra-green-dark)' }} 
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Resumo / Observações</label>
                <input 
                  type="text" 
                  value={dados.resumo} 
                  onChange={e => setDados({...dados, resumo: e.target.value})}
                />
              </div>

            </div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '0.75rem 2rem' }}>
                Confirmar e Salvar Nota
              </button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}