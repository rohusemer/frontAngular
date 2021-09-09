import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dregistros',
  templateUrl: './dregistros.component.html',
  styleUrls: ['./dregistros.component.css']
})
export class DregistrosComponent implements OnInit {
  registros: Array<any> = [];
  
  constructor() { }

  ngOnInit() {

    // Realice la petición al URL http://localhost:3001/clientes
    // Guarde el resultado en el atributo clientes
    fetch("http://localhost:4000/api/registro")
    .then(response => response.json())
    .then(registros => {
      this.registros = registros 
    })

  }

}
