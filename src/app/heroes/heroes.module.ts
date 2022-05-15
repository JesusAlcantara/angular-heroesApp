import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponentComponent } from './components/heroe-tarjeta-component/heroe-tarjeta-component.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponentComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
<<<<<<< HEAD
    FormsModule,
=======
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
