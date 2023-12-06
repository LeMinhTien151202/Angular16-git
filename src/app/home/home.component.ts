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
  public districts : string[] = ['quan / huyen'];
  public VietNamData = [
    {city: 'Chon thanh pho',
     district: ['quan / huyen']},
    {city: 'An Giang',
     district : ['Thành phố Long Xuyên',
     'Thành phố Châu Đốc',
     'Thị xã Tân Châu',
     'Huyện An Phú',
     'Huyện Châu Phú',
     'Huyện Châu Thành',
     'Huyện Chợ Mới',
     'Huyện Phú Tân',
     'Huyện Thoại Sơn',
     'Huyện Tịnh Biên',
     'Huyện Tri Tôn']},
     {city : 'Bà Rịa - Vũng Tàu',
      district : ["Thành phố Vũng Tàu",
      "Thị xã Bà Rịa",
      "Thị xã Phú Mỹ",
      "Huyện Châu Đức",
      "Huyện Côn Đảo",
      "Huyện Đất Đỏ",
      "Huyện Long Điền",
      "Huyện Tân Thành",
      "Huyện Xuyên Mộc"]},
      {city : 'Bạc Liêu',
      district : ["Thành phố Bạc Liêu",
      "Huyện Đông Hải",
      "Huyện Giá Rai",
      "Huyện Hòa Bình",
      "Huyện Hồng Dân",
      "Huyện Phước Long",
      "Huyện Vĩnh Lợi"]},

  ]
   public ngOnInit(): void {
    console.log('trai cay: ', this.fruit);
  }

  public changeCity(event : any) : void{
    console.log('event',event.target.value);
    const city = event.target.value;

    //cach 1
    const search = this.VietNamData.filter(data => data.city === city);
    console.log(search);
    if(search && search.length > 0){
      this.districts = search[0].district;
    }

    //cach 2
    this.districts = this.VietNamData.find(data => data.city === city)?.district || [];

  }

}
