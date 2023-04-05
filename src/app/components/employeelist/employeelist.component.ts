import { Component } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent {
  employees: any = [];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      console.log(employees.data.getAllEmployees);
      this.employees = employees.data.getAllEmployees;
    });
  }

  onView(employee: any) {
    // this.router.navigate([`employee/${employee.id}`]);
    console.log(employee);
  }
}
