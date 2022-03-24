import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { WalletComponent } from './wallet/wallet.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductComponent } from './product/product.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PickupStoreComponent } from './pickup-store/pickup-store.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoStatusComponent } from './pedido-status/pedido-status.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { WalletOrderComponent } from './wallet-order/wallet-order.component';
import { WalletPaymentComponent } from './wallet-payment/wallet-payment.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


@NgModule({
  declarations: [
    InicioComponent,
    HomeComponent,
    PagesComponent,
    FavoritesComponent,
    CartComponent,
    ProfileComponent,
    StoreComponent,
    SearchComponent,
    CategoryComponent,
    WalletComponent,
    WalletOrderComponent,
    WalletPaymentComponent,
    ProfileEditComponent,
    ShippingComponent,
    SettingsComponent,
    ProductComponent,
    PickupStoreComponent,
    PedidosComponent,
    PedidoStatusComponent,
    SinglepageComponent,
    LoginRegisterComponent,

  ],
  exports: [
    InicioComponent,
    HomeComponent,
    PagesComponent,
    FavoritesComponent,
    CartComponent,
    ProfileComponent,
    StoreComponent,
    SearchComponent,
    CategoryComponent,
    WalletComponent,
    WalletOrderComponent,
    WalletPaymentComponent,
    ProfileEditComponent,
    ShippingComponent,
    SettingsComponent,
    ProductComponent,
    PickupStoreComponent,
    PedidosComponent,
    PedidoStatusComponent,
    SinglepageComponent,
    LoginRegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,

  ]
})
export class PagesModule { }
