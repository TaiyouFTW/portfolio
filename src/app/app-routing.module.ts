import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExampleGuard } from './_shared/guards/example.guard';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
