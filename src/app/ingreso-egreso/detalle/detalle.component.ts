import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IngresoEgreso} from '../ingreso-egreso.model';
import {Subscription} from 'rxjs';
import {IngresoEgresoService} from '../ingreso-egreso.service';
import Swal from 'sweetalert2';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
  items: IngresoEgreso[];
  subscription: Subscription = new Subscription();

  constructor(private store: Store<fromIngresoEgreso.AppState>,
              public ingresoEgresoService: IngresoEgresoService) {
  }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
      .subscribe(items => {
        this.items = items.items;
      });
  }

  borrarItem(item: IngresoEgreso) {
    this.ingresoEgresoService.borrarIngresoEgreso(item.uid)
      .then(() => {
        Swal.fire({
          type: 'success',
          title: 'Eliminado',
          text: item.description
        });
      })
      .catch(error => {
        Swal.fire({
          type: 'error',
          text: error
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
