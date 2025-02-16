import { Component } from '@angular/core';

@Component({
  selector: 'app-succesfull',
  standalone: false,
  templateUrl: './succesfull.component.html',
  styleUrl: './succesfull.component.css'
})
export class SuccesfullComponent {

  cerrarPagina(): void {
    window.close();
  }

}
