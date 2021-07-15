import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  game = 0;

  setGame(currentGame: number){
    this.game = currentGame;
    setTimeout(() => {
     let p= document.createElement('p');
     p.innerHTML='oopsss... you are worng !'

      p.appendChild;
    }, 10000);
  }
  
}




