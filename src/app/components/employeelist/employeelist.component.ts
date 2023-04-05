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
      this.employees = employees.data.getAllEmployees;
    });
  }

  onView(employee: any) {
    // this.router.navigate([`employee/${employee.id}`]);
  }

  onDelete(employee: any) {
    this.employeeService.deleteEmployee(employee.id).subscribe(
      ({ data }) => {
        this.employees = this.employees.filter(
          (emp: any) => emp.id !== employee.id
        );
        alert('Successfully deleted!');
      },
      (error) => {
        alert(error);
      }
    );
  }
}
