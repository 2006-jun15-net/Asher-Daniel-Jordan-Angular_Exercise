import { Component, OnInit } from '@angular/core';
import {SampleText} from '../sampletext';
@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {

  text: string = "This is an example of some sample text";
  hoveredText: string;

  onHover(text: string): void {
      this.hoveredText = text;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
