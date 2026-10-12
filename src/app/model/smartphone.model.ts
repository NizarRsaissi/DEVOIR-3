import { Stockage } from "./stockage";

export class Smartphone {
    idSmartphone!: number;
    marque!: string ;
    modele!: string ;
    prix!: number ;
    dateSortie!: Date ;
    stockage!: Stockage;
}
