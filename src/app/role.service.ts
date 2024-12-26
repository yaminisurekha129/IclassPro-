import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpclient: HttpClient) { }


  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getData(): Observable<any> {
    const token = this.getToken();
    console.log('Return token',token);
    if (!token) {
      console.error('No token found');
    
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${token}` });

    return this.httpclient.get('http://127.0.0.1:8000/api/roleTable', { headers });
  }

  getDetails():Observable<any>{
    const token=this.getToken();
    console.log('Return token',token);
    if(!token){
      console.error('No token found');
    }
    const headers=new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.httpclient.get('http://127.0.0.1:8000/api/details',{ headers});
  }

  getTasks():Observable<any>{
    const token=this.getToken();
    console.log('Return token',token);
    if(!token){
      console.error('No token found');
    }
    console.log("hii yamini");
    const headers=new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.httpclient.get('http://127.0.0.1:8000/api/getTasks',{ headers});
  }
}
