import { Component, OnInit } from '@angular/core';
import {MinesweeperComponent} from './minesweeper/minesweeper.component';
import {createGame} from './game';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['/app.component.css']
})

export class AppComponent implements OnInit {
  public game;

  // Keep constructor lightweight
  constructor(){}

  // Immediately called after constructor
  ngOnInit(){
    this.startNewGame();
  }

  // Create a new game
  startNewGame(){
    this.game = createGame({cols: 16, rows: 16, mines: 48});
  }
}
