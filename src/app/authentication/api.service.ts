
// import {throwError as observableThrowError,  Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { environment } from 'environments/environment';
// import { Http ,Headers,RequestOptions,URLSearchParams,Response }       from '@angular/http';
// import { HttpClient} from '@angular/common/http';
// import { Todo } from './todo';
// import { map, catchError } from 'rxjs/operators';



// const API_URL = environment.apiUrl;
// const headers = new Headers({ 'Content-Type': 'application/json' });
// @Injectable()
// export class ApiService {

//   constructor(
//     private http: Http
//   ) {
//   }

//   public getAllTodos(): Observable<Todo[]> {
//     return this.http
//       .get(API_URL + '/todos').pipe(
//       map(response => {
//         const todos = response.json();
//         return todos.map((todo) => new Todo(todo));
//       }),catchError(err => this.handleError)
     
     
      
//     )
//   }

//   public createTodo(todo: any): Observable<Todo> {
   

//     return this.http
//       .post(API_URL + '/todos', todo).pipe(
//       map(response => {
//         return new Todo(response.json());
//       }),catchError(err => this.handleError)
//     )
//       //.catch(this.handleError);
//   }

//   public getTodoById(todoId: number): Observable<Todo> {
//     return this.http
//       .get(API_URL + '/todos/' + todoId).pipe(
//       map(response => {
//         return new Todo(response.json());
//       }),catchError(err => this.handleError)
//      // .catch(this.handleError);
//     )
//   }

//   public updateTodo(todo: any): Observable<Todo> {
   
//     return this.http
//       .put(API_URL + '/todos' , todo).pipe(
//       map(response => {
//         return new Todo(response.json());
//       }),catchError(err => this.handleError)
//       //.catch(this.handleError);
//     )
//   }
//   public updateTodoAll(checkAll: any): Observable<null> {
//     let options = new RequestOptions({ headers: headers });
//     let params: URLSearchParams = new URLSearchParams();
//     params.set('checkAll', checkAll);
//     options.params = params;
//     return this.http
//       .put(API_URL + '/todosall' ,null, options).pipe(
//       map(response => null),catchError(err => this.handleError)
//       )
//       //.catch(this.handleError);
//   }

//   public deleteTodoById(todoId:any): Observable<null> {
  
//         let options = new RequestOptions({ headers: headers });
//         let params: URLSearchParams = new URLSearchParams();
//         params.set('id', todoId);
//         options.params = params;
//     return this.http
//       .delete(API_URL + '/todos' , options).pipe(
//       map(response => null),catchError(err => this.handleError))
//       //.catch(this.handleError);
//   }

//   private handleError (error: Response | any) {
//     console.error('ApiService::handleError', error);
//     return observableThrowError(error);
//   }
// }
