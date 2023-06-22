import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = []

  constructor(
    private dogService: DogService,
    ) {}
  

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs()
    .subscribe(dogs => this.dogs = dogs);
  }
// J'ai voulu me servir du Headers() pour sauvegarder les changements des noms des chiens sur l'API
  // updateDog(dog: Dog): void {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  // }

  deleteDog(dog: Dog): void {
    this.dogs = this.dogs.filter(d => d !== dog);
    this.dogService.deleteDog(dog.id).subscribe();
  }
}

