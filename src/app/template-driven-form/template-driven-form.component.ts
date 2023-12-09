import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  public name = '';
  constructor(private common : CommonService){}
  public submitForm():void{
    console.log('submit succesful:' , this.name);
    //this.common.submitData(this.name);
    // vs object
    this.common.submitData({name:this.name , age : 21});
  }

}
