import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-produitts',
  standalone: true,
  imports: [],
  templateUrl: './produitts.html',

})
export class Produitts implements OnInit { 
  produitts : string[]; 

  
  constructor() {
    this.produitts = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];

    
    }
    ngOnInit() {
    }

}
