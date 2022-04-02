import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  category$ = new Observable<any>();

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.category$ = this.itemService.getItems();
  }
}
