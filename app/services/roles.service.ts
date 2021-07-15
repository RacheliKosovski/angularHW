import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { WorkersService,Worker } from '../workers.service';

export interface Role{
  roleId: number,
  discription: string
}
@Injectable({
  providedIn: 'root'
})
export class RolesService {
  getRoles(){
    return this.httpService.get<Role[]>('/assets/roles.json')
  }
  constructor(private httpService: HttpClient) {   
  }
}
