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

  public addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';

    return this.http.post<Employee>(
      `${this.baseUrl}/${this.url}`,
      addEmployeeRequest
    );
  }

  public getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${this.url}/` + id);
  }

  public updateEmployee(
    id: string,
    updateEmployeeRequest: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.baseUrl}/${this.url}/` + id,
      updateEmployeeRequest
    );
  }

  public deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${this.url}/` + id);
  }
}
