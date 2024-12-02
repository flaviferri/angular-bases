import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string ="ironman";
public age: number = 45;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDesciption():string{
  return`${this.name}-${this.age}`
}

isButtonVisible=true;

changeHero():void{
  this.name="spiderman"
this.isButtonVisible=false;
}

changeAge():void{
  this.age=55;
  this.isButtonVisible=false;

}

resetButton():void{
/*   this.name= "ironMan" */
  this.age=45;

  document.querySelectorAll('h1')!.forEach(element=>{
    element.innerHTML='<h1>Desde Angular</h1>'
  })

}
}
