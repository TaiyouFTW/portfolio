import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {MatDividerModule} from '@angular/material/divider';

// Font Awesome imports
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { PersonalStatsComponent } from './components/personal-stats/personal-stats.component';
import { WorkStatsComponent } from './components/work-stats/work-stats.component';


@NgModule({
  declarations: [MainComponent, PersonalStatsComponent, WorkStatsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    FontAwesomeModule
  ]
})
export class HomeModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
