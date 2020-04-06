import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rouls',
  templateUrl: './rouls.component.html',
  styleUrls: ['./rouls.component.scss']
})
export class RoulsComponent implements OnInit {
  name: string;
  desc: string;
  constructor() { }

  ngOnInit(): void {
  }
  clickMe() {
console.log(`${this.name} ${this.desc}`)
  }
}
