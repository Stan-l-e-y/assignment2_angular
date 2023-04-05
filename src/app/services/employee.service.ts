import { Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private apollo: Apollo) {}

  getEmployees(): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery<any>({
      query: gql`
        {
          getAllEmployees {
            email
            first_name
            gender
            id
            last_name
            salary
          }
        }
      `,
    }).valueChanges;
  }

  getEmployee(id: string): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query GetEmployee($getEmployeeId: String!) {
          getEmployee(id: $getEmployeeId) {
            id
            first_name
            last_name
            email
            gender
            salary
          }
        }
      `,
      variables: { getEmployeeId: id },
    }).valueChanges;
  }

  addEmployee(employee: any): Observable<MutationResult<any>> {
    return this.apollo.mutate({
      mutation: gql`
        mutation AddEmployee($addEmployeeInput: AddEmployeeInput) {
          addEmployee(addEmployeeInput: $addEmployeeInput) {
            id
            first_name
            last_name
            email
            gender
            salary
          }
        }
      `,
      variables: {
        addEmployeeInput: employee,
      },
    });
  }

  updateEmployee(
    employeeId: string,
    employee: any
  ): Observable<MutationResult<any>> {
    return this.apollo.mutate({
      mutation: gql`
        mutation UpdateEmployee(
          $updateEmployeeId: String!
          $updateInput: EmployeeUpdateInput
        ) {
          updateEmployee(id: $updateEmployeeId, updateInput: $updateInput) {
            email
            first_name
          }
        }
      `,
      variables: {
        updateEmployeeId: employeeId,
        updateInput: employee,
      },
    });
  }

  deleteEmployee(employeeId: string): Observable<MutationResult<any>> {
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteEmpoyee($deleteEmpoyeeId: String!) {
          deleteEmpoyee(id: $deleteEmpoyeeId)
        }
      `,
      variables: {
        deleteEmpoyeeId: employeeId,
      },
    });
  }
}
