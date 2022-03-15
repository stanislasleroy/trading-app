import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  @Input()
  categoryName: any;

  @Input()
  category: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
