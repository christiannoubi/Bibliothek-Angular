import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibmitarbeiterListComponent } from './bibmitarbeiter-list.component';

describe('BibmitarbeiterListComponent', () => {
  let component: BibmitarbeiterListComponent;
  let fixture: ComponentFixture<BibmitarbeiterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibmitarbeiterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibmitarbeiterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
