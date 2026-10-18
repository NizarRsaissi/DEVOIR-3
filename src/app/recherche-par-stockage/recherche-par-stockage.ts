import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Smartphone } from '../model/smartphone.model';
import { Stockage } from '../model/stockage';
import { SmartphoneService } from '../services/smartphone';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  imports: [CommonModule, FormsModule, RouterLink, SearchFilterPipe],
  selector: 'app-recherche-par-stockage',
  styles: ``,
  templateUrl: './recherche-par-stockage.html',
})
export class RechercheParStockage implements OnInit {
  smartphones: Smartphone[] = [];
  stockages: Stockage[] = [];
  IdStockage: number | null = null;
  allSmartphones!: Smartphone[];
  searchTerm!: String;

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {
    this.stockages = this.smartphoneService.listeStockages();
    this.allSmartphones = this.smartphoneService.listeSmartphones();
    this.smartphones = this.allSmartphones;

  }

  onChange(): void {
    this.smartphones = this.smartphoneService.rechercherParStockage(this.IdStockage);
  }

  supprimerSmartphone(smartphone: Smartphone): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.smartphoneService.supprimerSmartphone(smartphone);
      this.onChange();
    }
  }

  onKeyUp(filterText: string) {
    this.smartphones = this.allSmartphones.filter(item =>
      item.modele.toLowerCase().includes(filterText.toLowerCase()));
  }
}
