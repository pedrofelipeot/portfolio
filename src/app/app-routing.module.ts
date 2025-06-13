import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HabilidadesComponent } from './componentes/Habilidades/habilidades.component';
import { ExperienciasComponent } from './componentes/Experiencias/experiencias.component';
import { ProjetosComponent } from './componentes/Projetos/projetos.component';
import { HomeComponent } from './componentes/Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: '**', redirectTo: '' } // sempre por último
];

// Adiciona suporte para scroll em fragmentos (anchor) e restauração de posição
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
