import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  sendReservation(data: any) {
    return emailjs.send(
      'service_buqitph',   // remplace
      'template_53ns1yr',  // remplace
      data,
      'K80Nl-iZVQulz8DrU'    // remplace
    );
  }
}
