import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEvent } from '../../interfaces/interfaces';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardsComponent {
  @Input() shopping_results: SearchEvent | null = null; // 👈 recibe los JSON
  @Input() loading: boolean = false;
  @Input() status: string = '';
}
