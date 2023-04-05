import { Component } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent {
  employees: any = [];
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      console.log(employees.data.getAllEmployees);
      this.employees = employees.data.getAllEmployees;
    });
  }
}
