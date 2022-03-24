import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SlideProductosHComponent } from './slide-productos-h/slide-productos-h.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { LateralComponent } from './lateral/lateral.component';
import { MenuFooterAdminComponent } from './menu-footer-admin/menu-footer-admin.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { ProductOrderListComponent } from './product-order-list/product-order-list.component';
import { ProductlistShippinOrderComponent } from './productlist-shippin-order/productlist-shippin-order.component';
import { ShippingBillComponent } from './shipping-bill/shipping-bill.component';


@NgModule({
  declarations: [
    MenuFooterComponent,
    HeaderComponent,
    CategoryBarComponent,
    SearchBarComponent,
    SlideProductosHComponent,
    SliderComponent,
    LateralComponent,
    MenuFooterAdminComponent,
    ProductOrderComponent,
    ProductOrderListComponent,
    ProductlistShippinOrderComponent,
    ShippingBillComponent
  ],
  exports: [
    MenuFooterComponent,
    HeaderComponent,
    CategoryBarComponent,
    SearchBarComponent,
    SlideProductosHComponent,
    SliderComponent,
    LateralComponent,
    MenuFooterAdminComponent,
    ProductOrderComponent,
    ProductOrderListComponent,
    ProductlistShippinOrderComponent,
    ShippingBillComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
