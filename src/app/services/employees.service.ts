import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/employee.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  url = 'Employees';
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/${this.url}`);
  }
}
