import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(baseArray: any, phrase: string = ''): any {

    // return baseArray.filter(item => {
    //   let jsonString = JSON.stringify(item)
    //     .replace(/"[^"]*"\:/g, '')
    //     .replace(/[",\{\}]/g, '');
    //   return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    // })

    let found = [];
    for (let i = 0; i < baseArray.length; i++) {
      if (baseArray[i].name.last.toLowerCase().indexOf(phrase.toLowerCase()) > -1
      || baseArray[i].name.first.toLowerCase().indexOf(phrase.toLowerCase()) > -1
      || baseArray[i].email.toLowerCase().indexOf(phrase.toLowerCase()) > -1
      || baseArray[i].phone.toLowerCase().indexOf(phrase.toLowerCase()) > -1
      || baseArray[i].age == parseInt(phrase)) {
        found.push(baseArray[i]);
      }
    }
    return found;
  }

}
