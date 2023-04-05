import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  id: string | null = '';
  employee: any = '';
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.employeeService
      .getEmployee(this.id as string)
      .subscribe((employee) => {
        this.employee = employee.data.getEmployee;
      });
  }
}
