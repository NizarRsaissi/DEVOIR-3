import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-smartphone',
  styles: '',
  templateUrl: './update-smartphone.html',
})
export class UpdateSmartphone implements OnInit {
  currentSmartphone = new Smartphone();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private smartphoneService: SmartphoneService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentSmartphone = this.smartphoneService.consulterSmartphone(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentSmartphone);
  }

  setDateSortie(value: string, smartphone: Smartphone): void {
    smartphone.dateSortie = value ? new Date(value) : new Date();
  }

  updateSmartphone() {
    this.smartphoneService.updateSmartphone(this.currentSmartphone);
    this.router.navigate(['smartphones']);
  }
}
