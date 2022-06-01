import { Pipe, PipeTransform } from '@angular/core';
import { ItemData } from '../app/model/itemdata';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {


  transform(ItemData: ItemData[],searchValue:string): ItemData[]{
    if(!ItemData || !searchValue){
          return ItemData;
    }
    return ItemData.filter((eachItem:any)=>
      eachItem.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      eachItem.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      eachItem.role.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );

  }

}
