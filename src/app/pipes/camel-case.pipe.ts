import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let values = value.split(" ")
    let result = ""

    for(let word of values){
      result += this.capitalize(word) + ' '
    }

    return result.trim()
  }

  capitalize(word: string){
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase()
  }
}
