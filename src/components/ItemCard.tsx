import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src={item.imagemUrl}
        alt={item.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.nome}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.categoria}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-emerald-600 font-bold">
            R$ {item.precoAluguelDiario}/dia
          </span>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
            Alugar
          </button>
        </div>
      </div>
    </div>
  );
}