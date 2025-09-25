import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactMailerService {
  private apiUrl = 'https://goldentagservice-147667181249.europe-west1.run.app';
  private apiKey = 'VIGGO=4MB0ycv7IGfCs8NLB4Xl0rHLgeVCG_vDOGAZRyGHkzzjfX8pGvweLyB-a43yKF-UTKuXJNkQRMGzF7h8Q0BpdQ5j8kgEw6MYUArcvrkWq4s9_JVBBFwmBV513m3trTwlacTy93npp2CGoFpl-Ji4ExTPDgAmoLyTYeO65pyZuWzCqrU';  // Twój klucz API

  private http: HttpClient | undefined;

  constructor(private injector: Injector) {}

  private getHttp(): HttpClient {
    if (!this.http) {
      this.http = this.injector.get(HttpClient);
    }
    return this.http;
  }

  sendContactMessage(contactData: { name: string; addressEmail: string; message: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.apiKey
    });

    return this.getHttp().post(`${this.apiUrl}/mail`, contactData, {
      headers,
      responseType: 'text' as 'json'
    });
  }
}
