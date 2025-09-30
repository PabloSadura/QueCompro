import { Component, inject, signal } from '@angular/core';
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
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  // Signal de error
  error = signal<string | null>(null);

  // Signal del producto
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

}
