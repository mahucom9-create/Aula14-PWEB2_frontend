import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class Produtos {
  private URL: string = "http://localhost:3000/produtos";

  private http = inject(HttpClient);
  toastr = inject(ToastrService);

  //construtor (private http: HttpClient) {}
  
  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }
  exibirErro(e: any): Observable<any> {
    this.exibirMensagem('Erro!!!', 'Não foi possivelrealizar a operação', 'toast-error');
    return EMPTY;

  }

  
  exibirMensagem (titulo: string, mensagem: string, tipo: string) : void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);

  }
}
