import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
    </div>
  );
}

export default App;