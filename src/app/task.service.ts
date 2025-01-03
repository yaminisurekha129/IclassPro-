import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getData(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      console.error('No token found');
    }
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get('http://127.0.0.1:8000/api/tasks', { headers });
  }

  getUsers():Observable<any>{
    const token=this.getToken();
    if(!token){
      console.error('No token found');
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.get('http://127.0.0.1:8000/api/show',{headers});
  }

  getAllTask():Observable<any>{
    const token=this.getToken();
    if(!token){
      console.error('No token found');
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.get('http://127.0.0.1:8000/api/taskTable',{headers});
  }

  addTask(payload:{user_id:string;task_id:any}):Observable<any>{
    const token=this.getToken();
    if(!token){
      console.error('No token found');
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.post('http://127.0.0.1:8000/api/assignTask',payload,{headers});
  }

 


}
