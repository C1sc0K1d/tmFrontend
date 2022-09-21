import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-transf',
  templateUrl: './user-transf.component.html',
  styleUrls: ['./user-transf.component.scss']
})
export class UserTransfComponent implements OnInit {

  constructor() { }

  ngOnInit() : void {}

  form = new FormGroup({
    originAccount: new FormControl('', Validators.required),
    destinationAccount:  new FormControl('', Validators.required),
    transferValue:  new FormControl('', Validators.required),
    transferDate:  new FormControl('', Validators.required)
  });

  submit() : void {
    console.log('submited');
  }
}
