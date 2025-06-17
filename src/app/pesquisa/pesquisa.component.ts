import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent {
  public filtro: string = '';
  public lista: Produto[] = [
    { codigo: 1, nome: 'Sapato Zara', valor: 300, descritivo: '', valorPromo: 90, estoque: 110, destaque: 1 },
    { codigo: 2, nome: 'Sapato Zara (unico)', valor: 250, descritivo: '', valorPromo: 90, estoque: 1, destaque: 1 },
    { codigo: 3, nome: 'Sapato Zara clássico', valor: 200, descritivo: '', valorPromo: 90, estoque: 400, destaque: 1 },
   
  ];

  // Lista filtrada inicialmente mostra todos os produtos
  public listaFiltrada: Produto[] = [...this.lista];

  filtrar() {
    const texto = this.removerAcentos(this.filtro.trim().toLowerCase());
    if (texto.length === 0) {
      this.listaFiltrada = [...this.lista];
      return;
    }
    this.listaFiltrada = this.lista.filter((item) =>
      this.removerAcentos(item.nome.toLowerCase()).includes(texto)
    );
  }

  // Função para remover acentos - importante para pesquisa mais flexível
  removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  public comprar(produto: Produto) {
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor;
    let lista: Item[] = [];
    let json = localStorage.getItem('cesta');
    if (json == null) {
      lista.push(novo);
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }
    localStorage.setItem('cesta', JSON.stringify(lista));
    window.location.href = './cesta';
  }
}
