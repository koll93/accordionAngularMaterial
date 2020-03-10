import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
<mat-accordion>
<ng-container *ngFor="let button of userButtons">

<ng-container *ngIf="!button.hasOwnProperty('buttons')"><button mat-raised-button (click)="goToLink(button.linkButton)">{{button.nameButton}}</button></ng-container>

  <mat-expansion-panel *ngIf="button.hasOwnProperty('buttons')">
  <mat-expansion-panel-header>
  <mat-panel-title>{{button.nameButton}}</mat-panel-title>
  </mat-expansion-panel-header>
  <app-button [userButtons]="button.buttons" [goToLink]="goToLink"></app-button>
  </mat-expansion-panel>
</ng-container></mat-accordion>`,

styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
@Input() userButtons;
@Input() goToLink;

constructor() {}

}


