import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employee/:id', component: EmployeeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employees', component: EmployeelistComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
