import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {
  userFirstName = '';
  userID = 0;
  loggedIn = false;

  constructor(private authService: DataService) { }

  ngOnInit() {
    // this.userFirstName = (this.authService.getUserName());
    this.userFirstName = JSON.parse(localStorage.getItem("UserName") || "");
    this.userID = JSON.parse(localStorage.getItem("userID") || "");
    if (this.userID != 0) {
      this.loggedIn = true;
    }
  }


}
