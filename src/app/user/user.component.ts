import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  fname: string;
  lname: string;
  phone: number;
  mobail: number;
  post: number;
  addres:string;

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(`${this.fname} ${this.lname} ${this.phone} ${this.mobail} ${this.post} ${this.addres}`)
  }
}
