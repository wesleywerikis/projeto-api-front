import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {

  customer = new Customer();

  btnRegister: boolean = true;

  table:boolean = true;

  customers: Customer[] = [];

  constructor(private service: CustomerService) {}

  select(): void {
    this.service.select()
    .subscribe(retorno => this.customers = retorno);
  }

  // · Method register
  register():void{
    this.service.register(this.customer)
    .subscribe(retorno => {

      // · Register new customer in vector
      this.customers.push(retorno);

      // · Clear form
      this.customer = new Customer();

      // · Message
      alert('Customer registered successfully!');
    });
  }

  // · Method select a specific customer
   selecCustomer(position:number):void{

    // · Selec customer in vector
    this.customer = this.customers[position];

    // · Button visibility
    this.btnRegister =  false;

    // · Tablle visibility
    this.table = false;

   }

   // · Method to edit customers
   edit():void{

    this.service.edit(this.customer)
    .subscribe(retorno => {

      // Get position of the vector where the customer is
      let position = this.customers.findIndex(obj => {
        return obj.code == retorno.code;
      });

      // · Change customer data in the vector
      this.customers[position] = retorno;

      // · Clear form
      this.customer = new Customer();

      // · Button visibility
      this.btnRegister = true;

      // · Tablle visibility
      this.table = true;

      // · Message
      alert('Client changed successfully!');

    });
   }

  // · Method to remove customers
  remove():void{

    this.service.remove(this.customer.code)
    .subscribe(retorno => {

      // Get position of the vector where the customer is
      let position = this.customers.findIndex(obj => {
        return obj.code == this.customer.code;
      });

      // · Remove customer the vector
      this.customers.splice(position, 1);

      // · Clear form
      this.customer = new Customer();

      // · Button visibility
      this.btnRegister = true;

      // · Tablle visibility
      this.table = true;

      // · Message
      alert('Client deleted successfully!');

    });
   }

  cancel():void{

    // · Clear form
    this.customer = new Customer();

    // · Button visibility
    this.btnRegister = true;

    // · Tablle visibility
    this.table = true;
  }

  ngOnInit() {
    this.select();
  }
}
