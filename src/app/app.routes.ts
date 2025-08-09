import { Routes } from '@angular/router';
import { endpoints } from '../assets/constants/endpoint';


export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: endpoints.servicesList.indianPropertyLegalServices,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.adjudicationNotaryServices,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.workInjuryCompensationAssistance,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.crossBorderLegalChallenges,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.migrantWorkerSafetyRepatriation,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.businessRegistrationCertification,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.consumerProtectionServices,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.arbitrationMediationServices,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.familyLawSuccession,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: endpoints.servicesList.intellectualPropertyRights,
        loadComponent: () => import('./pages/firm-service/firm-service.component').then((c) => c.FirmServiceComponent),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
