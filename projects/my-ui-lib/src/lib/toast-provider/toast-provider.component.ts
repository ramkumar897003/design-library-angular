import { Component, inject } from '@angular/core';
import { ToastService } from './toast.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'toast-provider',
  styleUrls: ['./toast-provider.component.scss'],
  templateUrl: './toast-provider.component.html',
  standalone: true,
  imports: [AsyncPipe],
})
export class ToastProviderComponent {
  toastService = inject(ToastService);
}
