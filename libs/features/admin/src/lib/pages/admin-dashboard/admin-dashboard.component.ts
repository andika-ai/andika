import { DarkModeService } from '@andika/libs/utilities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  private isDarkModeEnabled = false;
  toggleText = 'Toggle Dark Mode'
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
  }

  toggleDarkMode(): void {
    const darkModeEnabled = this.darkModeService.getIsDarkModeEnabled();
    this.darkModeService.toggleDarkMode(!darkModeEnabled);
    if(darkModeEnabled){
      this.toggleText = 'Toggle Dark Mode';
    } else {
      this.toggleText = 'Toggle Light Mode';
    }
    
  }

}
