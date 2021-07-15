import { Component, OnInit } from '@angular/core';
import { RolesService, Role } from '../../services/roles.service';
import { WorkersService, Worker } from '../../services/workers.service';
interface SalaryRole {
  discription: string;
  avgSalary: number;
}
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  workers: Worker[] = [];
  salaryRole: SalaryRole[] = [];
  constructor(private rolesService: RolesService, private workersService: WorkersService) {
    this.rolesService.getRoles()
      .subscribe((roles) => {
        this.roles = roles; this.workersService.getWorkers()
          .subscribe((workers) => { this.workers = workers; this.getAvgSalary() });
      });
  }
  ngOnInit(): void {
  }

  getAvgSalary() {
    let salary: number = 0;
    let count: number = 0;
    this.roles.forEach((r, index) => {
      this.workers.forEach(worker => {
        if (worker.roleId == r.roleId)
        {
          salary += worker.salary;
          count++;
        }
      });
      this.salaryRole[index] = { discription: "", avgSalary: 0 };
      this.salaryRole[index].discription = r.discription;
      this.salaryRole[index].avgSalary = salary / count;
      count = 0;
      salary = 0;
    });
  }
}


