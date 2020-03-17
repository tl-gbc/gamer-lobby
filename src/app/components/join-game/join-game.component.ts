import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { GameService} from '../../services/game.service';
import { PlayerService } from '../../services/player.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  games: Object[] = [];
  
  private id = this.route.snapshot.paramMap.get('id');
  player: string;
  rank: string;
  score: string;
  time: string;
  favouriteGame: string;
  status: string;

  joinGameForm = this.formBuilder.group({
    player : ['' , Validators.required],
    rank : ['',Validators.required],
    score : ['',Validators.required],
    time : ['',Validators.required],
    favouriteGame : ['',Validators.required],
    status : ['',Validators.required],
  });


  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private gameService: GameService,
    private playerService: PlayerService,
    private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.playerService.getPlayer(id).subscribe(data =>{
      this.joinGameForm = this.formBuilder.group({
      player : [data.player , Validators.required],
      rank : [data.rank],
      score : [data.score],
      time : [data.time],
      favouriteGame : [data.favouriteGame, Validators.required],
      status : [data.status],
      })
    })   
    this.gameService.loadGames().subscribe(data => {
      for (let game of Object.keys(data)){
        if (data[game]['status'] == 'Active')
        this.games.push(data[game])
      }
    })
  }

  joinGame() {
    const newPlayer = {
      player: this.player,
      rank: this.rank,
      score: this.score,
      time: this.time,
      favouriteGame: this.favouriteGame,
      status: "Unavailable"
    }
    this.playerService.updatePlayer(this.id, newPlayer).subscribe(data => {
      if (data != null) {
        this.flashMessage.show('Join game successfully', {
          cssClass: 'alert-success',
          timeout: 3000});  
          this.router.navigate(['']);      
      } else {
        this.flashMessage.show("Cannot join game", {
          cssClass: 'alert-danger',
          timeout: 3000});
        }
      });
  }
}
