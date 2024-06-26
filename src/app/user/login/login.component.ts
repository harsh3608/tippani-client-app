import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FacebookLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    DividerModule, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user!: SocialUser;
  loggedIn: boolean = false;

  constructor(
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
    });
  }

  signInWithFB(): void { //Facebook Login
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): any { //for logging out
    this.authService.signOut();
    console.log('logged out');
  }

}
