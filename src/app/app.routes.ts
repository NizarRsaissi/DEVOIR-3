import { Routes } from '@angular/router';
import { Smartphones } from './smartphones/smartphones';
import { AddSmartphone } from './add-smartphone/add-smartphone';
import { UpdateSmartphone } from './update-smartphone/update-smartphone';
import { RechercheParStockage } from './recherche-par-stockage/recherche-par-stockage';

export const routes: Routes = [
  { path: 'smartphones', component: Smartphones },
  { path: 'add-smartphone', component: AddSmartphone },
  { path: 'updateSmartphone/:id', component: UpdateSmartphone },
  { path: "rechercheParStockage", component: RechercheParStockage },
  { path: '', redirectTo: 'smartphones', pathMatch: 'full' }
];
