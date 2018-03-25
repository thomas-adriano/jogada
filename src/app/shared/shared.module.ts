import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { ScoreboardComponent } from '@app/shared/scoreboard/scoreboard';
import { GameHistoryComponent } from '@app/shared/game-history/game-history';
import { TimelineComponent } from '@app/shared/timeline/timeline';
import { GameChatComponent } from '@app/shared/game-chat/game-chat';

@NgModule({
  declarations: [TimelineComponent, ScoreboardComponent, GameHistoryComponent, GameChatComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CommonModule, FormsModule, TimelineComponent, ScoreboardComponent,
    GameHistoryComponent, GameChatComponent, IonicModule]
})
export class SharedModule { }
