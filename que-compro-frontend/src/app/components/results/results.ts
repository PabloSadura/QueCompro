import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../services/search.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './results.html',
})
export class ResultsComponent {
  @Input() results: Product[] = [];
  @Input() loading: boolean = false;
  @Input() status : string = '';
}
