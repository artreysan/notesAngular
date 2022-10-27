import { style } from '@angular/animations';
import {Component} from '@angular/core'

@Component({
    selector: 'hello-world',
    templateUrl: './primer.component.html',
    //template: '<h1>Hola Mundo</h1>',
    styleUrls: ['./primer.component.css']
    //styles: [`h1 {background:#000; color: #fff;}`]

})

export class HelloWorld{
    title = 'Welcome to Angular'
}
