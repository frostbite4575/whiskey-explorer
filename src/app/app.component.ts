import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhiskeyListComponent } from './components/whiskey-list/whiskey-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WhiskeyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'whiskey-explorer';
}
