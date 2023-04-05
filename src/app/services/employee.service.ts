import { Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';

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
}
