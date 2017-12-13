import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 't-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public AVATARS = {
    '/': '/i/avatars/hololens.jpg',
    '/family': '/i/avatars/family.jpg',
    '/log': '/i/avatars/hard-working.jpg',
    '/cv': '/i/avatars/wc.jpg',
    '/contacts': '/i/avatars/phone.jpg'
  };

  public avatarSRC: string = this.AVATARS['/'];

  constructor(private router: Router) {
    console.log(router);
  }

  ngOnInit() {
  }

  onMenuItemHover (avatarSrc: string) {
    this.avatarSRC = avatarSrc;
  }

  onMenuItemOver () {
    let findKey = Object.keys(this.AVATARS).find((key) => {
      return key !== '/' && this.router.url.indexOf(key) !== -1;
    });
    if (!findKey) {
      findKey = '/';
    }
    this.avatarSRC = this.AVATARS[findKey];
  }

}
