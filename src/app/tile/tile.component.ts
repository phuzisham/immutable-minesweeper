import {Component, Input} from '@angular/core';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent {
  @Input() tile: any;
}
