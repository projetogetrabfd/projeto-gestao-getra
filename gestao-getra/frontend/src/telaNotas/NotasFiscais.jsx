import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

export function NotasFiscais() {
  const { user } = useAuth();
  
  // Verifica se é STAFF (Admin ou Financeiro)
  const isStaff = ['ADMIN_MASTER', 'ADMIN', 'FINANCEIRO'].includes(user?.role);

  // Estados
  const [arquivo, setArquivo] = useState(null);
  const [listaClientes, setListaClientes] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState(''); // Só usado se for Staff
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  // Carrega lista de clientes APENAS se for Staff
  useEffect(() => {
    if (isStaff) {
      async function buscarClientes() {
        try {
          const res = await axios.get('http://localhost:3000/clientes');
          setListaClientes(res.data);
        } catch (error) {
          console.error("Erro ao carregar clientes para o select", error);
        }
      }
      buscarClientes();
    }
  }, [isStaff]);

  const handleFileChange = (e) => {
    setArquivo(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setMensagem({ tipo: '', texto: '' });

    if (!arquivo) {
      setMensagem({ tipo: 'erro', texto: 'Por favor, selecione um arquivo (PDF ou XML).' });
      return;
    }

    // LÓGICA DE IDENTIFICAÇÃO DO CLIENTE
    let idFinal = null;

    if (isStaff) {
      // Se for Staff, é OBRIGATÓRIO ter escolhido alguém no select
      if (!clienteSelecionado) {
        setMensagem({ tipo: 'erro', texto: 'Como você é administrador, precisa selecionar a qual cliente essa nota pertence.' });
        return;
      }
      idFinal = clienteSelecionado;
    } else {
      // Se for Cliente, o ID é ele mesmo
      idFinal = user.id;
    }

    // Envio
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    formData.append('id_cliente', idFinal);

    setLoading(true);

    try {
      // Ajuste a rota para a sua rota real do Backend (a que usa Multer)
      await axios.post('http://localhost:3000/notas/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setMensagem({ tipo: 'sucesso', texto: 'Nota fiscal enviada com sucesso!' });
      setArquivo(null); // Limpa state do arquivo
      setClienteSelecionado(''); 
      // Resetar o input file via DOM é difícil no React puro sem ref, mas o usuário vê a msg de sucesso.

    } catch (error) {
      console.error(error);
      const msgErro = error.response?.data?.erro || 'Erro ao enviar o arquivo.';
      setMensagem({ tipo: 'erro', texto: msgErro });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="page-header">
        <h2 className="page-title">Envio de Notas Fiscais</h2>
      </header>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* MENSAGEM DIFERENCIADA NO TOPO */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            {isStaff ? (
                <p style={{ color: '#d97706', background: '#fffbeb', padding: '10px', borderRadius: '6px', border: '1px solid #fcd34d' }}>
                    🔒 Modo Administrativo: Você está lançando uma nota em nome de um cliente.
                </p>
            ) : (
                <p style={{ color: '#166534', background: '#dcfce7', padding: '10px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                    👋 Olá, <strong>{user?.nome}</strong>. Use o formulário abaixo para nos enviar suas notas.
                </p>
            )}
        </div>

        <form onSubmit={handleUpload}>
          
          {/* SELETOR DE CLIENTE (Só aparece para STAFF) */}
          {isStaff && (
            <div className="form-group">
              <label className="form-label">Cliente (Dono da Nota)</label>
              <select 
                className="form-control"
                value={clienteSelecionado}
                onChange={(e) => setClienteSelecionado(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
              >
                <option value="">-- Selecione o Cliente --</option>
                {listaClientes.map(c => (
                  <option key={c.id} value={c.id}>{c.nome_razao_social}</option>
                ))}
              </select>
            </div>
          )}

          {/* INPUT DE ARQUIVO (Igual para todos) */}
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Arquivo da Nota (PDF ou XML)</label>
            <div style={{ 
                border: '2px dashed #ccc', 
                borderRadius: '8px', 
                padding: '30px', 
                textAlign: 'center',
                backgroundColor: '#fafafa',
                cursor: 'pointer'
            }}>
                <input 
                    type="file" 
                    accept=".pdf,.xml"
                    onChange={handleFileChange}
                    style={{ width: '100%' }}
                />
                {!arquivo && <p style={{color: '#999', marginTop: 10}}>Clique para selecionar ou arraste aqui</p>}
            </div>
            {arquivo && (
                <p style={{ marginTop: '10px', color: '#333', fontWeight: 'bold' }}>
                    Arquivo selecionado: {arquivo.name}
                </p>
            )}
          </div>

          {/* BOTÃO DE AÇÃO */}
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={loading}
            style={{ marginTop: '20px' }}
          >
            {loading ? 'Enviando...' : '📤 Enviar Nota Fiscal'}
          </button>

        </form>

        {/* FEEDBACK VISUAL */}
        {mensagem.texto && (
          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            borderRadius: '8px', 
            textAlign: 'center',
            backgroundColor: mensagem.tipo === 'sucesso' ? '#dcfce7' : '#fee2e2',
            color: mensagem.tipo === 'sucesso' ? '#166534' : '#991b1b'
          }}>
            {mensagem.texto}
          </div>
        )}
      </div>
    </div>
  );
}