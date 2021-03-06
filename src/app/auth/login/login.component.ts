import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {
  cargando: boolean;
  subscription: Subscription = new Subscription();

  constructor(public authService: AuthService, public store: Store<AppState>) {
  }

  ngOnInit() {
    this.subscription = this.store.select('ui')
      .subscribe(ui => this.cargando = ui.isLoading);
  }

  onSubmit(data) {
    this.authService.loginUser(data.email, data.password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
