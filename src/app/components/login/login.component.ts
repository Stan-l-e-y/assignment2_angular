import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    //validate
    this.router.navigate([`/employees`]);
  }

  onRegister() {
    this.router.navigate([`/register`]);
  }
}
