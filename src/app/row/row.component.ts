import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TileComponent} from '../tile/tile.component';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})


export class RowComponent {
  @Input() row: any;
  @Output() tileClick = new EventEmitter();

  handleTileClick(tile){
    this.tileClick.next(tile);
  }
}
