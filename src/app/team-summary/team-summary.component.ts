import {Component, Input, OnInit} from '@angular/core';
import {Piper} from '../piper-model';

@Component({
  selector: 'pp-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {
  @Input() piper: Piper;

  constructor() { }

  ngOnInit() {
  }

}
