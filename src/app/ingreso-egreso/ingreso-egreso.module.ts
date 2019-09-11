import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {IngresoEgresoComponent} from './ingreso-egreso.component';
import {EstadisticaComponent} from './estadistica/estadistica.component';
import {DetalleComponent} from './detalle/detalle.component';
import {OrdenIgresoEgresoPipe} from './orden-igreso-egreso.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from '../dashboard/dashboard-routing.module';
import {StoreModule} from '@ngrx/store';
import {ingresoEgresoReducer} from './ingreso-egreso.reducer';


@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    OrdenIgresoEgresoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('ingresoEgreso', ingresoEgresoReducer)
  ],
  exports: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    OrdenIgresoEgresoPipe
  ]
})
export class IngresoEgresoModule {
}
