import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  id: string | null = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  gender: string = '';
  salary: number = 0;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.employeeService
      .getEmployee(this.id as string)
      .subscribe((employee) => {
        this.first_name = employee.data.getEmployee.first_name;
        this.last_name = employee.data.getEmployee.last_name;
        this.email = employee.data.getEmployee.email;
        this.gender = employee.data.getEmployee.gender;
        this.salary = employee.data.getEmployee.salary;
      });
  }

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

    this.employeeService.updateEmployee(this.id as string, emp).subscribe(
      ({ data }) => {
        this.router.navigate([`/employees`]);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
