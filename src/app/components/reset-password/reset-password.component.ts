import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false; // Variable para alternar la visibilidad

  constructor(private route: ActivatedRoute, private passwordService: PasswordService, private router: Router) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibility1(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    if (!this.passwordRegex.test(this.newPassword)) {
      alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.');
      return;
    }
  
    this.passwordService.resetPassword(this.token, this.newPassword).subscribe(
      (response: any) => {
        try {
          let jsonResponse = JSON.parse(response); // 🔥 Convierte el string a JSON
          console.log('✅ JSON Parseado:', jsonResponse);
    
          this.router.navigate(['/succesfull'], { 
            queryParams: { username: jsonResponse.username }, 
            replaceUrl: true 
          });
        } catch (error) {
          console.error('❌ Error al parsear JSON:', error);
        }
      },
      error => {
        alert('Error al restablecer la contraseña');
      }
    );
  }
}

