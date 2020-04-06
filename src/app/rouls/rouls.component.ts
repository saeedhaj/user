import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rouls',
  templateUrl: './rouls.component.html',
  styleUrls: ['./rouls.component.scss']
})
export class RoulsComponent implements OnInit {
  name: string;
  desc: string;
  roles: any[] = [
    {
      name: 'ali',
      desc: 'jdfhkdfk',

    },
    {
      name: 'ali',
      desc: 'jdfhkdfk',

    },
    {
      name: 'ali',
      desc: 'jdfhkdfk',
    },

  ]
  isAddingRoles = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSaveClick() {
    const role = {
      name: this.name,
      desc: this.desc
    };
    this.roles.push(role);
    this.isAddingRoles = false;
    this.resetForm()
    // console.log(`${this.name} ${this.desc}`)
  }


  onCreateNewRolesClick() {
    this.isAddingRoles = true;
  }

  onCreateNewRolesCancelClick() {
    this.isAddingRoles = false;
  }

  resetForm() {
    this.name = '';
    this.desc = '';

  }
}
