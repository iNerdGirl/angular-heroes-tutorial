import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessagesService } from './messages.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor(private messagesSerivce: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesSerivce.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messagesSerivce.add(`HeroService: feteched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
