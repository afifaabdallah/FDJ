import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _teamService: TeamService,
    private dialog: MatDialog
  ) { }


  gridColumns = 6;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  ngOnInit() {

    this.getTeamsByLeague("English Premier League");



  }
  // Get the teams by league name
  getTeamsByLeague(leagueName?: string): void {
    this._teamService.getTeams(leagueName)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data: any) => {

        this.teams = Object.values(data.teams)

        // Mark for check
        this._changeDetectorRef.markForCheck();

      });

  }

  showPlayerList(team: string): void {
    /*
    List All players in a team by Team Id *Patreon ONLY*
https://www.thesportsdb.com/api/v1/json/2/lookup_all_players.php?id=133604 
==> 404 not found

Search for all players from team *Patreon ONLY*
https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?t=Arsenal
==> no data for this API
    */



    /*
    for testing i use this API
     Search for players by name
    https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
    */
    team = "Danny Welbeck";

    const dialogRef = this.dialog.open(PlayersComponent, {
      
    });

    dialogRef.componentInstance.team = team;


  }


  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
