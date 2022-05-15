import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

=======
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d

@NgModule({
  exports: [
      MatSidenavModule,
      MatToolbarModule,
      MatButtonModule,
<<<<<<< HEAD
      MatProgressSpinnerModule,
      MatGridListModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
=======
      MatIconModule,
      MatListModule,
      MatCardModule,
>>>>>>> d1d73b43475580ecd2c5269b1825eaae6b9a969d
  ]
})
export class MaterialModule { }
