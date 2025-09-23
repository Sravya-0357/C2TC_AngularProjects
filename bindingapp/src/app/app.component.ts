import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // fixed typo
})
export class AppComponent {
  // Title for your test
  title = 'bindingapp';

  // Interpolation example
  username: string = 'User';

  // Two-way binding example
  userInput: string = '';

  // Event handler to update username
  onUsernameInput(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  // Event binding example
  sayHello() {
    alert('Hello, ' + this.username + '!');
  }
}
