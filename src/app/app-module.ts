import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProduto } from './components/produtos/cadastrar-produto/cadastrar-produto';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared-module';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

registerLocaleData(localePt);



@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    ListarProdutos,
    CadastrarProduto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideHttpClient(),
     provideToastr()
  ],
  bootstrap: [App]


})
export class AppModule { }
