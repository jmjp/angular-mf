import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pokedex';

  ngOnInit(){
    const script = document.createElement('script');
    script.src = 'http://localhost:5500/pokemon/main.js';
    document.body.appendChild(script);
  } 
}
