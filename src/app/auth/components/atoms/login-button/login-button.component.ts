import { Component, OnInit } from '@angular/core';
import { loginUrl } from '@utils/loginUrl';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  url: string;

  constructor() {
    this.url = loginUrl();
  }

  ngOnInit(): void {
  }

}
