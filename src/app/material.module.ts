import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
<<<<<<< HEAD
  MatRadioModule,
  MatProgressSpinnerModule
=======
  MatRadioModule
>>>>>>> edfb54a645a354546c104088476f637473519069
} from '@angular/material';

const modules =  [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
<<<<<<< HEAD
  MatRadioModule,
  MatProgressSpinnerModule
=======
  MatRadioModule
>>>>>>> edfb54a645a354546c104088476f637473519069
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModule {}
