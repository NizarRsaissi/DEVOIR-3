import { Injectable } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { Stockage } from '../model/stockage';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  listeStockages(): Stockage[] {
    return this.stockages;
  }
  smartphones: Smartphone[];
  stockages!: Stockage[];

  constructor() {
    this.stockages = [
      { idStock: 1, capaciteStock: "32 Go" },
      { idStock: 2, capaciteStock: "64 Go" },
      { idStock: 3, capaciteStock: "128 Go" },
      { idStock: 4, capaciteStock: "256 Go" },
      { idStock: 5, capaciteStock: "512 Go" },
      { idStock: 6, capaciteStock: "1 To" },
    ];
    this.smartphones = [
      { idSmartphone: 1, marque: 'Apple', modele: 'iPhone 15', prix: 1200, dateSortie: new Date('2023-09-22'), stockage: { idStock: 3, capaciteStock: "128 Go" } },
      { idSmartphone: 2, marque: 'Samsung', modele: 'Galaxy S24', prix: 980, dateSortie: new Date('2024-01-17'), stockage: { idStock: 4, capaciteStock: "256 Go" } },
      { idSmartphone: 3, marque: 'Xiaomi', modele: 'Redmi Note 13', prix: 420, dateSortie: new Date('2024-02-20'), stockage: { idStock: 4, capaciteStock: "256 Go" } }
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
  listeCategories(): Stockage[] {
    return this.stockages;
  }
  consulterCategorie(id: number): Stockage {
    return this.stockages.find(cat => cat.idStock == id)!;
  }
}
