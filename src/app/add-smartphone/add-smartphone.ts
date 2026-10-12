import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone';
import { Stockage } from '../model/stockage';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.html',
})
export class AddSmartphone implements OnInit {
  newSmartphone = new Smartphone();
  stockages!: Stockage[];
  newIdStock!: number;
  newStockage!: Stockage;

  constructor(
    private smartphoneService: SmartphoneService,
    private router: Router) { }

  ngOnInit(): void {
    this.stockages = this.smartphoneService.listeStockages();
  }

  setDateSortie(value: string, smartphone: Smartphone): void {
    smartphone.dateSortie = value ? new Date(value) : new Date();
  }

  addSmartphone() {
    // console.log(this.newSmartphone);
    this.newStockage = this.smartphoneService.consulterCategorie(this.newIdStock);
    this.newSmartphone.stockage = this.newStockage;
    this.smartphoneService.ajouterSmartphone(this.newSmartphone);
    this.router.navigate(['smarthpones']);
  }
}
