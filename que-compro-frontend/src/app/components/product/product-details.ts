import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '../../interfaces/interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  // Señal de error
  error = signal<string | null>(null);

  // Señal del producto (tu lógica original se mantiene, es perfecta)
  producto = toSignal<Product | undefined>(
    this.productService.getProductById(
      this.route.snapshot.paramMap.get('collectionId')!,
      this.route.snapshot.paramMap.get('productId')!
    ).pipe(
      catchError(err => {
        console.error('Error fetching product:', err);
        this.error.set('No se pudo cargar el producto. Intente más tarde.');
        return of(undefined);
      })
    ),
    { initialValue: undefined }
  );
  
  // ✅ Señal para controlar la imagen activa en la galería
  currentImageIndex = signal(0);
  
   nextImage(thumbnails: string[] | undefined) {
    if (!thumbnails) return;
    this.currentImageIndex.update(index => 
      (index + 1) % thumbnails.length
    );
  }

  // ✅ NUEVO: Método para ir a la imagen anterior en el carrusel
  prevImage(thumbnails: string[] | undefined) {
    if (!thumbnails) return;
    this.currentImageIndex.update(index => 
      (index - 1 + thumbnails.length) % thumbnails.length
    );
  }
}