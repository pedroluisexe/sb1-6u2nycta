import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="bg-emerald-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Logo />
          </div>
          
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar itens para alugar..."
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
              Anunciar
            </button>
            <button className="px-4 py-2 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}