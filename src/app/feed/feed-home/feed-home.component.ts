import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { SampleData } from '../../../../public/assets/sample-feeds';
import { Feed } from '../shared/models/feed-models';



@Component({
  selector: 'app-feed-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ScrollPanelModule,
    ButtonModule,
    CardModule,



  ],
  templateUrl: './feed-home.component.html',
  styleUrl: './feed-home.component.css'
})
export class FeedHomeComponent {
  sampleFeeds: Feed[] = SampleData.sampleFeeds;
isLiked:boolean=true;




}
