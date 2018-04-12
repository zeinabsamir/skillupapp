import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  loging() {
    console.log('i am a logging service');
  }
  constructor() { }

}
