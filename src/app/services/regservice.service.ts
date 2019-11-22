import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor() { }
  register(data)
  {

    console.log(data.value)
  }

}
