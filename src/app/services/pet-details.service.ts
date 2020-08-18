import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PetDetailsService {

  petType = [
    {
      name: "Dog"
    },
    {
      name: "Cow"
    },
    {
      name: "Cat"
    },
    {
      name: "Fish"
    },
    {
      name: "Bird"
    },
  ];
  allAnimalDetails = [
    {
      id: 1,
      name: "Pug",
      image: "https://cdn.pixabay.com/photo/2018/03/20/16/16/dog-3243734__340.jpg",
      price: 4000,
      breed: "Pug breeders",
      location: "Gujarat",
      category: 'Dog'
    },
    {
      id: 2,
      name: "Bakharwal",
      image: "https://1.bp.blogspot.com/-aBQlfeR9m58/Xb_9CmxgTgI/AAAAAAAAHNE/FdI4I-1ZYKkdvegyJ-YRN3gS-64ZDq1awCLcBGAsYHQ/s400/bakharwal.jpg",
      price: 4000,
      breed: "Dog breeders",
      location: "New delhi",
      category: 'Dog'
    },
    {
      id: 3,
      name: "Bully Kutta",
      image: "https://1.bp.blogspot.com/-mCnNNwKpjRU/Xb__6_MxffI/AAAAAAAAHNQ/58ddJgxRyIwR-ZMRn8kU35OfzoxyL79wQCLcBGAsYHQ/s400/bully-kutta.jpg",
      price: 4000,
      breed: "Dog breeders",
      location: "Haryana",
      category: 'Dog'
    },
    {
      id: 4,
      name: "Chippiparai ",
      image: "https://1.bp.blogspot.com/-Sp8Ix_j8alU/XcADuqekeBI/AAAAAAAAHNc/wkKOcpfyCUAJnK0fXOtk91YAWk-2gDP6QCLcBGAsYHQ/s400/Female_Chippiparai_sitting.jpg",
      price: 4000,
      breed: "Dog breeders",
      location: "New delhi",
      category: 'Dog'
    },
    {
      id: 5,
      name: "Kombai",
      image: "https://1.bp.blogspot.com/-88LZCEpvNnA/XcAGKRZWo7I/AAAAAAAAHNo/7AtdMBSHHQAdnNtyxUUOk5JAZsePDDWLACLcBGAsYHQ/s400/kombai.jpg",
      price: 4000,
      breed: "Dog breeders",
      location: "Delhi/NCR",
      category: 'Dog'
    },
    {
      id: 6,
      name: "Gaddi Kutta",
      image: "https://1.bp.blogspot.com/-CR0agdw3U4Q/XcAIuIrwvTI/AAAAAAAAHN0/ui4ooOItVtQ-97cp47zwJKX3zCMC-nQQgCLcBGAsYHQ/s400/gaddi.jpg",
      price: 4000,
      breed: "Dog breeders",
      location: "Gujarat",
      category: 'Dog'
    },
    {
      id: 7,
      name: "Gir/Gyr",
      image: "http://cdn2.walkthroughindia.com/wp-content/uploads/2013/06/Sasan-Gir-Cow.jpg",
      price: 15000,
      location: "Gujarat",
      category: 'Cow'
    },
    {
      id: 8,
      name: "Red Sindhi",
      image: "http://cdn2.walkthroughindia.com/wp-content/uploads/2017/06/Indian_Cow.jpg",
      price: 15000,
      location: "Rajasthan",
      category: 'Cow'
    },
    {
      id: 9,
      name: "Kankrej",
      image: "http://cdn2.walkthroughindia.com/wp-content/uploads/2019/01/Kankrej-Cows.jpg",
      price: 15000,
      location: "Gujarat/Rajasthan",
      category: 'Cow'
    },
    {
      id: 10,
      name: "Ongole",
      image: "http://cdn2.walkthroughindia.com/wp-content/uploads/2019/01/DcqhyDuXkAAH2B9.jpg",
      price: 15000,
      location: "Andhra Pradesh",
      category: 'Cow'
    },
    {
      id: 11,
      name: "Dangi",
      image: "http://cdn.walkthroughindia.com/wp-content/uploads/2017/05/cow-in-India.jpg",
      price: 15000,
      location: "Maharashtra",
      category: 'Cow'
    },
    {
      id: 12,
      name: "Bombay Cat",
      image: "https://www.petsworld.in/blog/wp-content/uploads/2017/12/bombay-cat-300x176.jpg",
      price: 2000,
      location: "New delhi",
      color: "Black",
      category: 'Cat'
    },
    {
      id: 13,
      name: "Himalayan Cat",
      image: "https://www.petsworld.in/blog/wp-content/uploads/2017/12/Himalayan.jpg",
      price: 4000,
      location: "New delhi",
      color: "White",
      category: 'Cat'
    },
    {
      id: 14,
      name: "Siamese Cat",
      image: "https://www.petsworld.in/blog/wp-content/uploads/2017/12/siamese-300x177.jpg",
      price: 3000,
      location: "Haryana",
      color: "Brown",
      category: 'Cat'
    },
    {
      id: 15,
      name: "Persian Cats",
      image: "https://www.petsworld.in/blog/wp-content/uploads/2017/12/persian-cat-300x300.jpg",
      price: 5000,
      location: "Bombay",
      color: "Grey",
      category: 'Cat'
    },
    {
      id: 16,
      name: "Maine Coon",
      image: "https://www.petsworld.in/blog/wp-content/uploads/2017/12/Maine-coon-300x200.png",
      price: 2200,
      location: "New delhi",
      color: "Orange",
      category: 'Cat'
    },
    {
      id: 17,
      name: "Betta",
      image: "https://storage.googleapis.com/scratchpay-com-assets/images/10%20Popular%20Types%20of%20Pet%20Fish/types_of_pet_fish_betta_opt.jpg",
      description: "For ease of maintenance, bettas can’t be beat. Also known as Siamese fighting fish, bettas require separation from most other species, which means these brilliantly colored swimmers do well in small fish bowls.",
      address: "New delhi",
      price: 700,
      size: "3 inches",
      lifeSpan: "3 to 5 Years",
      ratings: 0,
      temperature: "76° to 80°F",
      color: "Gold,Blue,Orange,Black",
      nutrition: "",
      category: 'Fish'
    },
    {
      id: 18,
      name: "Goldfish",
      image: "https://storage.googleapis.com/scratchpay-com-assets/images/10%20Popular%20Types%20of%20Pet%20Fish/types_of_pet_fish_goldfish_opt.jpg",
      description: "Another cold-water fish, goldfish belong to the carp family. Because they enjoy cool water temperatures, keep goldfish in a separate tank from warm water fish. Avoid keeping goldfish in a bowl, as they can grow quite long and need sufficient swimming room",
      address: "New delhi",
      price: 800,
      size: "3 inches",
      lifeSpan: "3 to 5 Years",
      ratings: 0,
      temperature: "76° to 80°F",
      color: "Golden",
      nutrition: "",
      category: 'Fish'
    },
    {
      id: 19,
      name: "Angelfish",
      image: "https://storage.googleapis.com/scratchpay-com-assets/images/10%20Popular%20Types%20of%20Pet%20Fish/types_of_pet_fish_angelfish_opt.jpg",
      description: "Large, lovely and graceful, angelfish appear in various color patterns. Because of their size when full-grown, angelfish require at least a 55-gallon tank. Angelfish do well with other fish species (although they may eat very small fish) but can fight with each other.",
      address: "New delhi",
      price: 900,
      size: "3 inches",
      lifeSpan: "3 to 5 Years",
      ratings: 0,
      temperature: "76° to 80°F",
      color: "Yello,Blue,Black,White",
      nutrition: "",
      category: 'Fish'
    },
    {
      id: 20,
      name: "Guppies",
      image: "https://storage.googleapis.com/scratchpay-com-assets/images/10%20Popular%20Types%20of%20Pet%20Fish/types_of_pet_fish_guppies-min_opt.jpg",
      description: "These easy-care aquarium fish appear in a variety of colors. There is one drawback to guppies: They breed constantly, so if you have male and females together, the offspring can soon overwhelm a tank. For best results, choose all males or all females.",
      address: "New delhi",
      price: 700,
      size: "3 inches",
      lifeSpan: "3 to 5 Years",
      ratings: 0,
      temperature: "76° to 80°F",
      color: "Blue,Black,Gold,White,Orange",
      nutrition: "",
      category: 'Fish'
    },
    {
      id: 21,
      name: "Neon Tetras",
      image: "https://storage.googleapis.com/scratchpay-com-assets/images/10%20Popular%20Types%20of%20Pet%20Fish/types_of_pet_fish_neon_tantra_opt.jpg",
      description: "These small, translucent blue and red fish hail from the Amazon jungles. Because they aren’t aggressive, they are a welcome and colorful addition to any freshwater tank. Keep neon tetras in a school of at least six fish, and preferably more. You’ll find them swimming in the middle of your tank.",
      address: "New delhi",
      price: 800,
      size: "3 inches",
      lifeSpan: "3 to 5 Years",
      ratings: 0,
      temperature: "76° to 80°F",
      color: "Blue,Black,Red,Orange",
      nutrition: "",
      category: 'Fish'
    },
    {
      id: 22,
      name: "The Sarus crane",
      image: "http://wildnest.in/wp-content/uploads/2015/06/sarus-crane-dance-bharatpur.jpg",
      description: "The toughest contender for the position of the Indian National bird, the Sarus crane is the only resident non-migratory crane of India. It is also the tallest crane, standing at a height of 5.6 feet. Found mostly in Uttar Pradesh (also Sarus Crane is the state bird of Uttar Pradesh), parts of Rajasthan, Haryana. ",
      price: 4000,
      lifeSpan: "10 to 15 Years",
      address: "Rajasthan, Haryana",
      warranty: "1 Year",
      nutrition: "",
      temperature: "105°F",
      ratings: 0,
      size: "9 inches",
      color: "White,Red",
      category: 'Bird'
    },
    {
      id: 23,
      name: "The Indian Pitta",
      image: "http://wildnest.in/wp-content/uploads/2015/06/indian-pitta-tadoba-bharat.jpg",
      description: "The Indian Pitta gets its name from Telugu, where Pitta means small bird. Please do not confuse this with Pita, the sumptuous bread used in Lebanese cuisine with that delicious roasted chicken and- sorry for digressing. ",
      price: 5000,
      lifeSpan: "10 to 15 Years",
      address: "New delhi",
      warranty: "1 Year",
      nutrition: "",
      temperature: "105°F",
      ratings: 0,
      size: "9 inches",
      color: "Yellow,Black,Green",
      category: 'Bird'
    },
    {
      id: 24,
      name: "The Red headed Trogon",
      image: "http://wildnest.in/wp-content/uploads/2015/06/red-headed-trogaon.jpg",
      description: "Redheads have been in vogue since times immemorial, if you know what I mean huehehe. Its characteristic blue bill, and blue eye ring along with red and yellow plumage make it a class apart.",
      price: 2000,
      lifeSpan: "10 to 15 Years",
      address: "New delhi",
      warranty: "1 Year",
      nutrition: "",
      temperature: "105°F",
      ratings: 0,
      size: "9 inches",
      color: "Red,White,Grey",
      category: 'Bird'
    },
    {
      id: 25,
      name: "The Asian Paradise Flycatcher",
      image: "http://wildnest.in/wp-content/uploads/2015/06/asian-paradise-flycatcher-tadoba1.jpg",
      description: "This amazingly long-tailed, medium-sized bird is migratory in nature and is found in thick forests in the Indian subcontinent, only in the summer season. The Asian Paradise Flycatcher feeds primarily on insects: it often swats them directly from the air underneath a densely canopied tree; the sneaky rascal. ",
      price: 7000,
      lifeSpan: "10 to 15 Years",
      address: "New delhi",
      warranty: "1 Year",
      nutrition: "",
      temperature: "105°F",
      ratings: 0,
      size: "9 inches",
      color: "White,Dark blue.",
      category: 'Bird'
    },
    {
      id: 26,
      name: "The Peacock/The Indian Peafowl",
      image: "http://wildnest.in/wp-content/uploads/2015/06/peacock-vinod-delhi.jpg",
      description: "Hey look, finally a bird you’ve heard about! Settling in at number four, we have the Indian National bird, i.e the Peacock. Peacocks are actually considered sacred in Hinduism, because the spots in their tail signify the eyes of gods (which is quite hilarious if you think about it – god watching people through peacock’s tails, I bet that happens all the time).",
      price: 10000,
      lifeSpan: "10 to 15 Years",
      address: "New delhi",
      warranty: "1 Year",
      nutrition: "",
      temperature: "105°F",
      ratings: 0,
      size: "9 inches",
      color: "Blue,Green,Brown,White.",
      category: 'Bird'
    }
  ];
  animalType: string;
  selectedPetType: string;
  uniqueBreed;
  constructor(private toastController: ToastController,) {
    // this.performFirst();
  }

  selectAnimalsDetailsToDisplay(selectedType){
    console.log(selectedType)
    let removeDup;
    let animalLists: any;

    animalLists = this.allAnimalDetails.filter((object) => object.category == selectedType);
    // console.log(this.allAnimalDetails);
    removeDup = animalLists.filter((v, i, a) => a.findIndex(t => (t.image && t.id === v.id)) === i);
    console.log(removeDup);
    let findDuplicate;
    findDuplicate = removeDup.map((value) => {return value.breed})
     console.log(findDuplicate);
    this.uniqueBreed = new Set(findDuplicate);
    // console.log(this.uniqueBreed);
    return removeDup; 
  }

  filterSearchInput(searchKeyword, type) {
    console.log(type);
    let animalLists: any;
    let removeDup: any;

    animalLists = this.allAnimalDetails.filter((object) => object.category == type);

    // console.log(animalLists)

    if (searchKeyword != undefined && this.allAnimalDetails != undefined) {
      // console.log(this.allAnimalDetails);
      removeDup = animalLists.filter((v, i, a) => a.findIndex(t => (t.image && t.id === v.id)) === i);
      // console.log(removeDup);
      return removeDup.filter(items => {
        return items.name.toLocaleLowerCase().indexOf(searchKeyword.toLocaleLowerCase()) > -1
        // || items.breed.toLocaleLowerCase().indexOf(searchKeyword.toLocaleLowerCase()) > -1 if you want to use 'breed' you also need to give an option in allAnimalDetails other wise it will give an error 
      })
    }
    else if (searchKeyword == undefined && this.allAnimalDetails != undefined) {
      removeDup = animalLists.filter((v, i, a) => a.findIndex(t => (t.image && t.id === v.id)) === i);
      return removeDup;
    }
    else {
      this.tagNotSelected();
    }
  }

  async refreshPage() {
    const toast = await this.toastController.create({
      message: 'Please reload the page it might be some server side problem. :)',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async tagNotSelected() {
    const toast = await this.toastController.create({
      message: 'Please select a tag. :)',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
}
