import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Piper} from '../piper-model';
import {ActivatedRoute, Params} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'pp-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: Piper[] = [];
  page = 1;

  constructor(private service: TeamService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      map((param: Params) => +param['page'] || 1)
    ).subscribe((page: number) => {
      this.page = page;
      this.team = this.service.getTeam(page);
    });
  }

}
