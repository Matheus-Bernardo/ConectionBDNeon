import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para o login se o caminho estiver vazio
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // Adiciona a rota para a página inicial
  { path: '**', redirectTo: '/login' } // Redireciona para o login para qualquer rota desconhecida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
