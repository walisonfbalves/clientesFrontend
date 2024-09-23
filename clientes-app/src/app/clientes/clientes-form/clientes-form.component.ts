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
    
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe( response => {
      this.clienteSalvo = true;
      this.erros = null;
      this.cliente = response;
    }, erroResponse => {
      this.clienteSalvo = false;
      this.erros = erroResponse.error.erros
    }) 
  }
}
