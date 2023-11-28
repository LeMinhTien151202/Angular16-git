import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   public name = 'tien le';
   public age = 25;

   public resetName() :void {
    console.log('resetName');
    //reset ten
    this.name = 'tien le';
   }
}
