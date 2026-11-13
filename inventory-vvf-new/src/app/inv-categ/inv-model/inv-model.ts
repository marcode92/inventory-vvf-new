import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Fields, TipoCampo } from '../../yaml/model';
import { ServiceInventory } from '../../service/service-inventory';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-inv-model',
  imports: [ MatButtonModule, ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
    MatSelectModule, MatSnackBarModule, MatDividerModule, MatSlideToggle],
  templateUrl: './inv-model.html',
  styleUrl: './inv-model.scss',
})
export class InvModel {
  error: string | null = null;  
  
  get tecnCtrl(): FormArray<FormGroup> {
    return this.assetModule.controls.tecn;
  }
 readonly TipoCampo = TipoCampo;
  tipi: TipoCampo[] = Object.values(TipoCampo);
nomeModello='fujitsu 33px gt52o'
assetModule = new FormGroup({
  model_name: new FormControl('model_name'),
  tecn:  new FormArray<FormGroup>([])
})

  constructor(private serviceInventory: ServiceInventory, private snackBar: MatSnackBar
    ) {}
   

  ngOnInit(){
    const backEnd = ["1","2","3"]

    backEnd.forEach(element => {
      this.tecnCtrl.push(this.createField(''))
    });
  }

    createField(nomeCampo?: string, tipoCampo?: string | undefined, value?: string | boolean | number): FormGroup {
    return new FormGroup({
      nome_campo: new FormControl(nomeCampo, Validators.required),
      tipo_campo: new FormControl(tipoCampo, Validators.required),
        value: new FormControl(value, Validators.required),
    })
  }

    removeRow(index: number) {
    if (this.tecnCtrl.length > 1)
      this.tecnCtrl.removeAt(index);
    else {
      this.error = "Minimo numero righe 1"
      this.snackBar.open(this.error)
    }
  }

  addRow() {
    this.tecnCtrl.push([this.createField(),this.createField(),this.createField(),this.createField(),this.createField()])
  }
  
  }
