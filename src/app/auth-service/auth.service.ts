import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Router} from "@angular/router";
import {Observable, of, switchMap} from 'rxjs';
import firebase from "firebase/compat/app";
import {Roles, User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {
    // @ts-ignore
    this.userData$ = this.auth.authState
      .pipe(switchMap((user: any) => {
        if (user != null) {
          // console.log(user.uid);
          return this.db.object('user/' + user.uid).valueChanges();
        } else {
          return of (null);
        }
      }));
  }
  userData$: Observable<User>;
  static createUserData(user: any): void {
    firebase.database().ref('user/' + user.uid).set({
      email: user.email,
      roles: { admin: false, visitor: false, manager: false, client: true, banned: false }
    });
  }


  singOut(): void{
    this.auth.signOut().then( () => this.router.navigate(['/']));
  }
  signIn(email: string, password: string): void{
    this.auth.signInWithEmailAndPassword(email, password)
      .then( () => {
        this.router.navigate(['/dishes']);
      })
      .catch( () => { alert('Error! Incorrect data!!'); });
  }
  register(email: string, password: string): void{
    this.auth.createUserWithEmailAndPassword(email, password).then(result => {
      AuthService.createUserData(result.user);
    });
  }

  canEdit(user: User): boolean {
    return user && (user.roles.admin || user.roles.manager);
  }
  canDelete(user: User): boolean {
    return user && user.roles.admin;
  }
  canAdd(user: User): boolean {
    return user && user.roles.admin;
  }
  isClient(user: User): boolean {
    return user && user.roles.client;
  }
  isManager(user: User): boolean {
    return user && user.roles.manager;
  }
  isVisitor(user: User): boolean {
    return user && user.roles.visitor;
  }
  isAdmin(user: User): boolean {
    return user && user.roles.admin;
  }
  isBanned(user: User): boolean{
    return user && user.roles.banned;
  }

  setUserRole(uid: string, userRole: Roles): void {
    firebase.database().ref('user/' + uid + '/roles').update(userRole);
  }

  setPersistance(s: string): void{
    this.auth.setPersistence(s);
  }

}
