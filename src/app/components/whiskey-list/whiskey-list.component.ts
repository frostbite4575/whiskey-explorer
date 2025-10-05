import { Component } from '@angular/core';
import { WhiskeyService } from '../../services/whiskey.service';
import { OnInit } from '@angular/core';
import { WhiskeyCardComponent } from '../whiskey-card/whiskey-card.component';
@Component({
  selector: 'app-whiskey-list',
  imports: [WhiskeyCardComponent],
  templateUrl: './whiskey-list.component.html',
  styleUrl: './whiskey-list.component.css'
})

export class WhiskeyListComponent implements OnInit {



  constructor(private whiskeyService: WhiskeyService) {}

  w_list: any[] = [];

  ngOnInit() {
  this.whiskeyService.getWhiskeys().subscribe(data => {
    this.w_list = data;
  });
}


}
