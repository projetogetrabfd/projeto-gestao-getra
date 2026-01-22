import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Components/Sidebar'; // Verifique se o caminho está certo

export function MainLayout() {
  return (
    // 1. A classe aqui TEM que ser "app-container" (igual ao seu CSS)
    <div className="app-container">
      
      {/* 2. A Sidebar será renderizada aqui. 
             O CSS espera que dentro do componente Sidebar tenha a classe "sidebar" */}
      <Sidebar />

      {/* 3. A classe aqui TEM que ser "main-content" */}
      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
}