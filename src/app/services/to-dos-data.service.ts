import { Apollo, gql } from 'apollo-angular';
import { Subject, tap } from 'rxjs';
import { Injectable } from '@angular/core';

const GET_TO_DOS = gql`{
  toDos {
    id
    title
    description
    }
  }
`;

const ADD_TO_DO = gql`
  mutation addToDo ($title: String!, $description: String!) {
    addToDo (
      title: $title,
      description: $description
    ) {
      id
      title
      description
    }
  }
`;

const DELETE_TO_DO = gql`
  mutation deleteToDo ($id: Int!) {
    deleteToDo (id: $id) {
      id
    }
  }
`;

@Injectable()
export class ToDosDataService {
  private _refreshNeeded$ = new Subject<void>();

  constructor(private apollo: Apollo) {}

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  public getToDos() {
    return this.apollo.watchQuery<any>({
      query: GET_TO_DOS,
    }).valueChanges;
  }

  public refetchToDos() {
    return this.apollo
      .watchQuery<any>({
        query: GET_TO_DOS,
      })
      .refetch();
  }

  public addToDo(toDoForm) {
    return this.apollo
      .mutate({
        mutation: ADD_TO_DO,
        variables: {
          title: toDoForm.value.title,
          description: toDoForm.value.description,
        },
      })
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  public deleteToDo(id) {
    return this.apollo
      .mutate({
        mutation: DELETE_TO_DO,
        variables: {
          id: id,
        },
      })
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
}
