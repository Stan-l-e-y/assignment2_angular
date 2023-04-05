import { Injectable } from '@angular/core';
import { Apollo, gql, MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  login(loginInput: any): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query Login($loginInput: LoginInput) {
          login(loginInput: $loginInput)
        }
      `,
      variables: { loginInput: loginInput },
    }).valueChanges;
  }

  register(user: any): Observable<MutationResult<any>> {
    return this.apollo.mutate({
      mutation: gql`
        mutation SignUp($signUpInput: SignUpInput) {
          signUp(signUpInput: $signUpInput) {
            id
            username
            email
            password
          }
        }
      `,
      variables: {
        signUpInput: user,
      },
    });
  }
}
