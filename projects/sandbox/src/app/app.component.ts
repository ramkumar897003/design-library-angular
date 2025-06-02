import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyUiLibModule, ToastService } from 'my-ui-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyUiLibModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private toastService = inject(ToastService);

  showToast() {
    this.toastService.showToast({
      title: 'Hello World!',
    });
  }
}
