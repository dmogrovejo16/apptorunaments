import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders = new HttpHeaders;

  constructor(public http: HttpClient) { 
    this.headers.append("Accept", 'application/json');
this.headers.append('Content-Type', 'application/json');
this.headers.append('Access-Control-Allow-Origin', '*');

  }


  
  addStudent(data: { email: any; name: any; lastName: any; password: any; }){
    return this.http.post('http://localhost/create.php/', data);
      }

      getStudents(){
        return this.http.get('http://localhost/getStudents.php/');

      }

      delete(email: string | null){
        return this.http.delete('http://localhost/delete.php?email='+email);
      }

      addTournament(data: { name: string; fechIni: string; fechFin: string; idAdmCreator: string;  }){
        return this.http.post('http://localhost/createTorunament.php/', data);
      }

      getTournaments(){
        return this.http.get('http://localhost/getTournaments.php/');
      }

}
