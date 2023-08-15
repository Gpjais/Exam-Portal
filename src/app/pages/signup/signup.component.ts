import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, public snackBar: MatSnackBar) { }
 
  public user={
      username:'',
      password:'',
      firstName:'',
      lastName:'',
      email:'',
      phone:''
     };
   
  ngOnInit(): void {
  }

  formsubmit()
  {
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null)
    {
      this.snackBar.open('Please Enter Username','OK');
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>
      {
        console.log(data);
        window.location.href="/login";
      },
      (error)=>
      {
        console.log(error);
        this.snackBar.open("this user name already exist");
      }

    );
  }

}
