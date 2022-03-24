import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { IconosService } from '../services/iconos.service';
// import { CategoriaService } from '../services/categoria.service';
// import { MarcaService } from '../services/marca.service';

//pluggins

import { NgxDropzoneModule } from 'ngx-dropzone';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
  ],
  exports: [
  ],



  imports: [
    CommonModule,
    // PipesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxDropzoneModule,
    PdfViewerModule,
    NgxPaginationModule
  ],
  providers:[
    // IconosService,
    // MarcaService,
    // CategoriaService
  ]
})
export class AdminModule { }
