import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibmitgliedEditComponent } from './bibmitglied-edit.component';

describe('BibmitgliedEditComponent', () => {
  let component: BibmitgliedEditComponent;
  let fixture: ComponentFixture<BibmitgliedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibmitgliedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibmitgliedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
