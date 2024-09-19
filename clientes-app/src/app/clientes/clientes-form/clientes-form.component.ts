import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Clientes;

  constructor() { }

  ngOnInit(): void {
  }

}
