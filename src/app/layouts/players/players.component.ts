import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[] =[];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor( private _changeDetectorRef: ChangeDetectorRef,
    private _playerService: PlayerService,
    public showDialogRef: MatDialogRef<PlayersComponent>,
    @Inject(MAT_DIALOG_DATA) public team:  string ="") { }

  ngOnInit() {
    this.getPlayers( this.team);
  }
  onClose(): void {
    this.showDialogRef.close();
  }
  // Get the player by teamId
  getPlayers(team?: string): void {
    this._playerService.getPlayers(team) 
    .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data:any) => {
        
        this.players = Object.values(data.player)

         // only for testing to get > 1 item in table
        this.players =this.players.concat(this.players);
        // end of test
        
          // Mark for check
      this._changeDetectorRef.markForCheck();

      }); 
   
   
}
}
