import {Component, OnInit} from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {concatMap, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  date$: Observable<string> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.date$ = timer(0, 1000)
      .pipe(
        switchMap(() => of(new Date().toLocaleString('fr-FR'))));
  }
}
