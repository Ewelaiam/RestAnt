import {OnInit, Pipe, PipeTransform} from '@angular/core';
import { dishInterface } from '../dishInterface';



@Pipe({
  name: 'getPrice',
  pure: false
})
export class SearchPrice implements PipeTransform {
  transform(dishesList: any, low: number, high: number): any {
    if (!dishesList){ return []; }
    if (Number.isNaN(low) && Number.isNaN(high)) { return dishesList; }
    if (Number.isNaN(low) && !Number.isNaN(high)) { return dishesList.filter((dish: any ) => dish.price <= high); }
    if (!Number.isNaN(low) && Number.isNaN(high)) { return dishesList.filter((dish: any ) => dish.price >= low); }
    if (!Number.isNaN(low) && !Number.isNaN(high)) { return dishesList.filter((dish: any ) => dish.price >= low && dish.price <= high); }
  }
}




@Pipe({
  name: 'getRate',
  pure: false
})
export class GetRatePipe implements PipeTransform {
  transform(dishesList: dishInterface[], type: string[]): dishInterface[]{
    if (!type || type.length === 0){ return dishesList; }
    if (!dishesList){ return []; }
    return dishesList.filter(dish => type.includes(dish.rate));
  }
}

@Pipe({
  name: 'getSearch',
  pure: false
})
export class GetSearchPipe implements PipeTransform {
  transform(dishesList: any, x: string): any {
    if (!dishesList){ return []; }
    if (x === '') { return dishesList; }
    return dishesList.filter((dish: any) => ((dish.category.toLowerCase().includes(x.toLowerCase())) || dish.cuisine.toLowerCase().includes(x.toLowerCase()
    || dish.type.toLowerCase().includes(x.toLowerCase()))));
  }
}


export class FilterComponent {
}
