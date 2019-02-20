import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibmitgliedListComponent } from './bibmitglied-list.component';

describe('BibmitgliedListComponent', () => {
  let component: BibmitgliedListComponent;
  let fixture: ComponentFixture<BibmitgliedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibmitgliedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibmitgliedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
