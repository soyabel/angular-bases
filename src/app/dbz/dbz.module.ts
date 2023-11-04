import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { MainPageComponent } from './pages/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
   /// NameComponen
    MainPageComponent
  ]
})
export class DbzModule { }
