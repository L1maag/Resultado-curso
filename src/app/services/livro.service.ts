import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  livros = [
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
    { id: 2, titulo: 'O Cortiço', autor: 'Aluísio Azevedo' },
    { id: 3, titulo: 'Capitães da Areia', autor: 'Jorge Amado' },
    { id: 4, titulo: 'Memórias Póstumas', autor: 'Machado de Assis' },
    { id: 5, titulo: 'Senhora', autor: 'José de Alencar' },
  ];

  listar() {
    return this.livros;
  }

  adicionar(livro: any) {
    livro.id = this.livros.length + 1;
    this.livros.push(livro);
  }

  editar(id: number, livroEditado: any) {
    const index = this.livros.findIndex(l => l.id === id);
    if (index !== -1) this.livros[index] = livroEditado;
  }

  excluir(id: number) {
    this.livros = this.livros.filter(l => l.id !== id);
  }
}
