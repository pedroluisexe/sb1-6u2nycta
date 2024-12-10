import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Categoria } from '../types';

interface CategoriaCardProps {
  categoria: Categoria;
}

export function CategoriaCard({ categoria }: CategoriaCardProps) {
  const Icon = LucideIcons[categoria.icone as keyof typeof LucideIcons];

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
      {Icon && <Icon className="h-8 w-8 text-emerald-600 mb-2" />}
      <span className="text-sm font-medium text-gray-700">{categoria.nome}</span>
    </div>
  );
}