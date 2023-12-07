import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public myColor = 'red';
  public loginName = 'admin';
  public counter = 0;
  public counterBinhPhuong = 0;

  constructor(private common : CommonService){}

ngOnInit() : void{
  this.counter = this.common.getCounter();
  this.counterBinhPhuong = this.common.binhPhuong(this.common.getCounter());
  this.common.setCounter(this.counter+1);
}


}
