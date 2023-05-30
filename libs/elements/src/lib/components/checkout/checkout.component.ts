import { Component, OnInit } from '@angular/core';
import {
  // 

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'andika-app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  closeIcon: HTMLElement;
  openIcon: HTMLElement;
  dropdown: HTMLElement;
  text: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.closeIcon = document.getElementById("closeIcon") as HTMLElement;
    this.openIcon = document.getElementById("openIcon") as HTMLElement;
    this.dropdown = document.getElementById("dropdown") as HTMLElement;
    this.text = document.getElementById("changetext") as HTMLElement;
  }

  showMenu(flag: boolean): void {
    if (flag) {
      this.closeIcon.classList.toggle("hidden");
      this.openIcon.classList.toggle("hidden");
      this.dropdown.classList.toggle("hidden");
    } else {
      this.closeIcon.classList.toggle("hidden");
      this.openIcon.classList.toggle("hidden");
      this.dropdown.classList.toggle("hidden");
    }
  }

  changeText(country: string): void {
    this.text.innerHTML = country;
    this.closeIcon.classList.toggle("hidden");
    this.openIcon.classList.toggle("hidden");
    this.dropdown.classList.toggle("hidden");
  }
}