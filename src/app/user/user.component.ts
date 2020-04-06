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
  addres: string;
  users: any[] = [
    {
      firstName: 'Saeed',
      lastName: 'Hajiaghazadeh',
      phone: '021545454',
      mobile: '0912545454',
      post: '654654654',
      address: 'Tehran , ....'
    },
    {
      firstName: 'Mohammad',
      lastName: 'Haji',
      phone: '021545454',
      mobile: '0937545454',
      post: '564654654',
      address: 'Tehran ,Gharchak , ...'
    }, {
      firstName: 'Vahid',
      lastName: 'Haji',
      phone: '0221545454',
      mobile: '09375454',
      post: '5454',
      address: 'Gharchak sdfds'
    }, {
      firstName: 'Soheil',
      lastName: 'Hajiagha',
      phone: '022154545454',
      mobile: '0937545422',
      post: '54544444',
      address: 'Varamin, ....'
    },
  ]
  isAddingUser = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveClick() {
    const newUser = {
      firstName: this.fname,
      lastName: this.lname,
      phone: this.phone,
      mobile: this.mobail,
      post: this.post,
      address: this.addres
    };
    this.users.push(newUser);
    // console.log(`${this.fname} ${this.lname} ${this.phone} ${this.mobail} ${this.post} ${this.addres}`);
    this.isAddingUser = false;
    this.resetForm()
  }

  onCreateNewUserClick() {
    this.isAddingUser = true;
  }

  onCreateNewUserCancelClick() {
    this.isAddingUser = false;
  }

  resetForm() {
    this.fname = '';
    this.lname = '';
    this.phone = undefined;
    this.mobail = undefined;
    this.post = undefined;
    this.addres = undefined;
  }

}
