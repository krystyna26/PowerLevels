import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  power = 1;
  // power = {level: 1}
  saiyan = 1;
  super = 1;
  saiyan2 = 1;
  saiyan3 = 1;
  saiyan4 = 1;
  message;
  nums:number[] = [];

  ngOnInit(){ 
    for(let i=1; i<101; i++){
      this.nums.push(i);
    }
  }

  onSubmit(){
    this.saiyan = this.power * 10;
    this.super  = this.power * 90;
    this.saiyan2 = this.power * 150;
    this.saiyan3 = this.power * 250;
    this.saiyan4 = this.power * 500;
  }

  // displayMsg(p){
  //   if(p > 9000 && p <= 20000){
  //     this.message = 'Over 9000!';
  //   }else if(p>20000 && p <50000){
  //     this.message = 'Superlative';
  //   }else if(p == 50000){
  //     this.message = 'The One!'
  //   }else{
  //     this.message = '';
  //   }
  // }
  
}
