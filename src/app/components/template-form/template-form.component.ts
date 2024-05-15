import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(){
    // mostra os valores do objetos antes do método onSubmit
    console.log('Valor do Objeto - constructor ');
    console.log(this.usuario);
  }

  onSubmit(form: NgForm) {
    // mostra os valores da propriedade usuario
    console.log('Valor do Objeto - onSubmit ');
    console.log(this.usuario);

    // mostra os valores dos campos do formulário
    console.log('Valor do formulário: ');
    console.log(form.value);


    // mostra os valores dos controles
    console.log('Valor dos controles: ');
    console.log(form);
  }
}
