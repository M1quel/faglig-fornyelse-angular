import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pricing-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  ngOnInit(): void {
  }
  @Input() heading = "";
  @Input() price = "";
  @Input() time = "";
  @Input() items = [""];
  @Input() btnText = "";
}
