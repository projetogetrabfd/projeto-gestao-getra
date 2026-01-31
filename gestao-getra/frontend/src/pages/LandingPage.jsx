import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();
  
  // Referência para a seção "Sobre"
  const sobreRef = useRef(null);

  // Função para rolar suavemente até a seção
  const scrollToSobre = () => {
    sobreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1e293b', background: '#fff' }}>
      
      {/* --- NAVBAR --- */}
      <nav style={styles.navbar}>
        <div style={styles.containerNav}>
          <div style={styles.logo}>
            <span style={{ color: '#22c55e', fontSize: '24px', fontWeight: 'bold' }}>G</span>
            <span style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '5px' }}>GETRA</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => navigate('/login')} style={styles.btnOutline}>
              Entrar
            </button>
            <button onClick={() => navigate('/login')} style={styles.btnPrimary}>
              Criar Conta
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Topo) --- */}
      <header style={styles.hero}>
        <div style={styles.containerHero}>
          <div style={styles.heroContent}>
            <span style={styles.badge}>✨ Gestão completa e descomplicada</span>
            <h1 style={styles.title}>
              O Controle Financeiro que sua empresa <span style={{ color: '#22c55e' }}>precisava.</span>
            </h1>
            <p style={styles.subtitle}>
              Simplifique a emissão de notas, controle pagamentos via PIX e gerencie seus clientes em um único lugar. O GETRA coloca sua empresa nos trilhos.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <button 
                onClick={() => navigate('/login')} 
                style={{...styles.btnPrimary, padding: '15px 40px', fontSize: '1.1rem'}}
              >
                Começar Agora 🚀
              </button>
              
              {/* Botão Saiba Mais com Scroll */}
              <button 
                onClick={scrollToSobre} 
                style={{...styles.btnOutline, padding: '15px 30px', fontSize: '1.1rem'}}
              >
                Saiba Mais
              </button>
            </div>
          </div>
          
          {/* Ilustração ou Imagem do Sistema */}
          <div style={styles.heroImage}>
            <div style={styles.mockupWindow}>
               <div style={{padding: 20, textAlign: 'center', color: '#64748b'}}>
                  📊 <strong>Dashboard GETRA</strong><br/>
                  <small>Gráficos, KPIs e Controle Total</small>
                  <div style={{marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center'}}>
                     <div style={{width: 80, height: 60, background: '#dcfce7', borderRadius: 8}}></div>
                     <div style={{width: 80, height: 60, background: '#fee2e2', borderRadius: 8}}></div>
                     <div style={{width: 80, height: 60, background: '#e0f2fe', borderRadius: 8}}></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURES (Funcionalidades) --- */}
      <section style={styles.features}>
        <div style={styles.container}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '50px' }}>Por que escolher o GETRA?</h2>
          
          <div style={styles.gridFeatures}>
            <div style={styles.cardFeature}>
              <div style={styles.iconBox}>💰</div>
              <h3>Gestão Financeira</h3>
              <p>Controle contas a pagar e receber. Visualize inadimplência e fluxo de caixa em tempo real.</p>
            </div>

            <div style={styles.cardFeature}>
              <div style={styles.iconBox}>👥</div>
              <h3>Área do Cliente</h3>
              <p>Seus clientes têm um painel exclusivo para acessar faturas, 2ª via de boletos e histórico.</p>
            </div>

            <div style={styles.cardFeature}>
              <div style={styles.iconBox}>⚡</div>
              <h3>Pagamento via PIX</h3>
              <p>Geração automática de QR Code PIX com baixa facilitada. Receba mais rápido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: SOBRE (INSTITUCIONAL) --- */}
      <section ref={sobreRef} style={styles.aboutSection}>
        <div style={styles.container}>
            <div style={styles.aboutBox}>
                <h2 style={{ marginBottom: '15px', color: '#fff' }}>Sobre a Iniciativa</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e2e8f0', maxWidth: '800px', margin: '0 auto' }}>
                    O sistema <strong>GETRA</strong> foi desenvolvido como parte integrante e etapa final do programa 
                    <strong style={{ color: '#4ade80' }}> Bolsa Futuro Digital</strong>, uma iniciativa inovadora promovida pela 
                    <strong style={{ color: '#4ade80' }}> Softex-PE</strong> para fomentar novos talentos na tecnologia.
                </p>
                
                <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '1rem', color: '#94a3b8' }}>Desenvolvido com dedicação por:</p>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '10px' }}>Turma 03 PB - C1</h3>
                    <h3 style={{ fontSize: '1.0rem', color: '#fff' }}>Alunos:Camila Dornelas, Emely Maria Silva Basilio, Kauã De Araújo Rocha , Luiz Manoel Magalhães da Silveira, Matheus Mendes de Sousa , Militão Araujo Duarte do Rêgo e Pedro Lucas de Brito</h3>
                    <span style={styles.locationBadge}> Polo Campina Grande - PB</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© 2026 GETRA Sistemas. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

// --- ESTILOS CSS-IN-JS ---
const styles = {
  navbar: {
    borderBottom: '1px solid #f1f5f9',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 100
  },
  containerNav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  hero: {
    background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
    padding: '80px 0 100px 0',
    display: 'flex',
    alignItems: 'center'
  },
  containerHero: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'center'
  },
  heroContent: {
    maxWidth: '550px'
  },
  badge: {
    background: '#dcfce7',
    color: '#166534',
    padding: '5px 12px',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '0.9rem',
    marginBottom: '20px',
    display: 'inline-block'
  },
  title: {
    fontSize: '3rem',
    lineHeight: '1.2',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#0f172a'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '10px'
  },
  btnPrimary: {
    background: '#22c55e',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s',
    boxShadow: '0 4px 6px -1px rgba(34, 197, 94, 0.2)'
  },
  btnOutline: {
    background: 'transparent',
    color: '#334155',
    border: '1px solid #cbd5e1',
    padding: '10px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s'
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center'
  },
  mockupWindow: {
    width: '100%',
    maxWidth: '500px',
    height: '350px',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  features: {
    padding: '80px 0',
    background: '#fff'
  },
  gridFeatures: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  },
  cardFeature: {
    background: '#f8fafc',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #f1f5f9',
    transition: 'transform 0.2s',
  },
  iconBox: {
    fontSize: '2rem',
    marginBottom: '15px',
    background: '#fff',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  // ESTILOS DA NOVA SEÇÃO
  aboutSection: {
    background: '#0f172a', // Fundo escuro para destaque
    padding: '80px 0',
    color: '#fff',
    textAlign: 'center'
  },
  aboutBox: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  locationBadge: {
    display: 'inline-block',
    marginTop: '10px',
    background: 'rgba(255,255,255,0.1)',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#e2e8f0'
  },
  footer: {
    background: '#020617', // Um tom mais escuro que a seção Sobre
    color: '#64748b',
    padding: '20px 0',
    textAlign: 'center',
    fontSize: '0.8rem'
  }
};