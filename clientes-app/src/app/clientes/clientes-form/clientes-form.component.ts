import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  clienteSalvo: boolean = false;
  erros: String[];

  constructor(
    private service : ClientesService
  ) {
    this.cliente = service.getCliente()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe( response => {
      this.clienteSalvo = true;
      console.log(response)
    }) 
  }
}
