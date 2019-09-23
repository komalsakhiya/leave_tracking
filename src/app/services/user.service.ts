import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';
import { config } from '../config';
import * as CryptoJS from 'crypto-js';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  key = "tripion@raoinfor";
  // authenticationState = new BehaviorSubject(false);
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('accessToken'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  /**
   * Register User
   * @param {Object} userData 
   */
  registerUser(userData) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userData), this.key).toString();
    console.log("userData================>", encrypted);
    // const decrypted = CryptoJS.AES.decrypt(encrypted, this.key).toString(CryptoJS.enc.Utf8);
    // console.log("decrypted================>", decrypted);
    const json = { encrypted };
    console.log("====>", json)
    console.log(config.baseApiUrl)
    return this.http.post(config.baseApiUrl + "api/signup", json,{});
  }

  /**
   * Login User
   * @param {Object} userData 
   */
  loginUser(userData) {
    console.log('data=============>', userData);
    const deviceToken = localStorage.getItem('deviceToken');
    console.log('token of device:',deviceToken);
    userData['deviceToken'] = deviceToken;
    console.log("userData:",userData);
    return this.http.post(config.baseApiUrl + "api/login", userData).
      pipe(map((user: any) => {
        console.log("login user=========>", user);
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // this.storage.set('accessToken', user.token);
          localStorage.setItem('accessToken', user.token);
          localStorage.setItem('designation', user.designation);
          // console.log("login user token", user)
          const accessToken = localStorage.getItem('accessToken');
          const designation = localStorage.getItem('designation');
          console.log("accesstoken========================>>>", accessToken,designation)
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  /**
   * Log out user
   */
  logOut() {
    // this.storage.removeItem('accessToken');
    return this.http.get(config.baseApiUrl + "api/logout").pipe(
      map(res => {
        localStorage.removeItem('accessToken');
        this.currentUserSubject.next(null);
        return res;
      }))
  }

  /**
   * get user profile
   */
  getUserDetail() {
    return this.http.get(config.baseApiUrl + "api/get-user-by-id");
  }

  /**
   * Get all user
   */
  getAllUser() {
    return this.http.get(config.baseApiUrl + "api/get-all-users");
  }

  /**
   * Get user by userid
   * @param {String} userId 
   */
  getUserById(userId) {
    console.log(userId);
    return this.http.get(config.baseApiUrl + "api/get-user-by-id/" + userId);
  }
}
