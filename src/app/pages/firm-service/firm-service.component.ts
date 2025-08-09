import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { endpoints } from '../../../assets/constants/endpoint';
import { FirmService, servicesList } from './service.data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-firm-service',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './firm-service.component.html',
  styleUrl: './firm-service.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FirmServiceComponent implements OnInit{

  selectedServiceKey = 'indianPropertyLegalServices';
  endpoints = endpoints;

  constructor(private route: Router) {
    this.selectedServiceKey = route.url as string;
  }

  services: FirmService[] = [];

  ngOnInit(): void {
    this.services = servicesList;
  }


  get selectedService(): FirmService | undefined {
    return this.services.find(s => this.selectedServiceKey.includes(s.key));
  }
}
