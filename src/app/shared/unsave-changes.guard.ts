import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

export class UnsavedChangesGuard implements CanDeactivate<RegisterComponent> {

  canDeactivate(component: RegisterComponent) {
    console.log(component.registerForm)
    if (component.registerForm.dirty) {
      return window.confirm('Masz nie zapisane zmiany, czy nadal chcesz opuścić stronę?');
    }
    return true;
  }
}