import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  obj:string[]=["Admin", "Guest"];
  ngOnInit(): void {
    AOS.init();

    // fake logged in localstorage
    localStorage.setItem("rnid", "99fb5a77-55d4-453f-8434-a432b0a8895c")
    localStorage.setItem("rntoken", "a token goes here")
    localStorage.setItem("rnemail", "AhmedMustafa@gmail.com")
    localStorage.setItem("rnroles", JSON.stringify(this.obj))
    localStorage.setItem("rnexpireson", "Sun, 01 Aug 2021 10:29:16 GMT")
    localStorage.setItem("rnisauthinticated", "true")
  }
}
