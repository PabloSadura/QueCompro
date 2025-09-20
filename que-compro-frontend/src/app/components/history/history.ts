import { Component, OnInit } from '@angular/core';
import { HistoryService, SearchHistoryItem } from '../../services/history.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class HistoryComponent implements OnInit {
  history: SearchHistoryItem[] = [];
  loading = false;

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.loading = true;
    this.historyService.getHistory().subscribe({
      next: data => {
        this.history = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
