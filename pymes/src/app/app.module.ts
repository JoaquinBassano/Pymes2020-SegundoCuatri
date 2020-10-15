import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';  
import { ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { MyInterceptor } from "./shared/my-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
    NgbModalModule, 
    ModalDialogComponent
  ],
  entryComponents: [ModalDialogComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbPaginationModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent }
    ])
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: "/" } , { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
