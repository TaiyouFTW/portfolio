import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  exports: [
    FontAwesomeModule
  ]
})
export class FontawesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
