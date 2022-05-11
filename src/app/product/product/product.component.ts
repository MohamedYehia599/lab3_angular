import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { pipe } from 'rxjs';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  items:MenuItem[]=[];
  ngOnInit(): void {
    
this.items = [
  {label: 'New', icon: 'pi pi-fw pi-plus'},
  {label: 'Open', icon: 'pi pi-fw pi-download'},
  {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
//   {
//   label: 'HTML',
//         items: [
//           {
//             label: 'HTML 1'
//           },
//           {
//             label: 'HTML 2'
//           }
//         ]
//       },
//       {
//         label: 'Angular',
  
//         items: [
//           {
//             label: 'Angular 1'
//           },
//           {
//             label: 'Angular 2'
//           }
//         ]
//       }
    
 ];
   }

   products:Product[]=[
     new Product('./assets/pen.jpeg','pen-blue','abcde',new Date('2022-04-06') ,5 ,5),
     new Product('./assets/Pencil.jpeg','pencil-hb','nomgd',new Date('2021-05-09') ,5 ,4),
     new Product('./assets/eraser.jpeg','eraser-pencils','yy123xy',new Date('2022-01-15') ,5 ,2.5),
     
   ]
show:boolean=false;
show_res:boolean=false;

show_img(){
  this.show=true;
}
hide_img(){
  this.show=false;
}
num:number=0;
power:number=0;
show_result(){
  this.show_res=true;
  
}
 filter_value='';
filter(e:any){
 this.filter_value=e.target.value ;
}

value:any='5-11-2021';






}
