import {Pipe, PipeTransform} from '@angular/core';
import {IngresoEgreso} from './ingreso-egreso.model';

@Pipe({
  name: 'orden'
})
export class OrdenIgresoEgresoPipe implements PipeTransform {

  transform(items: IngresoEgreso[]): IngresoEgreso[] {
    return items.sort((a, b) => {
      if (a.tipo === 'ingreso') {
        return -1;
      } else {
        return 1;
      }
    });
  }

}
