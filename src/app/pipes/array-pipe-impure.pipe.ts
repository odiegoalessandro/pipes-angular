import { Pipe } from '@angular/core';
import { ArrayPipePipe } from './array-pipe.pipe';

@Pipe({
  name: 'arrayPipeImpure',
  pure: false
})
export class ArrayPipeImpurePipe extends ArrayPipePipe {

}
