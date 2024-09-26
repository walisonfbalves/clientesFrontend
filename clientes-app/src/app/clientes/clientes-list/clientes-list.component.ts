import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.
    getCliente().
    subscribe( reposta => {
      this.clientes = reposta
    })
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form'])
  }

  prepararDelecao(cliente : Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service.deleteCliente(this.clienteSelecionado).subscribe( response => {
      this.mensagemSucesso = 'Cliente deletado com sucesso!'
      this.ngOnInit()
    },
    reponseErro => {
      this.mensagemErro = 'Ocorreu um erro ao deletar o cliente'
    }
  )
  }
}
