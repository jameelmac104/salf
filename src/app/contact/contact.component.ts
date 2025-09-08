import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  private readonly TO_EMAIL = 'johnpaul@southasialawfirm.com';
  sendMail() {
    const { name, email, subject, message } = this.contact;

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoHref = `mailto:${this.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoHref;
  }

}
