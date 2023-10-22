import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaconductoresPageRoutingModule } from './listaconductores-routing.module';

import { ListaconductoresPage } from './listaconductores.page';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaconductoresPageRoutingModule,
    [MatProgressBarModule],
    [MatButtonModule, MatDividerModule, MatIconModule],
    
  ],
  declarations: [ListaconductoresPage]
})
export class ListaconductoresPageModule {}
