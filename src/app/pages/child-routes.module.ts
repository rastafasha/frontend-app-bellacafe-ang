import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PagesComponent } from './pages.component';
import { PedidoStatusComponent } from './pedido-status/pedido-status.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductComponent } from './product/product.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StoreComponent } from './store/store.component';
import { WalletOrderComponent } from './wallet-order/wallet-order.component';
import { WalletPaymentComponent } from './wallet-payment/wallet-payment.component';
import { WalletComponent } from './wallet/wallet.component';

// import { AdminGuard } from '../guards/admin.guard';




const childRoutes: Routes = [
  { path: '', component: HomeComponent, data:{tituloPage:'Home'} },
  //tienda
  {path:'home', component: HomeComponent, data:{tituloPage:'Bienvenido '}},
  {path:'store', component: StoreComponent, data:{tituloPage:'Store '}},
  {path:'cart', component: CartComponent, data:{tituloPage:'Cart '}},
  {path:'favorites', component: FavoritesComponent, data:{tituloPage:'Favorites '}},
  {path:'profile', component: ProfileComponent, data:{tituloPage:'Profile '}},
  {path:'profile/edit/', component: ProfileEditComponent, data:{tituloPage:'Profile Edit '}},
  {path:'category', component: CategoryComponent, data:{tituloPage:'Category '}},
  {path:'category/:nombre', component: CategoryComponent, data:{tituloPage:'Category '}},
  {path:'search', component: SearchComponent, data:{tituloPage:'Search '}},
  {path:'wallet', component: WalletComponent, data:{tituloPage:'Wallet '}  },
  {path:'wallet-order', component: WalletOrderComponent, data:{tituloPage:'Wallet Order'}  },
  {path:'wallet-payment', component: WalletPaymentComponent, data:{tituloPage:'Wallet Payment'}  },
  {path:'settings', component: SettingsComponent, data:{tituloPage:'Bienvenido '}},
  {path:'shipping', component: ShippingComponent, data:{tituloPage:'Shipping '}},
  {path:'product/:id', component: ProductComponent, data:{tituloPage:'Product '}},
  {path:'pickup-store', component: ShippingComponent, data:{tituloPage:'Pickup Store '}},
  {path:'orders', component: PedidosComponent, data:{tituloPage:'Orders '}},
  {path:'order-status', component: PedidoStatusComponent, data:{tituloPage:'Order Status '}},
  {path:'login-register', component: LoginRegisterComponent, data:{tituloPage:'Sign Up'}},

  //admin

]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
