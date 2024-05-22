import { HttpClient } from '@angular/common/http';
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
    email: null,

    cep: null,
    numero: null,
    complemento: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null
  }

  constructor(private httpClient: HttpClient){
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

  consultaCEP(cep: string, form: NgForm) {
    const validacep = /^[0-9]{8}$/; // Certifique-se de que o CEP tem exatamente 8 dígitos numéricos
    if (validacep.test(cep)) {
      this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(
        dados => {
          this.populaDadosForm(dados, form);
        },
        error => {
          console.error('Erro ao buscar CEP:', error);
        }
      );
    } else {
      console.error('Formato de CEP inválido');
    }
  }

  populaDadosForm(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

}
