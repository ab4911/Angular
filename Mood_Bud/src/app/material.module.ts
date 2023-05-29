import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    FormsModule,
    MatExpansionModule
  ],
})
export class MaterialModule {}
