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
    <div className="app-layout">
      <Sidebar />
      <div className="content-area">
        <header className="dashboard-header-simple">
          <h2>Upload de Notas Fiscais (IA/OCR)</h2>
        </header>

        <main className="dashboard-main">
          
          {/* ÁREA DE UPLOAD */}
          <div style={styles.uploadBox}>
            <h3 style={{marginTop: 0, color: '#475569'}}>1. Selecione a Nota Fiscal (PDF)</h3>
            <p style={{fontSize: '0.9rem', color: '#64748b'}}>O sistema irá ler o conteúdo automaticamente.</p>
            
            <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginTop: '15px'}}>
              <input type="file" accept=".pdf" onChange={handleFileChange} />
              <button 
                className="btn-primary" 
                onClick={handleLerArquivo}
                disabled={loading || !arquivo}
              >
                {loading ? 'Lendo Arquivo...' : 'Fazer Upload e Ler'}
              </button>
            </div>
          </div>

          {/* FORMULÁRIO COM DADOS LIDOS */}
          <div style={{marginTop: '30px', background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
            <h3 style={{marginTop: 0, color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px'}}>2. Conferência de Dados</h3>
            
            <form onSubmit={handleSalvar}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px'}}>
                
                <div>
                  <label style={styles.label}>Número da Nota</label>
                  <input 
                    type="text" 
                    value={dados.numero} 
                    onChange={e => setDados({...dados, numero: e.target.value})}
                    style={styles.input} 
                    placeholder="Ex: 123456"
                  />
                </div>

                <div>
                  <label style={styles.label}>CNPJ Emitente</label>
                  <input 
                    type="text" 
                    value={dados.cnpj} 
                    onChange={e => setDados({...dados, cnpj: e.target.value})}
                    style={styles.input} 
                  />
                </div>

                <div>
                  <label style={styles.label}>Data de Emissão</label>
                  <input 
                    type="date" 
                    value={dados.data_emissao} 
                    onChange={e => setDados({...dados, data_emissao: e.target.value})}
                    style={styles.input} 
                  />
                </div>

                <div>
                  <label style={styles.label}>Valor Total (R$)</label>
                  <input 
                    type="number" 
                    step="0.01" 
                    value={dados.valor} 
                    onChange={e => setDados({...dados, valor: e.target.value})}
                    style={{...styles.input, fontWeight: 'bold', color: '#166534'}} 
                  />
                </div>

                <div style={{gridColumn: '1 / -1'}}>
                  <label style={styles.label}>Resumo / Observações</label>
                  <input 
                    type="text" 
                    value={dados.resumo} 
                    onChange={e => setDados({...dados, resumo: e.target.value})}
                    style={styles.input} 
                  />
                </div>

              </div>

              <div style={{marginTop: '20px', textAlign: 'right'}}>
                <button type="submit" className="btn-primary" style={{padding: '12px 30px'}}>
                  Confirmar e Salvar Nota
                </button>
              </div>
            </form>
          </div>

        </main>
      </div>
    </div>
  );
}

const styles = {
  uploadBox: {
    border: '2px dashed #cbd5e1',
    borderRadius: '10px',
    padding: '30px',
    textAlign: 'center',
    background: '#f8fafc'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
    fontSize: '0.9rem',
    color: '#475569'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem'
  }
};