import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Worker{
  firstName: string, 
  lastName: string,
  roleId: number,
  salary: number
}
@Injectable({ 
  providedIn: 'root'
})
export class WorkersService {
  getWorkers(){
    return this.httpService.get<Worker[]>('/assets/workers.json')
  }
  constructor(private httpService: HttpClient) {   
  }
}


