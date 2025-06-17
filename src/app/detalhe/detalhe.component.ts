import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
    public obj : Produto = new Produto();
  
    constructor(){
      let json = localStorage.getItem("produto");
      if(json!=null){
        
        this.obj = JSON.parse(json);
      } 
    }
}

