import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [ //le digo a todo lo exterior que cuenden consumir ese CounterComponent
    CounterComponent
  ]
})
export class CounterModule{}


