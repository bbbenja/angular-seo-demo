import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Piper} from '../piper-model';

@Component({
  selector: 'pp-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team : Piper[] = [];

  constructor(private service: TeamService) { }

  ngOnInit() {
    this.team = this.service.getTeam();
  }

}
