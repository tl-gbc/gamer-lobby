import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService} from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FilterPipe } from './shared/filter.pipe';

import { PlayerRankingsComponent } from './components/player-rankings/player-rankings.component';
import { AdminPlayerRankingsComponent } from './components/admin-player-rankings/admin-player-rankings.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DataService } from './services/data.service';
import { PlayerService } from './services/player.service';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateComponent } from './components/update/update.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PlayerRankingsComponent,
    AdminPlayerRankingsComponent,
    GameListComponent,
    AddPlayerComponent,
    FilterPipe,
    JoinGameComponent,
    UpdateComponent,
    AddGameComponent,
    UpdateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    NgxPaginationModule
    
  ],
  providers: [AuthService, DataService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
