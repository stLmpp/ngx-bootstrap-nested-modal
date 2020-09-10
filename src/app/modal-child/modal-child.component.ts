import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-child',
  templateUrl: './modal-child.component.html',
  styleUrls: ['./modal-child.component.scss'],
})
export class ModalChildComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    console.log('CHILD', this);
  }
}
