import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RestaurantesModule } from './restaurantes/restaurantes.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'restaurantes', loadChildren: () => import('./restaurantes/restaurantes.module').then(m => m.RestaurantesModule) },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }