import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
// import {
//   faSquare as farSquare,
//   faCheckSquare as farCheckSquare,
// } from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faGoogle,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'andika-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'andika-frontend';

  constructor(library: FaIconLibrary){
    library.addIcons(
      faSquare,
      faCheckSquare,
      faGoogle,
      faStackOverflow,
      faGithub,
      faMedium
    );

  }
}
