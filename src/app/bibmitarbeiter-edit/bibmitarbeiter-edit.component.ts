import {Component, OnDestroy, OnInit} from '@angular/core';
import {BibmitarbeiterService} from "../shared/bibmitarbeiter/bibmitarbeiter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from 'rxjs';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-bibmitarbeiter-edit',
  templateUrl: './bibmitarbeiter-edit.component.html',
  styleUrls: ['./bibmitarbeiter-edit.component.css']
})
export class BibmitarbeiterEditComponent implements OnInit, OnDestroy {

  bibmitarbeiter: any = {};
  bibmitarbeiterID: string;
  sub: Subscription [] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bibmitarbeiterService: BibmitarbeiterService) {
    this.sub.push(this.route.params.subscribe(params =>{
      this.bibmitarbeiterID = params ['id'];
    }));
  }
  ngOnInit() {
    if (this.bibmitarbeiterID) {
      this.sub.push(this.bibmitarbeiterService.get(this.bibmitarbeiterID).subscribe(
        (bibmitarbeiterResponse: any) => {
          this.bibmitarbeiter = bibmitarbeiterResponse;
          console.log(this.bibmitarbeiter);
        },  errors => {
          console.log(`bibmitarbeiter with id '${this.bibmitarbeiterID}' not found, returning to list`);
          this.gotoList();
        }));
    }
  }
  ngOnDestroy(){
    this.sub.forEach(subscription =>{
      subscription.unsubscribe();
    });
  }
  //________________________list a bibmitarbeiter ---------------------------
  gotoList(){
    this.router.navigate(['/bibmitarbeiter-list']);
  }
  //________________________save and edit a bibmitarbeiter ---------------------------
  save(form: NgForm){
    if(this.bibmitarbeiterID) {
      // ------------------edit project-------------------------------
      this.bibmitarbeiterService.edit(form, this.bibmitarbeiterID).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    } else {
      // ------------------create bibmitarbeiter-------------------------------
      this.bibmitarbeiterService.save(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }
  //----------------------remove a bibmitarbeiter------------------------------
  remove(href){
    this.bibmitarbeiterService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
