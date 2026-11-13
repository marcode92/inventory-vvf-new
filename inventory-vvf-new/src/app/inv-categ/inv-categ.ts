import { FocusMonitor } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InvAddCateg } from './inv-add-categ/inv-add-categ';
import { ServiceInventory } from '../service/service-inventory';
import { filter, of, switchMap, tap } from 'rxjs';
import { disabled } from '@angular/forms/signals';
import { Categoria } from '../yaml/inventory-yaml';

@Component({
  selector: 'app-inv-categ',
  imports: [MatIcon, MatDialogModule, ReactiveFormsModule,
    MatFormField, MatInputModule, MatIconModule, CommonModule,
    MatSelectModule, MatButtonModule, InvAddCateg],
  templateUrl: './inv-categ.html',
  styleUrl: './inv-categ.scss',
})
export class InvCateg {
  showaddcategory: boolean = false;
  listCatName = new Map<string, string>
  listsottoCatName = new Map<string, string>
  categoryCtrl = new FormGroup({
    nomeCat: new FormControl(''),
    nomesottoCat: new FormControl({ value: '', disabled: true })
  })

  constructor(private dialogRef: MatDialogRef<InvCateg>, private serviceInventory: ServiceInventory) { }
  @ViewChild(InvAddCateg) invAddCateg!: InvAddCateg;

  ngOnInit() {
    this.serviceInventory.getCategoryList().subscribe(x => {
      x.forEach(cat => {
        if (cat.id)
          this.listCatName.set(cat.id, cat.nome_categoria)
      })
    })

    this.categoryCtrl.get('nomeCat')?.valueChanges.pipe(
      tap(() => {
        this.categoryCtrl.controls.nomesottoCat.disable();
        this.categoryCtrl.controls.nomesottoCat.reset()
        this.listsottoCatName.clear()
      }),
      switchMap(id =>
        id ? this.serviceInventory.getSottoCategoryList(id) : of([]))).subscribe(x => {
          if (x.length) {
            this.categoryCtrl.get('nomesottoCat')?.enable();
            x.forEach(cat => {
              if (cat.id)
                this.listsottoCatName.set(cat.id, cat.nome_sottocategoria)
            })
          }
        })
  }

  save() {
    this.dialogRef.close(true);
  }

  add() {
    this.showaddcategory = !this.showaddcategory
  }

  getNewCategory() {
    this.invAddCateg.prepareCategory()
    console.log("test")
  }

  saveNewCategory(categoria: Categoria){
    console.log(categoria)
    this.serviceInventory.createCategoryList(categoria).subscribe(_ => {
      this.dialogRef.close()

    });
  }
}
