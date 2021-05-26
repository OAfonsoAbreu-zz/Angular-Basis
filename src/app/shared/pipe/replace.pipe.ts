import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform{
    transform(value: string, valueReplaced: string, valueToReplace: string) {
        return value.replace(valueReplaced, valueToReplace);
    }

}