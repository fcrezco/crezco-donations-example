import { donationDetails } from './../intefaces/donationDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donor } from '../intefaces/donor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeDonationService {

  baseURL = 'https://crezcofoundation.org/api';

  constructor(private httpClient: HttpClient) { }

  createDonor(donor: Donor): Observable<Donor> {
    return this.httpClient.post<Donor>(`${this.baseURL}/Payment/customer`, donor)
  }
//
  createPrice(price: donationDetails): Observable<donationDetails> {
     console.log(price);
    return this.httpClient.post<donationDetails>(`${this.baseURL}/Payment/price`, price)
  }


  testtingService(price: donationDetails){
    console.log(price);
    return 'price';
  }
}
