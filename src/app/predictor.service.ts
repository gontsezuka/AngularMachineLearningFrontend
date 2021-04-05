import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Results } from './results';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PredictorService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getPredictionResults(age:number,gender:number): Observable<Results>
  {
      return this.http.get<Results>(`${this.apiUrl}/music-prediction/${age}/${gender}`);
  }
}
