import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss'
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private forbuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.formulario = this.forbuilder.group({
      nome: [null],
      email: [null],
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.httpClient.post('https://httpbin.org/post', this.formulario.value)
      .pipe(
        map(res => res) //map manipula a resposta antes de passar para o subscribe
      )
      .subscribe(
        dados => {
          console.log(dados);
          this.formulario.reset(); // reseta os campos do formulário após o envio de dados
        },
        error => {
          console.error(error);
          alert('Erro ao enviar os dados!');
        }
      );
  }

  resetar() {
    this.formulario.reset();
  }
}

/*
  Com a lógica do onSubmit, resetamos o formulário caso os dados sejam
  enviados com sucesso e caso haja algum erro, é exibida uma mensagem de
  alerta.
*/
