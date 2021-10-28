import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sosCalls: any = [];
  reader: string;
  rssi: string;
  stamp: string;
  desc: string;
  ward1: number;
  ward2: number;
  constructor(private api: APIService) {}
  async ngOnInit() {
    this.ward1=0;
    this.ward2=0;

    await Auth.currentUserInfo().then(respData=>{
      Auth.currentAuthenticatedUser({
        bypassCache: false
      }).then(async userDetail => {
        console.log(userDetail);
        this.api.OnUpdateHospitalTagsListener.subscribe(({
          next: (getDetail) => {
            console.log(getDetail.value.data.onUpdateHospitalTags.reader);
            this.rssi = getDetail.value.data.onUpdateHospitalTags.rssi;
            this.reader = getDetail.value.data.onUpdateHospitalTags.reader;
            if (this.reader === '304703bf-9946-47b9-9de2-6ed688cd2370'){
              this.ward1=1;
              this.ward2=0;
            } else {
              this.ward1=0;
              this.ward2=1;
            }
            this.stamp = getDetail.value.data.onUpdateHospitalTags.stamp;
            this.desc = getDetail.value.data.onUpdateHospitalTags.sos;
            console.log(this.desc);
            if (this.desc === 'Detected'){
              this.sosCalls.push({
                desc: 'Help Call',
                time: new Date(parseInt(this.stamp,10))
              });
              console.log(this.sosCalls);
            }

          }
        }));
      });
    });
  }
}
