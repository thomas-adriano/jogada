import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayroomPage } from './playroom';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    PlayroomPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayroomPage),
    SharedModule
  ],
})
export class PlayroomPageModule { }
