import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  
  @Input() rating: Number;
  stars: boolean[] = [];
  maxRate: Number = 5;

  ngOnInit(): void {
    for (let i=1; i<=this.maxRate; i++) {
      this.stars.push(i > this.rating)
    }
  }

}
