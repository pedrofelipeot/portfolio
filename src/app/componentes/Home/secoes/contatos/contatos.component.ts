import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos',
  standalone: false,
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
 emailDestino: string = 'felipepedrofutebol2004@gmail.com'; // Substituir pelo seu e-mail

  get formAction() {
    return `https://formsubmit.co/${this.emailDestino}`;
  }
}
