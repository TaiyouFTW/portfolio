import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExampleGuard } from './_shared/guards/example.guard';
import { environment } from './../environments/environment';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: '**', component: ErrorComponent }
];

const routesDev: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'pdf', component: PdfComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production ? routes : routesDev)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
