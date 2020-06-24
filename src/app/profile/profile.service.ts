import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
DJANGO_SERVER = 'http://127.0.0.1:8000'
  
  constructor(
  private http: HttpClient

){ } 

  createJournal(formData: any){
  	console.log(formData);
	return this.http.post(
		this.DJANGO_SERVER + '/create-journal', formData
		);
	}
}
