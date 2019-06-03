
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http ,Headers,RequestOptions,URLSearchParams,Response }       from '@angular/http';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Todo } from './todo';
import { map, catchError } from 'rxjs/operators';



const API_URL = environment.apiUrl;
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(API_URL + '/todos');
  }

  public createTodo(todo: any): Observable<Todo> {
   

    return this.http
      .post<Todo>(API_URL + '/todos', todo);
      //.catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http
      .get<Todo>(API_URL + '/todos/' + todoId);
  }

  public updateTodo(todo: any): Observable<Todo> {
   
    return this.http
      .put<Todo>(API_URL + '/todos' , todo);
  }
  public updateTodoAll(checkAll: any): Observable<any> {
  //  let options = new RequestOptions({ headers: headers });
    let params: HttpParams = new HttpParams();
    params=params.set('checkAll', checkAll);
    //options.params = params;
    return this.http
      .put<Todo>(API_URL + '/todosall' ,null, {
        headers:headers,
        params: params
      });
      //.catch(this.handleError);
  }

  public deleteTodoById(todoId:any): Observable<any> {
  
  //      let options = new RequestOptions({ headers: headers });
        let params =  new HttpParams();
        params= params.append('id', todoId);
       // options.params = params;
       
    return this.http
      .delete(API_URL + '/todos' , {
        headers:headers,
        params: params
       
      }
    );
    
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return observableThrowError(error);
  }
}
