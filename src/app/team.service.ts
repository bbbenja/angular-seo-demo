import {Injectable} from '@angular/core';
import {Piper} from './piper-model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private pipers = {
    'richard': {
      id: 'richard',
      name: 'Richard Hendricks',
      role: 'Founder & CEO',
      photo: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-richard.png'
    },
    'jared': {
      id: 'jared',
      name: 'Jared "Donald" Dunn',
      role: 'Chief Operating Officer',
      photo: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-jared.png'
    },
    'monicas': {
      id: 'monica',
      name: 'Monica Hall',
      role: 'Chief Financial Officer',
      photo: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-monica.png'
    },
    'dinesh': {
      id: 'dinesh',
      name: 'Dinesh Chugtai',
      role: 'Senior Programmer',
      photo: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-dinesh.png'
    },
    'gilfoyle': {
      id: 'gilfoyle',
      name: 'Bertram Gilfoyle',
      role: 'Chief System Architect',
      photo: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-gilfoyle.png'
    },
    'bighead': {
      id: 'bighead',
      name: 'Nelson "Big Head" Bighetti',
      role: 'Majority Investor',
      photo: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/photo-big-head.png'
    }
  };

  constructor() {
  }

  getTeam(): Piper[] {
    return Object.values(this.pipers);
  }

  getPiper(id: string): Piper {
    return this.pipers[id];
  }
}
