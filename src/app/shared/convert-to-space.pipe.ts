import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "ConvertToSpace",
})
export class ConvertToSPace implements PipeTransform {
    transform(value: string, character: string) {
        return value.replace(character, " ");
    }
}