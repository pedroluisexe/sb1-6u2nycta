export interface Item {
  id: string;
  nome: string;
  categoria: string;
  precoAluguelDiario: number;
  descricao: string;
  imagemUrl: string;
  proprietarioId: string;
  disponivel: boolean;
}

export interface Categoria {
  id: string;
  nome: string;
  icone: string;
}