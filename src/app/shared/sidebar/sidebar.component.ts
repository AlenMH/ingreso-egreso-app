import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {User} from '../../auth/user.model';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {IngresoEgresoService} from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {
  currentUser: string;
  emailUser: string;
  subscription: Subscription = new Subscription();

  constructor(public authService: AuthService, private store: Store<AppState>, public ingresoEgresoService: IngresoEgresoService) {
  }

  ngOnInit() {
    this.subscription = this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null)
      )
      .subscribe(data => {
        this.currentUser = data.user.nombre;
        this.emailUser = data.user.email;
      });
  }

  logout() {
    this.authService.logut();
    this.ingresoEgresoService.cancelarSubscriptions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
