import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Subscription} from 'rxjs';
import {IngresoEgreso} from '../ingreso-egreso.model';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {
  totalIngreso: number;
  totalEgreso: number;
  ingresoCounter: number;
  egresoCounter: number;
  subscription: Subscription = new Subscription();
  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
      .subscribe(ingresoEgreso => {
        this.contarIngresoEgreso(ingresoEgreso.items);
      });
  }

  contarIngresoEgreso(items: IngresoEgreso[]) {
    this.totalIngreso = 0;
    this.totalEgreso = 0;
    this.ingresoCounter = 0;
    this.egresoCounter = 0;
    items.forEach(item => {
      if (item.tipo === 'ingreso') {
        this.ingresoCounter++;
        this.totalIngreso += item.monto;
      } else {
        this.egresoCounter++;
        this.totalEgreso += item.monto;
      }
    });
    this.doughnutChartData = [
      this.totalIngreso,
      this.totalEgreso
    ];
  }

}
