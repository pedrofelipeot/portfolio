import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './componentes/Habilidades/habilidades.component';
import { ExperienciasComponent } from './componentes/Experiencias/experiencias.component';
import { ProjetosComponent } from './componentes/Projetos/projetos.component';
import { HomeComponent } from './componentes/Home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent }, // <-- define a rota principal
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: '**', redirectTo: '' } // redireciona qualquer outra rota para Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
