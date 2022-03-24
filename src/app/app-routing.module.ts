import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { InicioComponent } from './pages/inicio/inicio.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StoreComponent } from './pages/store/store.component';


// Modulos

import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  // {path:'home',  pathMatch: 'full', component: HomeComponent},
  // {path:'home', component: HomeComponent},
  // {path:'store', component: StoreComponent},
  // {path:'cart', component: CartComponent},
  // {path:'favorites', component: FavoritesComponent},
  // {path:'profile', component: ProfileComponent},
  // {path:'category', component: CategoryComponent},
  // {path:'search', component: SearchComponent},
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
