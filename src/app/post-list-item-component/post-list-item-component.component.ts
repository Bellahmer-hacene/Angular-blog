import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
@Input() title : String ;
@Input() content : String;
@Input() loveIts : number;
@Input() created_at : Date;
  constructor() { }

  ngOnInit() {
  }
  onLove(){
    this.loveIts++;
  }
  onDontLove(){
    this.loveIts--;
  }

}
