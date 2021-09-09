import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-clientes',
  templateUrl: './get-clientes.component.html',
  styleUrls: ['./get-clientes.component.css']
})
export class GetClientesComponent implements OnInit {

  clientes: Array<any> = [];
  
  constructor() { }

  ngOnInit() {

    // Realice la petición al URL http://localhost:3001/clientes
    // Guarde el resultado en el atributo clientes
    fetch("http://localhost:4000/api/cliente")
    .then(response => response.json())
    .then(clientes => {
      this.clientes = clientes 
    })

  }

}
