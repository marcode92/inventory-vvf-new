import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Categoria } from '../../yaml/inventory-yaml';
import { MatChipInput, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ENTER, SPACE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-inv-add-categ',
  imports: [MatIcon,MatDialogModule,ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
     MatSelectModule, MatButtonModule, MatChipsModule ],
  templateUrl: './inv-add-categ.html',
  styleUrl: './inv-add-categ.scss',
})
export class InvAddCateg {
    @Output() categoryToAdd = new EventEmitter<Categoria>();

  sottocategoria: string[] = [];
  separatorKeys = [SPACE];

   addCategoryCtrl = new FormGroup({
    categoria: new FormControl(''),
    sottocategoria: new FormControl('')
  })

  ngOnInit(){

  }

  prepareCategory(){
    this.categoryToAdd.emit({
      nome_categoria:this.addCategoryCtrl.get('categoria')?.value || ''
    })
  }

  aggiungi(event: MatChipInputEvent){
    const valore = event.value.trim();

    if(valore){
      this.sottocategoria.push(valore)
    }
    event.chipInput?.clear();
  }

  rimuovi(cat: string){
    this.sottocategoria = this.sottocategoria.filter(x => x !== cat)
  }
  
}
