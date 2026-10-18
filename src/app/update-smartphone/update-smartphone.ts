import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone';
import { Stockage } from '../model/stockage';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-smartphone',
  styles: '',
  templateUrl: './update-smartphone.html',
})
export class UpdateSmartphone implements OnInit {
  currentSmartphone = new Smartphone();
  stockages!: Stockage[];
  updatedStockId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private smartphoneService: SmartphoneService
  ) { }

  ngOnInit(): void {
    this.stockages = this.smartphoneService.listeStockages();
    this.currentSmartphone = this.smartphoneService.consulterSmartphone(this.activatedRoute.snapshot.params['id']);
    this.updatedStockId = this.currentSmartphone.stockage.idStock ;
  }

  setDateSortie(value: string, smartphone: Smartphone): void {
    smartphone.dateSortie = value ? new Date(value) : new Date();
  }

  updateSmartphone() {
    this.currentSmartphone.stockage = this.smartphoneService.consulterStockage(this.updatedStockId);
    this.smartphoneService.updateSmartphone(this.currentSmartphone);
    this.router.navigate(['smartphones']);
  }
}
