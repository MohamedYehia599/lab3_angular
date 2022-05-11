import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
rating:number=4;
cwidth=0;
ngOnChanges(){
this.cwidth=this.rating*15;
}
}
