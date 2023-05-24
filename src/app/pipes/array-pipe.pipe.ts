import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayPipe',
  pure: true
})
export class ArrayPipePipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    if(value.length === 0 || args.length === 0){
      return value;
    }

    let filter = (args[0] as String).toLowerCase()
    return value.filter(v => v.toLowerCase().includes(filter))
  }
}
