import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { PetDetailsService } from '../services/pet-details.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userInputText: any;
  Animals: any;
  selectedType;
  selectedCategory: string;
  allAnimalDetails: any;
  typeOfPet: string
  hide = false;
  animalDetailsToDisplay: any;
  animalDetailsList: any;

  dataArray: number[] = [];

  @ViewChildren('petTypes') petTypes: ElementRef;

  constructor(public petDetails: PetDetailsService, public toastController: ToastController,) {
    this.searchInput();
    console.log(this.selectedCategory)
  }

  selectedValue(event) {
    console.log(event);
    console.log(this.typeOfPet)
    console.log(this.petTypes);
  }
  categorySelected(type) {
    this.selectedCategory = type.value;
    this.searchInput();
  }

  selectAnimalCategory(type) {
    this.hide = true;
    this.animalDetailsToDisplay = this.petDetails.selectAnimalsDetailsToDisplay(type.value);
    console.log(this.animalDetailsToDisplay);
  }

  selectedAnimalSubcategory(animal) {
    if (animal.checked == true && animal.checked.value != '') {
      this.fetchAnimalSubcategoryDetails(animal.value)
    }
    else {
      console.log("Select a checkbox");
      this.animalDetailsList = undefined;
    }
  }

  animalDataToDisplay(type) {
    if (type.checked === true && type.value != '') {
      console.log(type.value);
      console.log(this.dataArray);
      if (this.dataArray.length <= 3) {
        this.dataArray.push(type.value);
        console.log(this.dataArray);
        //this.router
      }
      else {
        this.checkboxOverLimitError();
        console.log("Length should not be greater than 4");
      }
    }
  }

  fetchAnimalSubcategoryDetails(animalValue) {
    let animalDetailsBasedOnName;
    let animalDetailsBasedOnBreed;
    animalDetailsBasedOnName = this.petDetails.allAnimalDetails.filter((value) => value.name == animalValue);
    this.animalDetailsList = animalDetailsBasedOnName;
    console.log(this.animalDetailsList);
    if (animalDetailsBasedOnName.length == 0) {
      animalDetailsBasedOnBreed = this.petDetails.allAnimalDetails.filter((value) => value.breed == animalValue);
      this.animalDetailsList = animalDetailsBasedOnBreed;
      console.log(this.animalDetailsList);
    }
  }

  searchInput() {
    if (this.selectedCategory != undefined || this.selectedCategory != null) {
      this.Animals = this.petDetails.filterSearchInput(this.userInputText, this.selectedCategory);
      console.log(this.Animals)
    }
  }


  async checkboxOverLimitError() {
    const toast = await this.toastController.create({
      message: "You can select only 4.",
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

  // Pettype(petType, event: any) {
  //   if (event.detail.checked == true) {
  //     console.log(event.detail.checked);
  //     // this.Animals = this.petDetails.filterSearchInput(this.userInputText,petType);
  //     this.petDetails.Pettype = petType;
  //     this.searchInput();
  //     console.log(this.petDetails.Pettype);
  //   }
  //   else {
  //     this.petDetails.Pettype = "Unchecked";
  //     console.log("unchecked one " +this.petDetails.Pettype);
  //     this.searchInput();
  //   }
  // }

}
