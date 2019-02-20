import { Component, OnInit } from '@angular/core';
import {BuchService} from "../shared/buch/buch.service";

@Component({
  selector: 'app-buch-list',
  templateUrl: './buch-list.component.html',
  styleUrls: ['./buch-list.component.css']
})
export class BuchListComponent implements OnInit {

  buches: Array<any>;

  constructor(private buchService: BuchService) { }

  ngOnInit() {
    this.buchService.getAll().subscribe(data=>
    {this.buches= data;
    });
  }

}
