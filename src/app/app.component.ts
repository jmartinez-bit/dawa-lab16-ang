import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16';

  logout(): void {
    localStorage.removeItem('auth_token');
  }
 
  public get logIn():boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
