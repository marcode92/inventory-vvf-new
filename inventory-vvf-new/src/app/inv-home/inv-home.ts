import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inv-home',
  imports: [RouterLink, MatIconModule, MatToolbar],
  templateUrl: './inv-home.html',
  styleUrl: './inv-home.scss',
})
export class InvHome {}
