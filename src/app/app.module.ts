import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './layouts/teams/teams.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PlayersComponent } from './layouts/players/players.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    BrowserAnimationsModule
    
    
    
  ],
  
  entryComponents: [
    PlayersComponent
  ],
  bootstrap: [AppComponent],
  providers: []
 
})
export class AppModule { }
