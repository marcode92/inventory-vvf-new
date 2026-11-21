import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Categoria, Fields, Model, Sottocategoria, TipoCampo } from '../../yaml/inventory-yaml';
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
  @Input() categoriaselez?:string;

  error: string | null = null;  
  tipi: TipoCampo[] = Object.values(TipoCampo);
  obj_model: Model = {};

  readonly TipoCampo = TipoCampo;
  
  get tecnCtrl(): FormArray<FormGroup> {
    return this.assetModel.controls.tecn;
  }
  
assetModel = new FormGroup({
  nome_modello: new FormControl('',[Validators.required]),
  categoria: new FormControl(''),
  id_categoria: new FormControl(''),
  sottocategoria: new FormControl(''),
  id_sottocategoria: new FormControl(''),
  tecn:  new FormArray<FormGroup>([])
})

  constructor(private serviceInventory: ServiceInventory, private snackBar: MatSnackBar
    ) {}
   

  ngOnInit(){
    const data = history.state;
    this.serviceInventory.getCategory(data.categoria).subscribe(c => {
      console.log(data)
      this.assetModel.patchValue({
      categoria: c.nome_categoria,
      id_categoria: c.id
    });
    })

    if(data.sottocategoria){
      this.serviceInventory.getSottoCategory(data.categoria,data.sottocategoria).subscribe(s =>{
         this.assetModel.patchValue({
      sottocategoria: s.nome_sottocategoria,
      id_sottocategoria: s.id
    });
      })
    }
    
     this.tecnCtrl.push(this.createField());
     this.tecnCtrl.push(this.createField());
     this.tecnCtrl.push(this.createField());

  }

    createField(nomeCampo?: string, tipoCampo?: string | undefined, value?: string | boolean | number): FormGroup {
    return new FormGroup({
      nome_campo: new FormControl(nomeCampo, [Validators.required]),
      tipo_campo: new FormControl(tipoCampo, [Validators.required]),
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
    this.tecnCtrl.push([this.createField()])
  }

  
  save() {
    const nomeModello = (this.assetModel.get('nome_modello')?.value)?.toLowerCase()
    this.serviceInventory.getModelbyName(nomeModello || '')
    .subscribe(data => {
      if (data !== null) {
        this.assetModel.get('nome_modello')?.setErrors({
          alreadyExists: true
        })
      } else {
        this.assetModel.markAllAsTouched();
        if(this.assetModel.valid){
          const fieldsModelCtrl = this.assetModel.get('tecn') as FormArray;
          let list_fields: Fields[] = [];

          fieldsModelCtrl.controls.forEach((x, i) => {
            list_fields[i] = {
              nome_campo: x.get('nome_campo')?.value || '',
              tipo_campo: x.get('tipo_campo')?.value || '',
            }
          })
          if(this.assetModel.get('id_sottocategoria')?.value)
          this.obj_model = {
            nome_modello: this.assetModel.get('nome_modello')?.value || '',
            id_categoria: this.assetModel.get('id_categoria')?.value || '',
            id_sottocategoria: this.assetModel.get('id_sottocategoria')?.value || '',
            campi: list_fields
          }
          else {
           this.obj_model = {
            nome_modello: this.assetModel.get('nome_modello')?.value || '',
            id_categoria: this.assetModel.get('id_categoria')?.value || '',
            campi: list_fields
          } 
          }

          this.serviceInventory.createModel(this.obj_model).subscribe(
            {
              next: () => {
                this.snackBar.open("saved")
              },
              error: () => {
                this.error = "errore durante il salvataggio"
                this.snackBar.open(this.error)
              }
            })
        }}
      })
  }
 }
