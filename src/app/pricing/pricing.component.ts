import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  ngOnInit(): void {
  }
  freeCard = {
    heading: "Like a pussy",
    price: "Free",
    time: "Forever",
    btnText: "Try for free",
    items: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icons pack"
    ]
  }
  corporateCard = {
    heading: "Corporate",
    price: "$12",
    time: "Editor",
    btnText: "Extended license",
    items: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icons pack",
      "Themed into 3 different styles"
    ]
  }
  
}
