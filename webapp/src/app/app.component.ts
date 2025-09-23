import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student = {
    name: 'Sravya',
    location: 'Pondicherry',
    college: 'MVIT',
    sessionStatus: true,
    batchNumber: 67
  };
}
