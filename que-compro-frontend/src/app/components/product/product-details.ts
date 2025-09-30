import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../interfaces/interfaces'; // Ajusta la ruta
import { ProductService } from '../../services/product.service'; // Ajusta la ruta

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html', // Corregí el nombre del template
  styleUrls: ['./product-detail.scss']    // Corregí el nombre del estilo
})
export class ProductDetailComponent implements OnInit {
  
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  producto$: Observable<Product | undefined> | undefined;
  error: string | null = null;

  ngOnInit(): void {
    // Extraemos ambos parámetros de la URL
    const collectionId = this.route.snapshot.paramMap.get('collectionId');
    const productId = this.route.snapshot.paramMap.get('productId');
    
    if (collectionId && productId) {
      this.producto$ = this.productService.getProductById(collectionId, productId).pipe(
        catchError(err => {
          console.error('Error fetching product:', err);
          this.error = 'No se pudo cargar el producto. Intente más tarde.';
          return of(undefined);
        })
      );
    } else {
      this.error = 'Faltan los IDs para buscar el producto.';
    }
  }
}