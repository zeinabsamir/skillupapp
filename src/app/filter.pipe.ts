import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) {
       return ninjas;
    } else {
      // return updated ninjas array
      return ninjas.filter(ninja => {
        return ninja.name.toLowerCase().includes(term.toLowerCase());
      });
    }
  }

}
