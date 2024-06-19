import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'
  ],
  imports: [NgFor, NgIf, RouterLink],
  standalone: true
})
export class HeaderComponent implements OnInit{
  userFirstName = '';
  userID = 0;
  loggedIn = false;

  constructor(private authService: DataService) {}

  ngOnInit() {
    this.userFirstName = (this.authService.getUserName());
    this.userID = (this.authService.getUserID());
    if (this.userID != 0 ){
      this.loggedIn = true;
   }
  }

  
}
