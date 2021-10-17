import { SaredModule } from './../sared/sared.module';
import { RoutingModule } from './home/routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [
    CommonModule,
    RoutingModule,
    SaredModule
  ]
})
export class PagesModule { }
