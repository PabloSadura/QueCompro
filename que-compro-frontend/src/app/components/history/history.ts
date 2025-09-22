import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { Product } from '../../services/search.service';
import { ResultsComponent } from '../results/results';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface HistoryEntry {
  query: string;
  result: Product[];
  createdAt: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ResultsComponent, CommonModule,FormsModule],
  templateUrl: './history.html',
})
export class HistoryComponent implements OnInit {
  history: HistoryEntry[] = [];
  loading = true;

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.historyService.getHistory().subscribe({
      next: (data) => {
        this.history = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
