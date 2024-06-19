import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss',
    // "../../../assets/css/bootstrap.min.css",
    // "../../../assets/css/font-awesome.min.css",
    // "../../../assets/css/style.css"
  ]
})
export class RegistrationComponent {

  public userCredentialModel: any = {};
  public emailId: string = "";
  public password: string = "";
  public userFirstName: string = "";
  public userLastName: string = "";
  public userMobileNumber: string = "";
  constructor(public router: Router, private registrationService: RegistrationService) {

  }

  setInfo(userCredentialModel: any) {

    this.registrationService.userRegistration(userCredentialModel).subscribe((response) => {
      if (response && response["successful"] && response["data"][0] && response["data"][0]['Message']) {
        alert(response["data"][0]['Message']);
        this.router.navigate(['']);
      } else {
        alert(response["data"][0]['Message']);
        this.router.navigate([""]);
      }
    });
  }
}

