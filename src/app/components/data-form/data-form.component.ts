import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss'
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private forbuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.forbuilder.group({
      nome: [null],
      email: [null],
    });
  }
}
