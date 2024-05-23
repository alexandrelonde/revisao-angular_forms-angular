import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateFormModule } from './components/template-form/template-form.module';
import { DataFormModule } from './components/data-form/data-form.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TemplateFormModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  Ao criarmos componentes que vão funcionar de maneira segmentada,
  ao invés de colocarmos o mesmo direto aqui, colocamos o mesmo no
  seu common module e colocamos o common module aqui.

  Os components a serem visualizados pelo commmon module irão no
  common mudule (vamos chamar o common module de submodulo)

  component específico -> submodulo -> app.module

*/
