import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

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
    * Get players by team
    * Search for all players from team *Patreon ONLY*
https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?t=Arsenal
return 0 data => i display player with x name
    */
   getPlayers(team: string | null = null): Observable<Player[]> {
    
    team= team.trim();
     return this._httpClient.get<Player[]>(`${this.serverUrl}/searchplayers.php?p=${team}`);
 
   }
 }
 
