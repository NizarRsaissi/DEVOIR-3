import { Injectable } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  smartphones: Smartphone[];

  constructor() {
    console.log('Création du service smartphone');
    this.smartphones = [
      { idSmartphone: 1, marque: 'Apple', modele: 'iPhone 15', prix: 1200, dateSortie: new Date('2023-09-22') },
      { idSmartphone: 2, marque: 'Samsung', modele: 'Galaxy S24', prix: 980, dateSortie: new Date('2024-01-17') },
      { idSmartphone: 3, marque: 'Xiaomi', modele: 'Redmi Note 13', prix: 420, dateSortie: new Date('2024-02-20') }
    ];
  }

  listeSmartphones(): Smartphone[] {
    return this.smartphones;
  }

  ajouterSmartphone(smartphone: Smartphone) {
    this.smartphones.push(smartphone);
  }

  supprimerSmartphone(smartphone: Smartphone) {
    const index = this.smartphones.indexOf(smartphone, 0);
    if (index > -1) {
      this.smartphones.splice(index, 1);
    }
  }

  consulterSmartphone(id: number): Smartphone {
    return this.smartphones.find(p => p.idSmartphone == id)!;
  }

  updateSmartphone(smartphone: Smartphone) {
    const index = this.smartphones.indexOf(smartphone, 0);
    if (index > -1) {
      this.smartphones.splice(index, 1);
      this.smartphones.splice(index, 0, smartphone);
    }
  }
}
