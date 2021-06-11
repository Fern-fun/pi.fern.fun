import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  title: string = 'angularTitle';

  constructor(private titleService: Title) {}

  ngOnInit(): void {}

  setDocTitle(title: string) {
    // console.log('current title: ' + this.titleService.getTitle());
    this.titleService.setTitle(title);
    const element = <HTMLInputElement>document.getElementById('hamburger');
    element.checked = false;
  }
}
