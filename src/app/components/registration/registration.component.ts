import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    username: string = '';
    email: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) { }

    register(): void {
        if (this.authService.register(this.username, this.email, this.password)) {
            this.router.navigate(['/login']);
        } else {
            this.errorMessage = 'Email already registered';
        }
    }
}
