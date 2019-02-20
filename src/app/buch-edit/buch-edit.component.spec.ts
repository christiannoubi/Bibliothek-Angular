import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchEditComponent } from './buch-edit.component';

describe('BuchEditComponent', () => {
  let component: BuchEditComponent;
  let fixture: ComponentFixture<BuchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
