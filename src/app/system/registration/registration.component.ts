import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { AuthentificationService } from 'src/app/shared/services/authentification/authentification.service';
import { UserService } from 'src/app/shared/services/user/user.service';

class CustomValidators {
  static passwordContainsNumber(control: AbstractControl): ValidationErrors {
    const regex = /\d/;
    if(regex.test(control.value) && control.value !== null) {
      return null;
    }
    else {
      return {passwordInvalid: true};
    }
  }

  static passwordsMatch (control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const confirmPassword = control.get('passwordConfirm').value;

    if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
      return null;
    } else {
      return {passwordsNotMatching: true};
    }
  }

} 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private authService: AuthentificationService,
    private formBuilder: FormBuilder, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)], this.forbiddenEmails.bind(this)), 
      password: new FormControl(null, [Validators.required, Validators.minLength(3), CustomValidators.passwordContainsNumber]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      city:  new FormControl(null, [Validators.required])
    }, {validators: CustomValidators.passwordsMatch})
  }

  findUserByEmail(email: string): Observable<User> {
    return this.userService.findUserByEmail(email);
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.findUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user){
            resolve({forbiddenEmail: true});
          }
          else {
            resolve(null);
          }
        });
    });
  }
  onSubmit(){
    if(this.registerForm.invalid){
      return;
    }
    this.authService.register(this.registerForm.value).pipe(
      map(user => this.router.navigate(['login']))
    ).subscribe();
  }
}
