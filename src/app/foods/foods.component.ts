import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  fn: string;
  city: string;
  foods: any[] = [
    {
      foodName: 'kofteh',
      city: 'tabriz'
    },
    {
      foodName: 'kofteh ggg',
      city: 'tabriz uuubjkb'
    },
    {
      foodName: 'kofteh ggg1313',
      city: 'tabriz uuugvbjmjm'
    },
    {
      foodName: 'kofteh gggjojl;j;l',
      city: 'tabriz uuujnhkhj'
    },
  ];
  isAddingfoods = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSaveClick() {
    const newfoods = {
      foodName: this.fn,
      city: this.city,
    };
    this.foods.push(newfoods);
    // console.log(newfoods)
    // this.isAddingfoods=false;
    this.resetForm()

  }
  onCreateClick() {
    this.isAddingfoods = true;
  }

  onCreateCancelClick() {
    this.isAddingfoods = false;

  }

  resetForm() {
    this.fn = '';
    this.city = '';
  }

  onRemoveClick(i: number) {
    this.foods.splice(i, 1);
  }
}
