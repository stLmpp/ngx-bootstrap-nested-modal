import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChildComponent } from './modal-child.component';

describe('ModalChildComponent', () => {
  let component: ModalChildComponent;
  let fixture: ComponentFixture<ModalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
