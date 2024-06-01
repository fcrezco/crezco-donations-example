import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeDonationComponent } from "../../shared/stripe-donation/stripe-donation.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, StripeDonationComponent, RouterLink]
})
export class HomeComponent {

}
