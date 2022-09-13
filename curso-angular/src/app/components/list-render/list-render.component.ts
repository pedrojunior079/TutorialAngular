import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {
    name: "Bebezinha",
    type: 'Lhasa',
    idade: 16,
  }

  animalDetails = ''

  constructor(private listService: ListService) { 
    this.getAnimals()
  }

  ngOnInit(): void {}

  mostrarIdade(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.idade} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
  
  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }  
  
}
