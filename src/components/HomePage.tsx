import React from 'react';
import { categorias } from '../data/categorias';
import { CategoriaCard } from './CategoriaCard';
import { ItemCard } from './ItemCard';

const itensDestaque = [
  {
    id: '1',
    nome: 'Furadeira Profissional',
    categoria: 'Ferramentas',
    precoAluguelDiario: 35,
    descricao: 'Furadeira de impacto profissional',
    imagemUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    proprietarioId: '1',
    disponivel: true
  },
  {
    id: '2',
    nome: 'Câmera DSLR',
    categoria: 'Equipamentos de Filmagem',
    precoAluguelDiario: 100,
    descricao: 'Câmera profissional para eventos',
    imagemUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    proprietarioId: '2',
    disponivel: true
  },
  {
    id: '3',
    nome: 'Terno Slim Fit',
    categoria: 'Roupas de Festa',
    precoAluguelDiario: 80,
    descricao: 'Terno preto elegante',
    imagemUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    proprietarioId: '3',
    disponivel: true
  }
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categorias.map((categoria) => (
              <CategoriaCard key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Itens em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itensDestaque.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}