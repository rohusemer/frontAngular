import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes:Array<any> = [];

  constructor() {

  }

  ngOnInit(): void {

    // Realice la petición al URL http://localhost:3001/clientes
    // Guarde el resultado en el atributo clientes
    fetch("http://localhost:3001/clientes")
    .then(response => response.json())
    .then(clientes => {
      this.clientes = clientes 
    })

  }
}
