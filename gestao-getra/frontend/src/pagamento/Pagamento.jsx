import { useState } from 'react';
import axios from 'axios';

export function Pagamento() {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qrCodeData, setQrCodeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const gerarPix = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setQrCodeData(null);

    try {
      // Chama o BACKEND (Rota corrigida, sem /api pois o index.js não define prefixo global)
      const response = await axios.post('http://localhost:3000/pagamento/pix', {
        valor: parseFloat(valor),
        descricao: descricao,
        email: 'cliente@exemplo.com' 
      });

      setQrCodeData(response.data);
    } catch (err) {
      console.error("Erro detalhado:", err.response ? err.response.data : err.message);
      setError('Erro ao gerar QR Code. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const copiarCodigo = () => {
    if (qrCodeData?.qr_code) {
      navigator.clipboard.writeText(qrCodeData.qr_code);
      alert('Código Pix copiado!');
    }
  };

  return (
    
      
      <main className="main-content">
        <header className="page-header">
          <h2 className="page-title">Pagamento via Pix</h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Formulário */}
          <div className="card">
            <h2>Gerar Cobrança</h2>
            <form onSubmit={gerarPix} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Valor (R$)
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}>R$</span>
                  <input 
                    type="number" 
                    step="0.01"
                    value={valor} 
                    onChange={(e) => setValor(e.target.value)} 
                    required 
                    placeholder="0,00"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem 0.75rem 2.5rem', 
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#009ee3'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Descrição
                </label>
                <input 
                  type="text" 
                  value={descricao} 
                  onChange={(e) => setDescricao(e.target.value)} 
                  placeholder="Ex: Mensalidade Janeiro"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#009ee3'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{ 
                  marginTop: '1rem',
                  padding: '1rem', 
                  backgroundColor: loading ? '#9ca3af' : '#009ee3', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#0284c7')}
                onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#009ee3')}
              >
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '20px', height: '20px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                    </svg>
                    Gerar QR Code Pix
                  </>
                )}
              </button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          </div>

          {/* Exibição do QR Code */}
          {qrCodeData && (
            <div className="card" style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#10b981' }}>Pagamento Gerado!</h2>
              
              {qrCodeData.qr_code_base64 && (
                <img 
                  src={`data:image/jpeg;base64,${qrCodeData.qr_code_base64}`} 
                  alt="QR Code Pix" 
                  style={{ width: '250px', height: '250px', margin: '1rem auto' }}
                />
              )}
              
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Copie e cole no app do seu banco:</p>
                <textarea 
                  readOnly 
                  value={qrCodeData.qr_code} 
                  style={{ width: '100%', height: '80px', fontSize: '0.8rem', resize: 'none' }} 
                />
                <button 
                  onClick={copiarCodigo} 
                  style={{ 
                    marginTop: '0.5rem', 
                    padding: '0.5rem 1rem', 
                    backgroundColor: '#10b981', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer' 
                  }}
                >
                  Copiar Código Pix
                </button>
              </div>
              
              {qrCodeData.ticket_url && (
                <div style={{ marginTop: '1rem' }}>
                  <a href={qrCodeData.ticket_url} target="_blank" rel="noopener noreferrer">
                    Ver Ticket no Mercado Pago
                  </a>
                </div>
              )}

              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '4px', fontSize: '0.9rem' }}>
                <strong>⚠️ Modo de Teste (Sandbox)</strong>
                <p style={{ margin: '0.5rem 0 0' }}>
                  Este QR Code é fictício e <strong>NÃO</strong> será reconhecido por apps de banco reais (Nubank, Itaú, etc.).
                  Para simular o pagamento, use uma conta de teste do Mercado Pago.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    
  );
}
