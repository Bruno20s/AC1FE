import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio1.html',
  styleUrls: ['./exercicio1.css']
})
export class Exercicio1Component {
  artigos = [
    { 
      titulo: 'Invasão Hacker na NASA', 
      autor: 'Victor Hugo', 
      data: '16 de fevereiro de 2025', 
      likes: 0,
      conteudo: 'hacker invade o site da nasa.',
      comentarios: ['Ótimo artigo! Parabéns.', 'Muito informativo.']
    },
    { 
      titulo: 'Bug no sistema bancário', 
      autor: 'Nome do Autor', 
      data: '21 de Setembro de 2025', 
      likes: 0,
      conteudo: 'Sistema bancario apresenta falha no login, não permitindo acesso aos usuários.',
      comentarios: ['Gostei da análise.', 'Poderia ter mais detalhes.']
    },
    { 
      titulo: 'review site de notícias', 
      autor: 'Nome do Autor', 
      data: '15 de maio de 2025', 
      likes: 0,
      conteudo: 'virginia é pega no flagra com vini jr.',
      comentarios: ['Concordo plenamente.', 'Interessante, mas e o próximo passo?']
    }
  ];

  novoComentario: string = ''; 

  curtir(artigo: any) {
    artigo.likes++;
  }

  addComentario(artigo: any, novoComentario: string) {
    if (novoComentario.trim() !== '') {
      artigo.comentarios.push(novoComentario);
      this.novoComentario = ''; 
    }
  }

}