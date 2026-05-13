import { Component, Input, OnInit } from '@angular/core';
import { AdvantageType } from 'src/app/types/advantage.type';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
  @Input() advantage: AdvantageType;
  @Input() index: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
