import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InvHome } from './inv-home/inv-home';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { InvModel } from './inv-model/inv-model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, InvHome, InvModel, MatToolbar, MatIcon,  ReactiveFormsModule, CommonModule, MatTableModule,
    MatCheckboxModule, MatButtonModule, MatCardModule, MatDialogModule,
    MatFormField, MatLabel, MatIcon, MatInputModule,  CommonModule,
    MatSidenavModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
