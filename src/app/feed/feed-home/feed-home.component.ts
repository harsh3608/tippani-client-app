import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-feed-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ScrollPanelModule,
    ButtonModule
  ],
  templateUrl: './feed-home.component.html',
  styleUrl: './feed-home.component.css'
})
export class FeedHomeComponent {

}
