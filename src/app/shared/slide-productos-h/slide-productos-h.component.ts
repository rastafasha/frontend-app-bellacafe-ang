import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-productos-h',
  templateUrl: './slide-productos-h.component.html',
  styleUrls: ['./slide-productos-h.component.css']
})
export class SlideProductosHComponent implements OnInit {

  public productos: any;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
    this.productoService.getProductos().subscribe(
      resp => {
        this.productos = resp;
        console.log(this.productos);
      }
    )
  }

  addToCart(){
    // this.router.navigateByUrl('/app/cart');
    //swal : producto agregado al carrito
  }

}
