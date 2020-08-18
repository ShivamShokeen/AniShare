import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetDetailsService } from '../services/pet-details.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.page.html',
  styleUrls: ['./pet-details.page.scss'],
})
export class PetDetailsPage implements OnInit {

  animalDetails: any;
  constructor(private route: ActivatedRoute, private petDetails: PetDetailsService) { }

  ngOnInit() {
    this.filterDetais(this.route.snapshot.params['id'], this.route.snapshot.params['type']);
  }
  filterDetais(id: number, type: string) {
    // this.animalDetails = this.petDetails.dogDetails.filter((value) => id == value.id && value.category == type);    
    // if (this.animalDetails.length <= 0) {
    //   this.animalDetails = this.petDetails.cowDetails.filter((value) => id == value.id && value.category == type);
    // }
    // if (this.animalDetails.length <= 0) {
    //   this.animalDetails = this.petDetails.catDetails.filter((value) => id == value.id && type == value.category);
    // }


    // else if (this.animalDetails.length <= 0) {
    //   this.animalDetails = this.petDetails.fishDetails.filter((value) => id == value.id && value.category == type);
    // }
    // else if (this.animalDetails.length <= 0){
    //   this.animalDetails = this.petDetails.birdDetails.filter((value) => id == value.id && value.category == type);
    // }
    // else {
    // console.log("j")  
    // }
    console.log(this.animalDetails)
  }

}
