import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  onRegister() {
    //validate
    if (!this.username) {
      alert('Username missing!');
      return;
    }
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
      username: this.username,
    };

    this.authService.register(user).subscribe(
      ({ data }) => {
        console.log(data);
        this.router.navigate([`/login`]);
      },
      (error) => {
        alert(error);
      }
    );
  }

  onLogin() {
    this.router.navigate([`/login`]);
  }
}
