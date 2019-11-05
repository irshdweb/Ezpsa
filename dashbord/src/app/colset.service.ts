import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColsetService {

    private _selectvalue =  new Subject<string>();
    showvale$ = this._selectvalue.asObservable();

  constructor() { }

  sendValue(message : string){
    this._selectvalue.next(message);
  }
}
