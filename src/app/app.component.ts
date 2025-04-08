import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from './services/livro.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  titulo = '';
  autor = '';
  editando = false;
  livroEditado: any = null;

  constructor(public livroService: LivroService) {}

  salvar() {
    if (this.editando) {
      this.livroService.editar(this.livroEditado.id, { id: this.livroEditado.id, titulo: this.titulo, autor: this.autor });
      this.editando = false;
      this.livroEditado = null;
    } else {
      this.livroService.adicionar({ titulo: this.titulo, autor: this.autor });
    }
    this.titulo = '';
    this.autor = '';
  }

  editarLivro(livro: any) {
    this.editando = true;
    this.livroEditado = { ...livro };
    this.titulo = livro.titulo;
    this.autor = livro.autor;
  }

  excluirLivro(id: number) {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
      this.livroService.excluir(id);
    }
  }
  
}
