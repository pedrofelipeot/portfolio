import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './componentes/background/background.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { IntroducaoComponent } from './componentes/introducao/introducao.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    MenuComponent,
    IntroducaoComponent,
    AboutComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
