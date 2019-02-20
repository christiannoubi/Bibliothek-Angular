import { Component, OnInit } from '@angular/core';
import {BibmitgliedService} from "../shared/bibmitglied/bibmitglied.service";

@Component({
  selector: 'app-bibmitglied-list',
  templateUrl: './bibmitglied-list.component.html',
  styleUrls: ['./bibmitglied-list.component.css']
})
export class BibmitgliedListComponent implements OnInit {

  bibmitgliedes: Array<any>;

  constructor(private bibmitgliedService: BibmitgliedService) { }

  ngOnInit() {
    this.bibmitgliedService.getAll().subscribe(data=>
    {this.bibmitgliedes= data;
    });
  }

}
