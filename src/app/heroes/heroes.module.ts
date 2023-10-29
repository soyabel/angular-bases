import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';


@NgModule({
  exports: [  //En las exportaciones los componentes seran visibles fuera de este modulo(y no solo son para componentes)
    HeroComponent,
    ListComponent
  ],
  declarations: [ //En las declaraciones los componentes solo seran  visibles dentro de este modulo
    HeroComponent,
    ListComponent
  ],
  imports:[ //En los imports van los modulos ; se importa el CommonModule para poder utilizar las directivas en los componentes
      CommonModule
  ]
})
export class HeroesModule { }
