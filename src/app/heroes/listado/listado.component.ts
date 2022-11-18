import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['spidey','thor','hulk','pantera'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}
