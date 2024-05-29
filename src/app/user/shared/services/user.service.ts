import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPasswordResponse, LoginResponse, PasswordChangeRequest, PasswordChangeResponse, ResetPasswordRequest, UserLoginRequest, UserRegisterRequest, ValidateOtpResponse } from '../models/user-models';
import { Constants } from '../utils/constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  login(request: UserLoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(Constants.baseServerUrl + 'Account/Login', request, { headers: this.headers })
  }

  register(request: UserRegisterRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(Constants.baseServerUrl + 'Account/Register', request, { headers: this.headers })
  }

  changePassword(request: PasswordChangeRequest): Observable<PasswordChangeResponse> {
    return this.http.post<PasswordChangeResponse>(Constants.baseServerUrl + 'Account/Change-Password', request, { headers: this.headers })
  }

  forgotPassword(request: any): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(Constants.baseServerUrl + 'Account/Forgot-Password', request, { headers: this.headers })
  }

  resendOtp(request: any): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(Constants.baseServerUrl + 'Account/Resend-Otp', request, { headers: this.headers })
  }

  resetPassword(request: ResetPasswordRequest): Observable<PasswordChangeResponse> {
    return this.http.post<PasswordChangeResponse>(Constants.baseServerUrl + 'Account/Reset-Password', request, { headers: this.headers })
  }

  validateOtp(otp:string): Observable<ValidateOtpResponse> {
    return this.http.get<ValidateOtpResponse>(Constants.baseServerUrl + `Account/Validate-Otp?otp=${otp}`,  { headers: this.headers })
  }
}
