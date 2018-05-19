import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {ActivatedRoute, Params} from '@angular/router';
import {map} from 'rxjs/operators';
import {Piper} from '../piper-model';

@Component({
  selector: 'pp-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  piper: Piper;

  constructor(private service: TeamService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params['name'])
    ).subscribe((id: string) => {
      this.piper = this.service.getPiper(id);
    });

  }

}
