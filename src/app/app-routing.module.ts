import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard'; 
import { AuthService} from './services/auth.service';
import { PlayerRankingsComponent } from './components/player-rankings/player-rankings.component';
import { AdminPlayerRankingsComponent } from './components/admin-player-rankings/admin-player-rankings.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { UpdateComponent } from './components/update/update.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';

const routes: Routes =  [
{path:'', component: PlayerRankingsComponent},
{path:'player-list', component: AdminPlayerRankingsComponent, canActivate: [ AuthGuard ]},
{path:'login', component: LoginComponent},
{path:'game-list', component: GameListComponent, canActivate: [ AuthGuard ]},
{path:'add-player', component: AddPlayerComponent, canActivate: [ AuthGuard ]},
{path:'join-game', component: JoinGameComponent},
{path:'join-game/:id', component: JoinGameComponent},
{path:'update/:id', component: UpdateComponent, canActivate: [ AuthGuard ]},
{path:'add-game', component: AddGameComponent, canActivate: [ AuthGuard ]},
{path:'update-game/:id', component: UpdateGameComponent, canActivate: [ AuthGuard ]}

//{path: '**', component: PlayerRankingsComponent } //need to put at the end of the list

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
