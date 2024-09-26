import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes';
import { ClientesService } from 'src/app/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

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
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.cliente = new Cliente()
    let params = this.activatedRoute.params
    params.subscribe(params => {
      if (params && params['id']) {
        let idCliente = params['id']
        this.service.getClienteById(idCliente)
          .subscribe(response => { this.cliente = response },
            erroResponse => {
              console.error('Erro ao buscar cliente:', erroResponse)
              this.cliente = new Cliente()
            }
          )
      }
    })

  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(response => {
      this.clienteSalvo = true;
      this.erros = null;
      this.cliente = response;
    }, erroResponse => {
      this.clienteSalvo = false;
      this.erros = erroResponse.error.erros
    })
  }

  voltar() {
    this.router.navigate(['/clientes-list'])
  }
}
