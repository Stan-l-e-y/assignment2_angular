import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    if (!this.email) {
      alert('Email missing!');
      return;
    }
    if (!this.password) {
      alert('Password missing!');
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(user).subscribe(
      ({ data }) => {
        console.log(data.login);
        if (data.login == 'invalid credentials') {
          alert('invalid credentials');
          return;
        }
        this.router.navigate([`/employees`]);
      },
      (error) => {
        alert(error);
      }
    );
  }

  onRegister() {
    this.router.navigate([`/register`]);
  }
}
