import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public lista: Produto[] = 
  [{codigo:1,nome:"Sapato Zara",valor:300, descritivo:"",
    valorPromo:90, estoque:110, destaque:1},
    {codigo:2,nome:"Sapato Zara(unico)",valor:250, descritivo:"",
    valorPromo:90, estoque:1, destaque:1},
    {codigo:3,nome:"Sapato Zara clássico",valor:200, descritivo:"",
    valorPromo:90, estoque:400, destaque:1},
    {codigo:1,nome:"Sapato Zara",valor:300, descritivo:"",
    valorPromo:90, estoque:110, destaque:1},
    {codigo:2,nome:"Sapato Zara(unico)",valor:250, descritivo:"",
    valorPromo:90, estoque:1, destaque:1},
    {codigo:3,nome:"Sapato Zara clássico",valor:200, descritivo:"",
    valorPromo:90, estoque:400, destaque:1}
  ];

  public comprar(produto: Produto){
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor; 
    let lista : Item[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      lista.push(novo);  
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }  
    localStorage.setItem("cesta",JSON.stringify(lista));
    window.location.href="./cesta";
  }
  public detalhe(produto: Produto){  
    localStorage.setItem("produto",JSON.stringify(produto));
    window.location.href="./detalhe";
  }
}


