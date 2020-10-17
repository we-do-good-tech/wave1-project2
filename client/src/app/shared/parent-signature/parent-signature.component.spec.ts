import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSignatureComponent } from './parent-signature.component';

describe('ParentSignatureComponent', () => {
  let component: ParentSignatureComponent;
  let fixture: ComponentFixture<ParentSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
