import { Component, Input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchEvent, Product } from '../../interfaces/interfaces';
import { ProductService } from '../../services/product.service';

type ModalSection = 'features' | 'pros' | 'cons';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardsComponent {
  private productService = inject(ProductService);

  // --- ✅ INPUTS MÁS EXPLÍCITOS Y ROBUSTOS ---
  @Input() products: Product[] | undefined | null = [];
  @Input() collectionId: string | undefined | null = '';
  @Input() recommendation: string | undefined | null = '';
  
  @Input() loading: boolean = false;
  @Input() status: string = '';

  // El resto de la lógica del modal se mantiene igual
  isModalOpen = signal(false);
  selectedProductForModal = signal<Product | null>(null);
  isModalLoading = signal(false);
  currentImageIndex = signal(0);
  openSection = signal<ModalSection | null>('features');

  openQuickViewModal(product: Product): void {
    this.isModalOpen.set(true);
    this.isModalLoading.set(true);
    this.selectedProductForModal.set(product);
    this.currentImageIndex.set(0);
    this.openSection.set('features');
    
    // ✅ CORRECCIÓN: Ahora usamos el Input 'collectionId' directamente.
    // Es mucho más seguro y ya no puede ser nulo si se pasa correctamente.
    const collectionId = this.collectionId;
    
    if (!collectionId) {
      console.error("Error: No se proporcionó un ID de colección al componente.");
      this.isModalLoading.set(false);
      return;
    }

    this.productService.getProductById(collectionId, product.product_id?.toString()|| '').subscribe({
      next: (fullProduct) => {
        this.selectedProductForModal.set(fullProduct);
        this.isModalLoading.set(false);
      },
      error: (err) => {
        console.error("Error al buscar los detalles del producto:", err);
        this.isModalLoading.set(false);
      }
    });
  }

closeModal(): void {
    this.isModalOpen.set(false);
  }

  // --- El resto de tus métodos para la UI del modal ---
  nextImage(thumbnails: string[] | undefined) {
    if (!thumbnails || thumbnails.length === 0) return;
    this.currentImageIndex.update(index => (index + 1) % thumbnails.length);
  }

  prevImage(thumbnails: string[] | undefined) {
    if (!thumbnails || thumbnails.length === 0) return;
    this.currentImageIndex.update(index => (index - 1 + thumbnails.length) % thumbnails.length);
  }

  toggleSection(sectionId: ModalSection): void {
    this.openSection.update(current => current === sectionId ? null : sectionId);
  }
}