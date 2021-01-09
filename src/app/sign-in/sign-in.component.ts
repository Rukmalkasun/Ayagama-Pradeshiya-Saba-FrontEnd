import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
//import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginf: any = {};
  submitted = false;
  
logindetails: any = {};
ipAddress: any;
current_user : any;

deviceInfo = null;
error = 'someError';

  constructor(private apiService: ApiService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {    
    this.http.post('http://127.0.0.1:8000/api/v1/web_login', {
    email: this.loginf.email,
    password: this.loginf.password,
    
    })
    .subscribe(data => {
      console.log(data);


    localStorage.setItem ('token', data['access_token']);
    localStorage.setItem('loogedIn', 'true');
    this.router.navigate(['about']); 
    //   this.apiService.getCurrentUser().subscribe((data) => {
    //   console.log(data);
     
          

    // });


  },

    // this.apiService.getLoggedInUser().subscribe(data => {
    // sessionStorage.setItem('current User', data['data']['family_names']);
    // //console.log(data['data']['family_names']);
    // });


    /* this.apiService
    .getClientIpAddress()
    .subscribe( data => {
      this.ipAddress = data['ip'];
      this.logindetails['ip_address'] = this.ipAddress;
      console.log(this.ipAddress);
    })*/

    /*console.log(this.logindetails);
    this
    .apiService
    .sendLoggedInDetails(this.logindetails)
    .subscribe(data => {
      console.log(data);
    });*/

    

  error => {
    // tslint:disable-next-line: comment-format
    //this.alertService.error(error);

   // this.toastr.error(error);
      // tslint:disable-next-line: comment-format
      //console.log(error);
   });

  }
    
  }

