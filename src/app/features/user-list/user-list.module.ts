import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatTableModule, MatButtonModule, MatIconModule, MatCardModule];

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule, ...MATERIAL_MODULES],
})
export class UserListModule {}
