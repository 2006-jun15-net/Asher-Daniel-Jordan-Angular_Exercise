import { Component, OnInit } from '@angular/core';
import {People} from '../../people';
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  people = People;
  constructor() { }

  ngOnInit(): void {
  }

}
