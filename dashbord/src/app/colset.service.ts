import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ColsetService {

    private _selectvalue =  new Subject<string>();
    private _selectvalue1 =  new Subject<string>();
    private _selectvalue2 = new Subject<string>();

    showvale$ = this._selectvalue.asObservable();
    showvale1$ = this._selectvalue1.asObservable();
    showvale2$ = this._selectvalue2.asObservable();

  constructor(private service:AuthService) { }

  sendValue(message : string){
    this._selectvalue.next(message);
  }

  sendjson(msg : any){
    this._selectvalue1.next(msg);
  }
  
  sendLeftValue(val : any){
    this._selectvalue2.next(val)
  }

}
