import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule];

@NgModule({
  declarations: [AddUserComponent],
  imports: [CommonModule, AddUserRoutingModule, FormsModule, ...MATERIAL_MODULES],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class AddUserModule {}
