import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FotterComponent } from './componentes/fotter/fotter.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home/inicio'
  },

  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'inicio',
        component:InicioComponent
      },

      {
        path:'sobre-nosotros',
        component:SobreNosotrosComponent
      },

      {
        path:'productos',
        component:ProductosComponent
      },

      {
        path:'contacto',
        component:ContactoComponent
      },

      {
        path:'footer',
        component:FotterComponent
      },

      {
        path:'login',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
