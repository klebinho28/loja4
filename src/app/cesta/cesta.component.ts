import { Component } from '@angular/core';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {
  public lista: Item[] = [];
  public mensagem: string = "";
  public totalCesta: number = 0;

  constructor(){
    const json = localStorage.getItem("cesta");
    if(json == null){
      this.mensagem = "sua cesta de compras está vazia !!!";
    } else {
      this.lista = JSON.parse(json);
      for(let item of this.lista){
        this.totalCesta += item.total;
      }
    }
  }

  limpar(){
    this.lista = [];
    this.totalCesta = 0;
    this.mensagem = "sua cesta de compras está vazia !!!";
    localStorage.removeItem("cesta");
  }
}
