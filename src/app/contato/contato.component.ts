import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  public mensagem: String = "";

  public enviar(){
      this.mensagem = "Contato enviado com sucesso!!! Verifique !!!";
  }

}
