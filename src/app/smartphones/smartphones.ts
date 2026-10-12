import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-smartphones',
  templateUrl: './smartphones.html',
})
export class Smartphones implements OnInit {
  smartphones: Smartphone[] = [];

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {
    this.smartphones = this.smartphoneService.listeSmartphones();
  }

  supprimerSmartphone(smartphone: Smartphone) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.smartphoneService.supprimerSmartphone(smartphone);
    }
  }
}
