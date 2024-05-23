import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.scss'
})
export class FormDebugComponent {

  // Variável form por input que virá de outro component
  // Utilização de union types para reutilizar o componente
  @Input() form?: NgForm | FormGroup;

}
