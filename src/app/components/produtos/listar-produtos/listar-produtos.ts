import { ChangeDetectorRef, Component } from '@angular/core';
import { Produtos } from '../../../Services/produtos';
import { IProduto } from '../../../model/IProduto.model';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listarProdutos: IProduto[] = []
  
  constructor(private produtosService: Produtos, private cd: ChangeDetectorRef ) {
    this.carregarProdutos();
  }
  


  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno =>{
    this.listarProdutos = retorno;

    this.cd.detectChanges();
   
    })
  }
}
