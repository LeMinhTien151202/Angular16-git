import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
   public name = 'tien le';
   public age = 25;
   public fruit = ['tao','cam','chuoi','chanh'];
   public fruit2 = [{fruit:'tao',gia:5000,haGia:true},
   {fruit:'cam',gia:3000,haGia:true},
   {fruit:'cam',gia:3000,haGia:true},
   {fruit:'chuoi',gia:-5000,haGia:false}
  ];

   public ngOnInit(): void {
    console.log('trai cay: ', this.fruit);
  }

}
