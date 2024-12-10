import React from 'react';
import { Wrench } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Wrench className="h-7 w-7" />
      <span className="text-2xl font-bold">CoisaFácil</span>
      <span className="text-2xl">🛠️</span>
    </div>
  );
}