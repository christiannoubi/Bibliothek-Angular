import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibmitarbeiterEditComponent } from './bibmitarbeiter-edit.component';

describe('BibMitarbeiterEditComponent', () => {
  let component: BibmitarbeiterEditComponent;
  let fixture: ComponentFixture<BibmitarbeiterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibmitarbeiterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibmitarbeiterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
