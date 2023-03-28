import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:`<div class="alert alert-success" [hidden]="disnoti">
              This app uses cookies.
              <div class="close">
                <button class="btn" (click)="closenotif()">X</button>
              </div>
            </div>`,
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  disnoti:boolean=false;
  closenotif (){
    this.disnoti=true;

  }

}
