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

  customers: Customer[] = [];

  constructor(private service: CustomerService) {}

  select(): void {
    this.service.select()
    .subscribe(retorno => this.customers = retorno);
  }

  ngOnInit() {
    this.select();
  }
}
