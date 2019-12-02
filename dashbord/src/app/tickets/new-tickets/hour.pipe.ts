import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(n) {
    /**let  temp = value * 60;
    const hours = Math.floor((temp/3600));
    const minutes: number = Math.floor((temp/ 60)/60);
    const seconds=Math.floor(temp % 3600 % 60);
    return hours + ':' + minutes + ':' + seconds;**/

    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " : " + rminutes;
  }

}
