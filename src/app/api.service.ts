import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";
  //customers - https://api.myjson.com/bins/16gfi8?pretty=1
  apiURL: string = 'https://api.myjson.com/bins/16gfi8';
  constructor(private httpClient: HttpClient) { }
  public createCustomer(customer: Customer) { }
  public updateCustomer(customer: Customer) { }
  public deleteCustomer(id: number) { }
  public getCustomerById(id: number) { }
  public getCustomers(url?: string) { }

  public getContacts() {
    return this.httpClient.get<Customer[]>(`${this.apiURL}`);
  }
  
}
