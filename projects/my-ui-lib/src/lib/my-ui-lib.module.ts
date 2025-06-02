import { NgModule } from '@angular/core';
import { ToastProviderComponent } from './toast-provider/toast-provider.component';

@NgModule({
  imports: [ToastProviderComponent],
  exports: [ToastProviderComponent],
})
export class MyUiLibModule {}
