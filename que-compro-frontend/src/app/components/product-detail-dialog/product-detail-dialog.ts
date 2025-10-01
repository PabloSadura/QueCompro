import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

// Define la interfaz de datos para la seguridad de tipos
interface DialogData {
  product: any; // Se recomienda definir una interfaz Product para mayor seguridad
  type: 'features' | 'pros' | 'cons';
}

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.html',
  styleUrls: ['./product-detail-dialog.scss'],
  // Si usas componentes standalone, importa los módulos aquí
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MaterialModule,
  ]
})
export class ProductDetailDialogComponent {
  
  // Tipado estricto de los datos inyectados
  public data: DialogData;

  constructor(
    // MatDialogRef permite cerrar el diálogo
    public dialogRef: MatDialogRef<ProductDetailDialogComponent>,
    
    // Inyecta los datos pasados desde el componente de resultados
    @Inject(MAT_DIALOG_DATA) data: DialogData
  ) {
    this.data = data;
  }

  /** Determina el título del diálogo basado en el tipo de dato */
  get dialogTitle(): string {
    switch (this.data.type) {
      case 'features': return 'Características del Producto';
      case 'pros': return 'Ventajas (Pros)';
      case 'cons': return 'Desventajas (Contras)';
      default: return 'Detalles';
    }
  }

  /** Retorna el array de datos a listar (features, pros, o contras) */
  get detailList(): any[] {
    const p = this.data.product;
    switch (this.data.type) {
      case 'features': return p.immersive_details?.about_the_product?.features || [];
      case 'pros': return p.pros || [];
      case 'cons': return p.contras || [];
      default: return [];
    }
  }

  /** Determina el ícono y color basado en el tipo (para Pros/Contras) */
  get iconClass(): { name: string, color: string } {
    switch (this.data.type) {
      case 'pros': return { name: 'check_circle', color: 'text-success' };
      case 'cons': return { name: 'cancel', color: 'text-danger' };
      default: return { name: 'info', color: 'text-primary' };
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}