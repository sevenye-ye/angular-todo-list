import { Component, OnInit } from '@angular/core';
import { TrustedScriptString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public tryInit: any;

  constructor() { 
    this.toDoShow = true;
    this.toDoDoneShow = true;
  }

  ngOnInit() {

  }

}
