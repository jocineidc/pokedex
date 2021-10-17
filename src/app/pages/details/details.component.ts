import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'http://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'http://pokeapi.co/api/v2/pokemon-species'
  
  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private ActivatedRouter: ActivatedRoute,
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const id = this.ActivatedRouter.snapshot.params['id'];
    const pokemon = this.PokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`); 
    const name = this.PokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
    
    return forkJoin([pokemon,name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
        //console.log(res);
      },
      error =>{
        this.apiError = true;
      }
    );
    return console.log(id);
  }

}
