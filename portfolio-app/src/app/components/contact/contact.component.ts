import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContactMailerService} from '../../services/ContactMailerService';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;
  errorMessage = '';
  sending = false;

  constructor(private mailer: ContactMailerService) {
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      this.errorMessage = 'Proszę wypełnić wszystkie pola.';
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Wprowadź poprawny adres e-mail.';
      return;
    }
    this.sending = true;

    this.mailer.sendContactMessage({
      name: this.name,
      email: this.email,
      message: this.message
    }).subscribe({
      next: () => {
        this.submitted = true;
        this.sending = false;
      },
      error: () => {
        this.errorMessage = 'Wystąpił błąd podczas wysyłki. Spróbuj ponownie później.';
        this.sending = false;
      }
    });
  }

}
