import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  dynamicImage='';
  onHover(id:number){
    if(id%2==0){
      this.dynamicImage='pic1.png';
    }else{
      this.dynamicImage='pic2.png';
    }
  }
}
