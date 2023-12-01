import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth/guards/auth.guard';
//Importamos las dos funciones que creamos anteriormente.

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'restaurantes', loadChildren: () => import('./restaurantes/restaurantes.module').then(m => m.RestaurantesModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }