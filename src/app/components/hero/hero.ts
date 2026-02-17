import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {

  name: string = '';
  email: string = '';
  date: string = '';
  message: string = '';

  reservationNumber: string = '';

  constructor(private reservation: ReservationService) {}

  generateReservationNumber(): string {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000);
    return `LITS-${timestamp}-${random}`;
  }

  sendEmail() {

    this.reservationNumber = this.generateReservationNumber();

    const templateParams = {
      reservation_number: this.reservationNumber,
      name: this.name,
      email: this.email,
      date: this.date,
      message: this.message
    };

    this.reservation.sendReservation(templateParams)
      .then(() => {
        alert(`Reservation Confirmed!\nYour Number: ${this.reservationNumber}`);
        this.resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.date = '';
    this.message = '';
  }
}
