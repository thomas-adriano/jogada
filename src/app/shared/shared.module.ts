import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScoreboardComponent } from '@app/shared/scoreboard/scoreboard';
import { GameHistoryComponent } from '@app/shared/game-history/game-history';
import { TimelineComponent } from '@app/shared/timeline/timeline';
import { GameChatComponent } from '@app/shared/game-chat/game-chat';

@NgModule({
  declarations: [TimelineComponent, ScoreboardComponent, GameHistoryComponent, GameChatComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, TimelineComponent, ScoreboardComponent,
    GameHistoryComponent, GameChatComponent]
})
export class SharedModule { }
