import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.scss'
})
export class FormDebugComponent {

  // Variável form por input que virá de outro component
  @Input() form?: NgForm;

}
