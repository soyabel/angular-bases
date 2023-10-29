import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Iroman','Hulk','She Hulk','Thor'];
  public deleteHero?: string;

  removeLastHero():void{
    //pop() elimina el ultimo elemento del arreglo y lo retorna
    this.deleteHero = this.heroNames.pop();
  }
}
