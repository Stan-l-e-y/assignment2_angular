import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  @Input() first_name: string = '';
  last_name: string = '';
  @Input() email: string = '';
  gender: string = '';
  salary: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.first_name) {
      alert('First name missing!');
      return;
    }
    if (!this.last_name) {
      alert('Last name missing!');
      return;
    }
    if (!this.email) {
      alert('Email missing!');
      return;
    }
    if (!this.gender) {
      alert('Gender missing!');
      return;
    }
    if (!this.salary) {
      alert('Salary missing!');
      return;
    }
    if (
      this.gender !== 'MALE' &&
      this.gender !== 'FEMALE' &&
      this.gender !== 'OTHER'
    ) {
      alert('Invalid gender, please choose one from the options provided');
      return;
    }

    const emp = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      gender: this.gender,
      salary: this.salary,
    };

    this.employeeService.addEmployee(emp).subscribe(
      ({ data }) => {
        this.router.navigate([`/`]);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
