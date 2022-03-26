import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductoService],

})
export class ProductComponent implements OnInit {


  public producto!: Producto;
  // product$!: Observable<Producto>;
   // error: string;

   constructor(
     private http: HttpClient,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
    handler: HttpBackend,
    ) {
      this.http = new HttpClient(handler);
     }

  ngOnInit(){

    // this.product$ = this.activatedRoute.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.productoService.getProducto('_id')
    //   )
    // );

    window.scrollTo(0, 0);
  }


  cargarProducto(_id: string){

    if(_id === 'nuevo'){
      return;
    }

    this.productoService.getProductoById(_id)
        console.log(this.producto);
    // .pipe(
    //   // delay(100)
    //   )
    //   .subscribe( res =>{
    //     res = this.producto;
    //     // this.productoSeleccionado = producto;

    //   });

  }




  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
