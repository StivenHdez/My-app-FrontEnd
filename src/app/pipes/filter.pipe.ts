import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(planeta: any, filterPost: any): any {
    if(filterPost===undefined || filterPost.length < 3)  return "";

    return planeta.filter(function(planeta){
      return planeta.planeta.toLowerCase().includes(filterPost.toLowerCase())
    })
    

  }

}
