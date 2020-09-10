import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private bsModalService: BsModalService) {}

  title = 'ngx-bootstrap-nested-modal';

  open(): void {
    this.bsModalService.show(ModalComponent, { class: 'modal-lg' });
  }
}
