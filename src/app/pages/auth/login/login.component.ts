import { Component } from '@angular/core';
import { AuthService, IAuthService } from '../../../../services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService: IAuthService = new AuthService();
  values: { email: string, password: string } = {
    email: '',password: ''
  };
  onInputValueChange(name: keyof typeof this.values, value: string) {
    this.values[name] = value;
  };

  async onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.values);
     const response = await this.authService.login(this.values);
  }

}
