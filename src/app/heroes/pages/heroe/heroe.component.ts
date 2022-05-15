import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

<<<<<<< HEAD
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
      this.activatedRoute.params
          .pipe(
              switchMap( ({ id }) =>  this.heroesService.getHeroePorId(id))
          )
          .subscribe( heroe => this.heroe = heroe );
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
=======
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params
          .subscribe( ({ id }) => console.log(id) )
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
  }

}
