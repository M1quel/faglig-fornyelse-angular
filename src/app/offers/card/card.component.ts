import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'offers-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class OffersCardComponent implements OnInit {

  ngOnInit(): void {
  }
  @Input() heading = "";
  @Input() desc = ""


}
