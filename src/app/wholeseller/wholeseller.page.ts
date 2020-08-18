import { Component, OnInit } from '@angular/core';
import { PetDetailsService } from '../services/pet-details.service';

@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.page.html',
  styleUrls: ['./wholeseller.page.scss'],
})
export class WholesellerPage implements OnInit {

  searchText: string;
  animalDetails: any;
  selectedCategory: string;
  constructor(public petDetails: PetDetailsService) { }

  ngOnInit() {
    this.filterRecords();
  }

  
  categorySelected(type) {
    this.selectedCategory = type.value;   
    this.filterRecords();
  }

  filterRecords() {
    if (this.selectedCategory != undefined || this.selectedCategory != null) {
      this.animalDetails = this.petDetails.filterSearchInput(this.searchText,this.selectedCategory);
      console.log(this.animalDetails)
    }
  }

}
