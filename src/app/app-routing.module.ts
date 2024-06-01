import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StripeDonationComponent } from './shared/stripe-donation/stripe-donation.component';
import { HomeComponent } from './crezco-foundation-web-site/home/home.component';

const routes: Routes = [
  {path: 'stripe-donation', component: StripeDonationComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
