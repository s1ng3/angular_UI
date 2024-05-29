import { Component, OnInit } from '@angular/core';
import { Angajat } from '../../../models/angajat.model';
import { AngajatiService } from '../../../services/angajati.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports : [CommonModule],
  selector: 'app-angajati-list',
  templateUrl: './angajati-list.component.html',
  styleUrl: './angajati-list.component.css'
})
export class AngajatiListComponent {

  angajati: Angajat[] = [];

  constructor(private serviciuAngajati: AngajatiService){

  }

  ngOnInit(): void {
      this.serviciuAngajati.getAllAngajati()
      .subscribe(
        {
          next:(angajati) => {
            this.angajati = angajati;
          },
          error:(response)=> {console.log(response);}
        }
      )
  }
}