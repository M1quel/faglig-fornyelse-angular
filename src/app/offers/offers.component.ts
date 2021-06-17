import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  ngOnInit(): void {
  }
  support = {
    heading: "Support",
    desc: "Delivering faster and more personalized support with shared screens and cool design systems for Figma"
  }
  sales = {
    heading: "Sales growth",
    desc: "Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot"
  }
  component = {
    heading: "Components-driven",
    desc: "Delivering faster and more personalized support with shared screens and cool design systems for Figma"
  }
  icon = {
    heading: "Swap the icon",
    desc: "You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter"
  }

}
