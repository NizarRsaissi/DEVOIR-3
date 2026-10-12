import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.html',
})
export class AddSmartphone implements OnInit {
  newSmartphone = new Smartphone();
  message!: string;

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {}

  setDateSortie(value: string, smartphone: Smartphone): void {
    smartphone.dateSortie = value ? new Date(value) : new Date();
  }

  addSmartphone() {
    console.log(this.newSmartphone);
    this.smartphoneService.ajouterSmartphone(this.newSmartphone);
    this.message = 'Smartphone ' + this.newSmartphone.modele + ' ajouté avec succès !';
  }
}
