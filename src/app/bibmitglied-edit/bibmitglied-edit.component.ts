import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";
import {BibmitgliedService} from "../shared/bibmitglied/bibmitglied.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-bibmitglied-edit',
  templateUrl: './bibmitglied-edit.component.html',
  styleUrls: ['./bibmitglied-edit.component.css']
})
export class BibmitgliedEditComponent implements OnInit,OnDestroy {

  bibmitglied: any = {};
  bibmitgliedID: string;
  sub: Subscription [] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bibmitgliedService: BibmitgliedService) {
    this.sub.push(this.route.params.subscribe(params =>{
      this.bibmitgliedID = params ['id'];
    }));
  }
  ngOnInit() {
    if (this.bibmitgliedID) {
      this.sub.push(this.bibmitgliedService.get(this.bibmitgliedID).subscribe(
        (bibmitgliedResponse: any) => {
          this.bibmitglied = bibmitgliedResponse;
          console.log(this.bibmitglied);
        },  errors => {
          console.log(`bibmitglied with id '${this.bibmitgliedID}' not found, returning to list`);
          this.gotoList();
        }));
    }
  }
  ngOnDestroy(){
    this.sub.forEach(subscription =>{
      subscription.unsubscribe();
    });
  }
  //________________________list a bibmitglied ---------------------------
  gotoList(){
    this.router.navigate(['/bibmitglied-list']);
  }
  //________________________save and edit a bibmitglied ---------------------------
  save(form: NgForm){
    if(this.bibmitgliedID) {
      // ------------------edit bibmitglied-------------------------------
      this.bibmitgliedService.edit(form, this.bibmitgliedID).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    } else {
      // ------------------create bibmitglied-------------------------------
      this.bibmitgliedService.save(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }
  //----------------------remove a bibmitglied------------------------------
  remove(href){
    this.bibmitgliedService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
