import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRevuePageRoutingModule } from './detail-revue-routing.module';

import { DetailRevuePage } from './detail-revue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRevuePageRoutingModule
  ],
  declarations: [DetailRevuePage]
})
export class DetailRevuePageModule {}
