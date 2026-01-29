import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

export function Pagamento() {
  const { user } = useAuth();
  
  // Estados
  const [faturasPendentes, setFaturasPendentes] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]); // Array de IDs
  const [dadosPix, setDadosPix] = useState(null); // Guarda o QR Code gerado
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  // 1. Carregar Faturas do Cliente
  useEffect(() => {
    async function carregarFaturas() {
      if (!user || !user.dadosCliente) return;

      try {
        const res = await axios.get('http://82.208.21.143:2000/faturas');
        // Filtra: Só faturas DESTE cliente e que estão PENDENTES ou VENCIDAS
        const minhasPendencias = res.data.filter(f => 
            f.id_cliente === user.dadosCliente.id && 
            (f.status === 'PENDENTE' || f.status === 'VENCIDA')
        );
        setFaturasPendentes(minhasPendencias);
      } catch (err) {
        console.error("Erro ao buscar faturas", err);
      }
    }
    carregarFaturas();
  }, [user]);

  // 2. Lógica de Seleção (Checkbox)
  const toggleFatura = (id) => {
    if (selecionadas.includes(id)) {
      setSelecionadas(selecionadas.filter(item => item !== id)); // Remove
    } else {
      setSelecionadas([...selecionadas, id]); // Adiciona
    }
    // Se mudar a seleção, limpa o QR Code antigo pois o valor mudou
    setDadosPix(null);
  };

  // 3. Calcular Total
  const valorTotal = faturasPendentes
    .filter(f => selecionadas.includes(f.id))
    .reduce((acc, curr) => acc + parseFloat(curr.valor_total), 0);

  // 4. Gerar o PIX
  const handleGerarPix = async () => {
    if (valorTotal <= 0) return;
    setLoading(true);
    setErro('');

    try {
      const response = await axios.post('http://82.208.21.143:2000/pagamento/pix', {
        valor: valorTotal,
        descricao: `Pagamento de ${selecionadas.length} fatura(s)`,
        email_pagador: user.email,
        ids_faturas: selecionadas
      });

      setDadosPix(response.data);
    } catch (err) {
      console.error(err);
      setErro('Erro ao gerar QR Code. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // 5. Função de Copiar Código
  const copiarCodigo = () => {
    if (dadosPix) {
      navigator.clipboard.writeText(dadosPix.qr_code);
      alert("Código PIX copiado!");
    }
  };

  // Helpers de formatação
  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  if (!user) return <div>Carregando...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Realizar Pagamento</h2>

      {/* SEÇÃO 1: LISTA DE FATURAS */}
      <div className="card">
        <h3>1. Selecione as faturas para pagar</h3>
        
        {faturasPendentes.length === 0 ? (
          <p style={{ color: '#666', padding: '20px 0' }}>🎉 Você não tem faturas pendentes!</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Selecionar</th>
                <th>Descrição</th>
                <th>Vencimento</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {faturasPendentes.map(fat => (
                <tr key={fat.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>
                    <input 
                      type="checkbox"
                      checked={selecionadas.includes(fat.id)}
                      onChange={() => toggleFatura(fat.id)}
                      style={{ transform: 'scale(1.5)', cursor: 'pointer' }}
                    />
                  </td>
                  <td>{fat.descricao || fat.recorrencia?.servico?.nome || 'Fatura Avulsa'}</td>
                  <td>{formatDate(fat.data_vencimento)}</td>
                  <td style={{ fontWeight: 'bold', color: '#333' }}>{formatMoney(fat.valor_total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            <span style={{ fontSize: '1.2rem' }}>Total Selecionado:</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>
                {formatMoney(valorTotal)}
            </span>
        </div>
        
        <button 
            onClick={handleGerarPix}
            disabled={valorTotal === 0 || loading}
            className="btn-primary"
            style={{ width: '100%', marginTop: '20px', fontSize: '1.1rem', opacity: valorTotal === 0 ? 0.5 : 1 }}
        >
            {loading ? 'Gerando PIX...' : `Gerar PIX de ${formatMoney(valorTotal)}`}
        </button>

        {erro && <p style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{erro}</p>}
      </div>

      {/* SEÇÃO 2: EXIBIÇÃO DO QR CODE */}
      {dadosPix && (
        <div className="card" style={{ marginTop: '30px', textAlign: 'center', border: '2px solid #22c55e', background: '#f0fdf4' }}>
            <h3 style={{ color: '#166534' }}>Escaneie para pagar</h3>
            <p style={{ marginBottom: '20px' }}>Abra o app do seu banco e escolha "Pagar com Pix"</p>
            
            {/* Imagem do QR Code Base64 */}
            {dadosPix.qr_code_base64 && (
                <img 
                    src={`data:image/png;base64,${dadosPix.qr_code_base64}`} 
                    alt="QR Code Pix"
                    style={{ maxWidth: '250px', margin: '0 auto', display: 'block' }} 
                />
            )}

            <div style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Ou copie o código abaixo:</p>
                <textarea 
                    readOnly 
                    value={dadosPix.qr_code} 
                    style={{ width: '100%', height: '80px', fontSize: '0.8rem', padding: '10px', background: '#fff' }}
                />
                <button 
                    onClick={copiarCodigo}
                    style={{ marginTop: '10px', padding: '10px 20px', background: '#166534', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Copiar Código Pix
                </button>
            </div>
        </div>
      )}

    </div>
  );
}