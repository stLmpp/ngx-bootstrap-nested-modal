import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalChildComponent } from '../modal-child/modal-child.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private bsModalService: BsModalService) {}

  open(): void {
    this.bsModalService.show(ModalChildComponent);
  }

  ngOnInit(): void {
    console.log('MODAL', this);
  }
}
