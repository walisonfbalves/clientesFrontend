import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/clientes';
import { ServicoPrestado } from '../servico-prestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private servicoService: ServicoPrestadoService,
  ) {
    this.servico = new ServicoPrestado;
   }

  ngOnInit(): void {
    this.clienteService.getCliente().subscribe(response => {
      this.clientes = response
    })
  }

  onSubmit() {
    this.servicoService.salvar(this.servico).subscribe( response => {
      console.log(response)
    })
  }

}
