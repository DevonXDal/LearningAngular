import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLoggerService {

  constructor() { }
  
  log(message: string) {
    console.log(message);
  }
}
