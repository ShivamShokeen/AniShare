import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WholesellerPageRoutingModule } from './wholeseller-routing.module';

import { WholesellerPage } from './wholeseller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WholesellerPageRoutingModule
  ],
  declarations: [WholesellerPage]
})
export class WholesellerPageModule {}
