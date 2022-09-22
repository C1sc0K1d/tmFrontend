import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransferenceData } from '../utils/interfaces/transference-data';
import { Transfer } from '../utils/requests/transfer-request';
import { Requests } from '../utils/services/requests.component';

@Component({
  selector: 'app-user-transf',
  templateUrl: './user-transf.component.html',
  styleUrls: ['./user-transf.component.scss']
})
export class UserTransfComponent implements OnInit {

  constructor(private requests: Requests) {}
  transferData: Transfer = {};
  tranferences: TransferenceData[] = [];
  hidden: boolean = false;

  ngOnInit() : void {}

  form = new FormGroup({
    originAccount: new FormControl('', Validators.required),
    destinationAccount:  new FormControl('', Validators.required),
    transferValue:  new FormControl(this.transferData.transferValue, Validators.required),
    transferDate:  new FormControl('', Validators.required)
  });

  submit() : void {
    this.form.value.transferDate = this.form.value.transferDate?.split('-').reverse().join('/');
    this.transferData.accountOrigin = this.form.value.originAccount?.toString();
    this.transferData.destiniAccount = this.form.value.destinationAccount?.toString();
    this.transferData.transferValue = this.form.value.transferValue;
    this.transferData.transferDate = this.form.value.transferDate?.toString();
    this.requests.transfer(this.transferData).subscribe(data => {
      console.log(data)
      this.requests.getAll().subscribe(tranfs => {
        this.tranferences = tranfs;
        this.hidden = !this.hidden;
      });
    });
  }

  hid() : void {
    this.hidden = !this.hidden;
  }
}
