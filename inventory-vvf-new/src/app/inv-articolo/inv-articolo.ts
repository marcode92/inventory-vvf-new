import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceInventory } from '../service/service-inventory';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inv-articolo',
  imports: [MatButtonModule, ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
    MatSelectModule, MatSnackBarModule],
  templateUrl: './inv-articolo.html',
  styleUrl: './inv-articolo.scss',
})
export class InvArticolo {
     
  get tecnCtrl(): FormArray<FormControl> {
  return this.assetModule.controls.tecn;
}

nomeModello='fujitsu 33px gt52o'
qty='30'
assetModule = new FormGroup({
  mod_sel: new FormControl('prova model'),
  asset_reg: new FormControl(''),
  num_inv: new FormControl(''),
  seriale: new FormControl(''),
  tecn: new FormArray<FormControl>([])
})

  constructor(private serviceInventory: ServiceInventory,
    ) {}
   

  ngOnInit(){
    const backEnd = ["1","2","3"]

    backEnd.forEach(element => {
      this.tecnCtrl.push(this.createField('test'))
    });
  }

   createField(nomeCampo?: string): FormControl {
    return new FormControl(nomeCampo,Validators.required)
    }
}
