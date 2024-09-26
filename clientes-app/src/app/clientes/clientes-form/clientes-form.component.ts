import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes';
import { ClientesService } from 'src/app/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  clienteSalvo: boolean = false;
  erros: String[];
  id: number;

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
        this.id = params['id']
        this.service.getClienteById(this.id)
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
    if (this.id) {
      this.service.putCliente(this.cliente).subscribe(response => {
        this.clienteSalvo = true;
        this.erros = null;
      },
        erroResponse => {
          this.clienteSalvo = false;
          this.erros = erroResponse.error.erros
        }
      )

    } else {
      this.service.salvar(this.cliente).subscribe(response => {
        this.clienteSalvo = true;
        this.erros = null;
        this.cliente = response;
      }, erroResponse => {
        this.clienteSalvo = false;
        this.erros = erroResponse.error.erros
      })
    }
  }

  voltar() {
    this.router.navigate(['/clientes-list'])
  }
}
