import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.message === 'Login bem-sucedido.') {
          // Redireciona para a página inicial
          this.router.navigate(['/home']);
        } else {
          // Lida com mensagens de erro, se necessário
          console.error('Erro de login:', response.error);
        }
      },
      error => {
        console.error('Erro de login:', error);
        alert("senha ou email incorretos!")
      }
    );
  }
}
