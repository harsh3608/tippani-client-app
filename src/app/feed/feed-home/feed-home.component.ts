import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardModule } from 'primeng/card';



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

}
