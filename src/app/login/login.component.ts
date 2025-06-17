import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: String = "";
  public obj: Cliente = new Cliente();

  public entrar(){
    console.log(this.obj.email);
    if(this.obj.email=="arthurborgess21@gmail.com"){
      localStorage.setItem("meuNome", "Norton");
      window.location.href="./vitrine";
    } else {
      this.mensagem = "Email ou senha invalidos!!!";
    }
  }

}
