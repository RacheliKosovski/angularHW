import { Component, OnInit } from '@angular/core';
import { WorkersService,Worker } from '../../services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  workers:Worker[]=[];
  constructor(private workersService: WorkersService) {
    this.workersService.getWorkers()
    .subscribe((workers)=>this.workers=workers);
  }

  ngOnInit(): void {
  }

}
