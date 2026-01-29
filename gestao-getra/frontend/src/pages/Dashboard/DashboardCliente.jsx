import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

export function DashboardCliente() {
  const { user } = useAuth();
  
  const [faturas, setFaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [resumo, setResumo] = useState({
    pendente: 0, vencido: 0, totalPago: 0
  });

  const [meusServicos, setMeusServicos] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      // Se não tiver usuário ou se o usuário não tiver vínculo com cliente
      if (!user) return;

      // ID CORRETO: Usamos o ID da tabela Cliente, não o do Usuário
      const idClienteReal = user.dadosCliente?.id;

      if (!idClienteReal) {
        console.warn("Este usuário não tem um cadastro de Cliente vinculado.");
        setLoading(false);
        return; // Para aqui se não achar cliente
      }

      try {
        const response = await axios.get('http://82.208.21.143:2000/faturas');
        const todasFaturas = response.data;

        // FILTRO CORRIGIDO: Compara com idClienteReal
        const minhasFaturas = todasFaturas.filter(f => f.id_cliente === idClienteReal);

        // ... CÁLCULOS (Igual ao anterior) ...
        let totalPendente = 0;
        let totalVencido = 0;
        let totalPago = 0;
        const servicosEncontrados = new Set(); 

        minhasFaturas.forEach(fat => {
            const valor = parseFloat(fat.valor_total);
            
            if (fat.status === 'PENDENTE') totalPendente += valor;
            if (fat.status === 'VENCIDA') totalVencido += valor;
            if (fat.status === 'PAGA') totalPago += valor;

            // LÓGICA DE NOME ATUALIZADA
            let nomeServico = 'Serviço Diverso';
            
            // 1. Tenta pegar da recorrência (assinatura)
            if (fat.recorrencia?.servico?.nome) {
                nomeServico = fat.recorrencia.servico.nome;
            } 
            // 2. SE NÃO, Tenta pegar a descrição manual que criamos agora
            else if (fat.descricao) {
                nomeServico = fat.descricao;
            }
            
            servicosEncontrados.add(nomeServico);
        });

        setFaturas(minhasFaturas);
        setResumo({ pendente: totalPendente, vencido: totalVencido, totalPago: totalPago });
        setMeusServicos(Array.from(servicosEncontrados));

      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, [user]);

  const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  if (loading) return <div style={{padding: 20}}>Carregando suas informações...</div>;
  
  // VERIFICAÇÃO VISUAL SE NÃO TIVER VÍNCULO
  if (!user.dadosCliente) {
     return (
       <div style={{padding: 30, textAlign: 'center'}}>
         <h3>⚠️ Atenção</h3>
         <p>Seu usuário foi criado, mas ainda não vinculamos sua Ficha de Cliente.</p>
         <p>Entre em contato com o suporte.</p>
       </div>
     )
  }

  return (
    <div>
      <header className="page-header">
        <div>
            <h2 className="page-title">Meu Painel</h2>
            {/* Mostra o nome da empresa/cliente, não só do usuário */}
            <p style={{ color: '#666' }}>
                Bem-vindo, <strong>{user.dadosCliente?.nome_razao_social || user.nome}</strong>
            </p>
        </div>
      </header>

      {/* --- CARDS DE RESUMO --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        
        <div className="card" style={{ borderLeft: '5px solid #f59e0b' }}>
            <p style={{ margin: 0, color: '#666' }}>A Pagar (Aberto)</p>
            <h3 style={{ fontSize: '2rem', margin: '5px 0', color: '#f59e0b' }}>
                {formatMoney(resumo.pendente)}
            </h3>
        </div>

        {resumo.vencido > 0 && (
            <div className="card" style={{ borderLeft: '5px solid #ef4444' }}>
                <p style={{ margin: 0, color: '#666' }}>Vencido</p>
                <h3 style={{ fontSize: '2rem', margin: '5px 0', color: '#ef4444' }}>
                    {formatMoney(resumo.vencido)}
                </h3>
            </div>
        )}

        <div className="card" style={{ borderLeft: '5px solid #22c55e' }}>
            <p style={{ margin: 0, color: '#666' }}>Serviços Ativos</p>
            <h3 style={{ fontSize: '2rem', margin: '5px 0', color: '#22c55e' }}>
                {meusServicos.length > 0 ? meusServicos.length : '0'}
            </h3>
        </div>
      </div>

      <div className="card">
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Minhas Faturas</h3>
            
            {faturas.length === 0 ? (
                <p style={{ color: '#888' }}>Você não possui faturas registradas.</p>
            ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Serviço/Descrição</th>
                                <th>Vencimento</th>
                                <th>Valor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faturas.map(fat => (
                                <tr key={fat.id}>
                                    <td>{fat.servico?.nome || fat.descricao || 'Fatura Avulsa'}</td>
                                    <td>{formatDate(fat.data_vencimento)}</td>
                                    <td style={{ fontWeight: 'bold' }}>{formatMoney(fat.valor_total)}</td>
                                    <td>
                                        <span className={`badge ${
                                            fat.status === 'PAGA' ? 'badge-success' : 
                                            fat.status === 'VENCIDA' ? 'badge-danger' : 'badge-warning'
                                        }`}>
                                            {fat.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
      </div>
    </div>
  );
}