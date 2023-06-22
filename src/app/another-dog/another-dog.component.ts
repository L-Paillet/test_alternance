import { Component, Input } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';
import { DogsComponent } from '../dogs/dogs.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-another-dog',
  templateUrl: './another-dog.component.html',
  styleUrls: ['./another-dog.component.css']
})
export class AnotherDogComponent {
  dogs: Dog[] = []

  constructor(
    private dogService: DogService,
    private location: Location,
    private DogsComponent: DogsComponent,
    ) {}


// J'ai appelé le component Dogs plus haut pour pouvoir utiliser la fonction updateDog() et permettre la modification des noms
  // save(): void {
  //   if (this.dogs) {
  //     this.dogService.updateDog()
  //       .subscribe();
  //   }
  // }
}
