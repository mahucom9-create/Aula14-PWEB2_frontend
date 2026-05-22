import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listaStrings : string[] = ["Primeiro", "Segundo", "Terceiro"];
  listarNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    Nome : 'wall',
    idade : 46,
    altura : 1.99,
    graduado :true
  };

  listarProdutos: any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2026-05-21', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2026-05-21', id: 2},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2026-05-21'},
  ];

  constructor()
  {
    for (let item of this.listaStrings){
      console.log(item);
    }

    for (const item of this.listarNumeros){
      console.log(item);

    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.Nome);
  }
}
