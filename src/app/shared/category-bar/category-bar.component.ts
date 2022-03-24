import { Component, OnInit } from '@angular/core';
// import { Categoria } from 'src/app/models/categoria.model';
// import { CategoriaService } from 'src/app/services/categoria.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {

  // public categorias: Categoria[] =[];

  constructor(
    // private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
  }
  loadCategories(){
    // this.categoriaService.cargarCategorias().subscribe(
    //   categorias => {
    //     this.categorias = categorias;
    //     console.log(this.categorias);
    //   }
    // )
  }

}
