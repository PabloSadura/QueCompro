import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchEvent, Product } from '../../interfaces/interfaces';

// Definimos un tipo para las secciones del acordeón para más seguridad
type ModalSection = 'features' | 'pros' | 'cons';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardsComponent {
  @Input() shopping_results: SearchEvent | null = null;
  @Input() loading: boolean = false;
  @Input() status: string = '';

  // Señales para el Modal Principal
  isModalOpen = signal(false);
  selectedProductForModal = signal<Product | null>(null);

  // Señales para la Galería de Imágenes DENTRO del modal
  currentImageIndex = signal(0);
  
  // Señal para el Acordeón de Detalles DENTRO del modal
  openSection = signal<ModalSection | null>('features'); // Inicia con 'features' abierto

  openQuickViewModal(product: Product): void {
    this.selectedProductForModal.set(product);
    this.currentImageIndex.set(0); // Resetea la imagen al abrir
    this.openSection.set('features'); // Resetea la sección al abrir
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  // Métodos para el carrusel de imágenes del modal
  nextImage(thumbnails: string[] | undefined) {
    if (!thumbnails) return;
    this.currentImageIndex.update(index => (index + 1) % thumbnails.length);
  }

  prevImage(thumbnails: string[] | undefined) {
    if (!thumbnails) return;
    this.currentImageIndex.update(index => (index - 1 + thumbnails.length) % thumbnails.length);
  }

  // Método para abrir/cerrar el acordeón del modal
  toggleSection(sectionId: ModalSection): void {
    this.openSection.update(current => current === sectionId ? null : sectionId);
  }
}