import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCreateSeccessComponent } from './meeting-create-seccess.component';

describe('MeetingCreateSeccessComponent', () => {
  let component: MeetingCreateSeccessComponent;
  let fixture: ComponentFixture<MeetingCreateSeccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingCreateSeccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCreateSeccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
