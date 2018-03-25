import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreboardComponent } from '@app/shared/scoreboard/scoreboard';

@NgModule({
  declarations: [ScoreboardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, ScoreboardComponent]
})
export class SharedModule { }
