import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

import { PowerToXPipe } from './power-to-x.pipe';
import { FormsModule } from '@angular/forms';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import { SharedModule } from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import {RatingModule} from 'primeng/rating';
import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProductComponent,
    PowerToXPipe,
    StringConvertPipe,
    ArraySplicePipe,
    
   
  ],
  imports: [
    CommonModule, FormsModule,SharedModule,BrowserAnimationsModule,PasswordModule,CalendarModule,RatingModule
    ,MenuModule,ButtonModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
