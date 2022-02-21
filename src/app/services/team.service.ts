import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  // Private
  serverUrl: string;
  // Private
  /**
  * Constructor
  */
  constructor(private _httpClient: HttpClient) {
    this.serverUrl = environment.serverUrl;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------



  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Get teams by league
   */
  getTeams(leagueName: string | null = null): Observable<Team[]> {
    leagueName = leagueName.trim();
    return this._httpClient.get<Team[]>(`${this.serverUrl}/search_all_teams.php?l=${leagueName}`);

  }
}


