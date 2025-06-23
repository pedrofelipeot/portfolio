import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componente principal da Home (estrutura geral)
import { HomeComponent } from './componentes/Home/home.component';

// Componentes de seções da Home
import { MenuComponent } from './componentes/Home/secoes/menu/menu.component';
import { BackgroundComponent } from './componentes/Home/secoes/background/background.component';
import { IntroducaoComponent } from './componentes/Home/secoes/introducao/introducao.component';
import { AboutComponent } from './componentes/Home/secoes/about/about.component';
import { FormacaoAcademicaComponent } from './componentes/Home/secoes/formacao-academica/formacao-academica.component';
import { LinhaTempoComponent } from './componentes/Home/secoes/linha-tempo/linha-tempo.component';
import { ContatosComponent } from './componentes/Home/secoes/contatos/contatos.component';

// Demais componentes
import { HabilidadesComponent } from './componentes/Habilidades/habilidades.component';
import { ExperienciasComponent } from './componentes/Experiencias/experiencias.component';
import { ProjetosComponent } from './componentes/Projetos/projetos.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BackgroundComponent,
    IntroducaoComponent,
    AboutComponent,
    FormacaoAcademicaComponent,
    LinhaTempoComponent,
    ContatosComponent,
    HabilidadesComponent,
    ExperienciasComponent,
    ProjetosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
