import { Routes } from '@angular/router';
import { Produitts } from './produitts/produitts';
import { AddProduittComponent } from './add-produit/add-produit';

export const routes: Routes = [
    { path: "produitts", component: Produitts},
    {path: "add-produitts", component : AddProduittComponent},
    {path: "", redirectTo: "produitts", pathMatch: "full"}


  ];