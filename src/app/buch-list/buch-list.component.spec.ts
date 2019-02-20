import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchListComponent } from './buch-list.component';

describe('BuchListComponent', () => {
  let component: BuchListComponent;
  let fixture: ComponentFixture<BuchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
