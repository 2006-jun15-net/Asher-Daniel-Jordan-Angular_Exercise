import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  animalSelected: string="false";
  colorSelected: string="false";
  daySelected: string="false";

  animals: string[] = [
    'dog',
    'cat',
    'parrot'
  ];
  colors: string[] = [
    'red',
    'blue',
    'green'
  ];
  days: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAnimalClicked(e: string)
  {
    this.animalSelected = e;
  }
  onColorClicked(e: string)
  {
    this.colorSelected = e;
  }
  onDayClicked(e: string)
  {
    this.daySelected = e;
  }

  isAnimalSelected(value: string)
  {
    return (this.animalSelected == value);
  }
  isColorSelected(value: string)
  {
    return (this.colorSelected == value);
  }
  isDaySelected(value: string)
  {
    return (this.daySelected == value);
  }
}
