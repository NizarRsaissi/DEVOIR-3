import { Routes } from '@angular/router';
import { Smartphones } from './smartphones/smartphones';
import { AddSmartphone } from './add-smartphone/add-smartphone';
import { UpdateSmartphone } from './update-smartphone/update-smartphone';

export const routes: Routes = [
  { path: 'smartphones', component: Smartphones },
  { path: 'add-smartphone', component: AddSmartphone },
  { path: 'updateSmartphone/:id', component: UpdateSmartphone },
  { path: '', redirectTo: 'smartphones', pathMatch: 'full' }
];
