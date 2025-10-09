import { Component, Input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchEvent, Product } from '../../interfaces/interfaces';
import { ProductService } from '../../services/product.service'; // Asegúrate de importar tu servicio

// Definimos un tipo para que el código sea más seguro
type ModalSection = 'features' | 'pros' | 'cons';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardsComponent {
  // Inyectamos el servicio para usarlo
  private productService = inject(ProductService);

  @Input() shopping_results: SearchEvent | null = null;
  @Input() loading: boolean = false;
  @Input() status: string = '';

  // Señales para el Modal
  isModalOpen = signal(false);
  selectedProductForModal = signal<Product | null>(null);
  isModalLoading = signal(false); // Para el spinner DENTRO del modal

  // Señales para la UI del Modal
  currentImageIndex = signal(0);
  openSection = signal<ModalSection | null>('features');

  // --- ESTE ES EL MÉTODO CLAVE ---
  openQuickViewModal(product: Product): void {
    // 1. Abrimos el modal inmediatamente
    this.isModalOpen.set(true);
    // 2. Activamos el spinner de carga
    this.isModalLoading.set(true);
    // 3. Mostramos la información básica del producto que ya tenemos
    this.selectedProductForModal.set(product);
    // 4. Reseteamos la UI del modal a su estado inicial
    this.currentImageIndex.set(0);
    this.openSection.set('features');
    console.log(this.shopping_results?.id);
    

    const collectionId = this.shopping_results?.id;
    if (!collectionId) {
      console.error("Error: No se encontró el ID de la colección para buscar los detalles.");
      this.isModalLoading.set(false);
      return;
    }

    // 5. Llamamos al servicio para obtener los detalles completos (el backend hace el resto)
    this.productService.getProductById(collectionId, product.product_id?.toString() || '').subscribe({
      next: (fullProduct) => {
        // 6. Cuando llegan los datos, actualizamos el modal con la información completa
        this.selectedProductForModal.set(fullProduct);
        // 7. Ocultamos el spinner
        this.isModalLoading.set(false);
      },
      error: (err) => {
        console.error("Error al buscar los detalles del producto:", err);
        // 8. Ocultamos el spinner incluso si hay un error
        this.isModalLoading.set(false);
        // (Opcional) Podrías añadir una señal de error para mostrar un mensaje en el modal
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