import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomePageExtrasComponent } from '../../components/home-page-extras/home-page-extras.component';
import { endpoints } from '../../../assets/constants/endpoint';
export interface Service {
  icon: string;
  alt: string;
  title: string;
  tagline: string;
  description: string;
  link: string;
  width?: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HomePageExtrasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


services: Service[] = [
  {
    icon: 'assets/images/nri-service.png',
    link: endpoints.servicesList.indianPropertyLegalServices,
    alt: 'Indian Property Legal Services for NRIs',
    title: 'Indian Property Legal Services for NRIs',
    tagline: 'End-to-end property legal solutions for NRIs across Singapore, Malaysia, Indonesia, and India.',
    description: 'We handle property verification, title search, sale & purchase, Power of Attorney, and inheritance matters—remotely, without you having to travel.',
    
  },
  {
    icon: 'assets/images/notary-service.png',
    link: endpoints.servicesList.adjudicationNotaryServices,
    alt: 'Adjudication & Notary Services',
    title: 'Adjudication & Notary Services',
    tagline: 'Efficient, reliable certification and legalization of documents.',
    description: 'We provide adjudication, notarization, affidavit preparation, attestation, and due diligence for property, business, and personal matters.',
    
  },
  {
    icon: 'assets/images/injury-compensation-service.png',
    link: endpoints.servicesList.workInjuryCompensationAssistance,
    alt: 'Work Injury Compensation Assistance',
    title: 'Work Injury Compensation Assistance',
    tagline: 'Helping Indian workers secure fair workplace injury claims.',
    description: 'We assist migrant workers in filing timely and accurate work injury claims, medical board coordination, and appeals for denied claims.',
    
  },
  {
    icon: 'assets/images/cross-border-legal-challenges.png',
    link: endpoints.servicesList.crossBorderLegalChallenges,
    alt: 'Cross-Border Legal Challenges',
    title: 'Cross-Border Legal Challenges',
    tagline: 'Specialized legal support for matters spanning multiple countries.',
    description: 'From property disputes to migrant worker issues, we manage your cross-border legal needs across Singapore, Malaysia, Indonesia, and India.',
    width: '100'
  },
  {
    icon: 'assets/images/migrant-worker-safety.png',
    link: endpoints.servicesList.migrantWorkerSafetyRepatriation,
    alt: 'Migrant Worker Safety & Repatriation',
    title: 'Migrant Worker Safety & Repatriation',
    tagline: 'Protecting the rights and dignity of Indian migrant workers abroad.',
    description: 'We provide legal help for unsafe work conditions, wage disputes, injury compensation, and safe repatriation to India.',
    
  },
  {
    icon: 'assets/images/registration-service.png',
    link: endpoints.servicesList.businessRegistrationCertification,
    alt: 'Business Registration & Certification',
    title: 'Business Registration & Certification',
    tagline: 'Complete legal setup & compliance for your business.',
    description: 'From company registration and trademark filing to ISO certification and GST compliance—we handle it all for NRIs and SMEs.',

    width: '60'
  },
  {
    icon: 'assets/images/consumer-protection-service.png',
    link: endpoints.servicesList.consumerProtectionServices,
    alt: 'Consumer Protection Services',
    title: 'Consumer Protection Services',
    tagline: 'Safeguarding your rights as a consumer, locally and across borders.',
    description: 'We address disputes over defective goods, unfair trade practices, e-commerce fraud, and representation before consumer forums.',
    
  },
  {
    icon: 'assets/images/aribitration-service.png',
    link: endpoints.servicesList.arbitrationMediationServices,
    alt: 'Arbitration & Mediation Services',
    title: 'Arbitration & Mediation Services',
    tagline: 'Resolve disputes efficiently without lengthy court battles.',
    description: 'Our skilled mediators and arbitrators handle commercial, property, and family disputes with speed, confidentiality, and fairness.',
    
  },
  {
    icon: 'assets/images/family-law-succession-service.png',
    link: endpoints.servicesList.familyLawSuccession,
    alt: 'Family Law & Succession Planning',
    title: 'Family Law & Succession Planning',
    tagline: 'Compassionate legal support for cross-border families.',
    description: 'We assist with divorce, custody, inheritance, and will drafting—ensuring smooth resolution and protection of your legacy.',
    
  },
  {
    icon: 'assets/images/property-right-service.png',
    link: endpoints.servicesList.intellectualPropertyRights,
    alt: 'Intellectual Property Rights',
    title: 'Intellectual Property Rights',
    tagline: 'Protecting your ideas, creations, and competitive advantage.',
    description: 'From trademark and patent filing to copyright and IP enforcement—we secure your intellectual assets across jurisdictions.',
    
  }
];


}
