import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-succesfull',
  standalone: false,
  templateUrl: './succesfull.component.html',
  styleUrl: './succesfull.component.css'
})
export class SuccesfullComponent implements OnInit {

  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Usuario';
      console.log('Username recibido en queryParams:', this.username); 
    });
  }

  cerrarPagina(): void {
    window.close();
  }

}
