import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";
import {BuchService} from "../shared/buch/buch.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-buch-edit',
  templateUrl: './buch-edit.component.html',
  styleUrls: ['./buch-edit.component.css']
})
export class BuchEditComponent implements OnInit , OnDestroy{

  buch: any = {};
  buchID: string;
  sub: Subscription [] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private buchService: BuchService) {
    this.sub.push(this.route.params.subscribe(params =>{
      this.buchID = params ['id'];
    }));
  }
  ngOnInit() {
    if (this.buchID) {
      this.sub.push(this.buchService.get(this.buchID).subscribe(
        (buchResponse: any) => {
          this.buch = buchResponse;
          console.log(this.buch);
        },  errors => {
          console.log(`Buch with id '${this.buchID}' not found, returning to list`);
          this.gotoList();
        }));
    }
  }
  ngOnDestroy(){
    this.sub.forEach(subscription =>{
      subscription.unsubscribe();
    });
  }
  //________________________list a Buch ---------------------------
  gotoList(){
    this.router.navigate(['/Buch-list']);
  }
  //________________________save and edit a Buch ---------------------------
  save(form: NgForm){
    if(this.buchID) {
      // ------------------edit Buch-------------------------------
      this.buchService.edit(form, this.buchID).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    } else {
      // ------------------create Buch-------------------------------
      this.buchService.save(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }
  //----------------------remove a Buch------------------------------
  remove(href){
    this.buchService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
