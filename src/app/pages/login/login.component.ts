import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  loginData={
    username:"",
    password:""
   };

  constructor(private login: LoginService,public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  formsubmit()
  {
    console.log("login btn clicked");
    if(this.loginData.username== '' && this.loginData.password == '')
    {
        this.snackBar.open('Please Enter username and Password','',{
        duration:3000
     });
       return;
    }
    if(this.loginData.username == '')
    {
        this.snackBar.open('Please Enter username','',{
        duration:3000
     });
     return;
    }
    if(this.loginData.password == '')
    {
        this.snackBar.open('Please Enter password','',{
        duration:3000
     });
       return;
    }
   console.log("----inside formSubmit() function and username password both provided -----")
    this.login.generatetoken(this.loginData).subscribe
    (
     (data:any)=>
     {
        console.log("success");
        console.log(data.token);

        // login
        this.login.loginUser(data.token);

        this.login.getcurrentuser(this.loginData.username).subscribe(
          (user:any)=>
          {
            this.login.setuser(user);
            console.log(user);

            if(this.login.getuserRole()=="ADMIN")
            {
               window.location.href='/admin' ;     
            }
            else if(this.login.getuserRole()=="NORMAL")
            {
              window.location.href='/user-dashboard' ;    
            }
            else{
              this.login.logout();
            }
            
          }
        );
     },
     (error)=>
     {
          console.log(error);
          console.log("error");
          this.snackBar.open('User is not yet registered !!!','' ,{
            duration:2100
          })
             }
    );
    
    

    
    
    
    }

}
