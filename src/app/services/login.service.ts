import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
 

  //which is logged in
  public generatetoken(loginData:any)
  {
    return this.http.post(`${baseurl}/generateToken`,loginData); 
  } 


   //getCurrentUser from backend

   public getcurrentuser(_username)
   {
     console.log(this.http.head);
     return this.http.get(`${baseurl}/current-user/${_username}`);
   }

      

  //save token in local storage 
  public loginUser(token)
  {
    localStorage.setItem('token',token); //key,value
    console.log('token is set in local storage')
  }
 
  //check wether use is logged in 
  public isLoggedin()
  {
   let tokenstr=localStorage.getItem('token');
   if(tokenstr == '' || tokenstr== undefined || tokenstr==null)
   {
     return false;
   }
   else
   {
     return true;
   }
  }
 
 //function to logout 
  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //how to get the token 
  public getToken()
  {
    return localStorage.getItem('token');
  }

  //store user details if he is logged in already.
   public setuser(user)
   {
    localStorage.setItem('user',JSON.stringify(user));
    console.log(user);
   }

      public getUser()
      {
        let userStr=localStorage.getItem('user');
        if(userStr !=null)
        {
           return JSON.parse(userStr);
        }
        else
        {
          this.logout();
          return null;
        }
      
      }


      public getuserRole()
      {
        let user=this.getUser();
        return user.authorities[0].authority;
      }

      public getUserName()
      {
        let user=this.getUser();
        return user.first_user;
      }


}
