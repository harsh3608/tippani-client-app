import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  searchText: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToFeed(){
    this.router.navigate(['/feed']);
  }


}
