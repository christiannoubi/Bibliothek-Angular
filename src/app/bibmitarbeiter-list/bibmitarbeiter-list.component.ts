import { Component, OnInit } from '@angular/core';
import {BibmitarbeiterService} from "../shared/bibmitarbeiter/bibmitarbeiter.service";

@Component({
  selector: 'app-bibmitarbeiter-list',
  templateUrl: './bibmitarbeiter-list.component.html',
  styleUrls: ['./bibmitarbeiter-list.component.css']
})
export class BibmitarbeiterListComponent implements OnInit {

  bibmitarbeiters: Array<any>;

  constructor(private bibmitarbeiterService: BibmitarbeiterService) { }

  ngOnInit() {
    this.bibmitarbeiterService.getAll().subscribe(data=>
    {this.bibmitarbeiters= data;
  });
  }
}
