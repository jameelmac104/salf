import { endpoints } from "../../../assets/constants/endpoint";

export interface DetailItem {
  icon?: string;
  color?:string;
  title: string;
  description?: string;
}

export interface FirmService {
  key: string;
  icon: string;
  title: string;
  fullDescription: string;
  servicesInclude: DetailItem[];
  whyImportant: DetailItem[];
  commonDocuments?: DetailItem[];
  otherDetails?: DetailItem[];
  certifications?: DetailItem[];
}

export const servicesList: FirmService[] = [
  // 1. Indian Property Legal Services for NRIs
  {
    key: endpoints.servicesList.indianPropertyLegalServices,
    icon: 'assets/images/nri-service.png',
    title: 'Indian Property Legal Services for NRIs',
    fullDescription: `Managing property in India while living abroad can be challenging. At SAL, we offer end-to-end Indian property legal solutions for NRIs based in Singapore, Malaysia, Indonesia, and India. Our goal is to simplify the process and protect your interests—without the need for you to travel extensively.`,
    servicesInclude: [
      { icon: 'search', title: 'Property Verification & Title Search', description: 'Ensure your property is free from disputes, liens, and encumbrances.' },
      { icon: 'shopping_cart', title: 'Sale & Purchase Assistance', description: 'Comprehensive legal support for property transactions in India.' },
      { icon: 'assignment_ind', title: 'Power of Attorney Drafting & Registration', description: 'Legally authorize your representative with properly drafted and registered POAs.' },
      { icon: 'account_balance', title: 'Succession & Inheritance Matters', description: 'Smooth transfer of property ownership after the demise of a loved one.' }
    ],
    whyImportant: [
      { icon: 'verified', title: 'Legal Ownership & Clear Title', description: 'Properly documented property ensures unquestionable ownership. Without title deeds, rights can be disputed.' },
      { icon: 'security', title: 'Avoid Property Fraud', description: 'Verified and registered documents protect your assets from fraudulent sales and forged documents.' },
      { icon: 'swap_horiz', title: 'Smooth Property Sale or Transfer', description: 'Documentation like title deeds, mutation records, and NOC certificates are mandatory for sales or mortgages.' },
      { icon: 'family_restroom', title: 'Inheritance & Succession', description: 'Clear legal documents ensure smooth transfer after a loved one’s demise.' },
      { icon: 'gavel', title: 'Regulatory Compliance', description: 'Proper stamp duty payment and adjudication ensure recognition by courts and authorities.' }
    ],
    commonDocuments: [
      { icon: 'description', title: 'Sale Deed / Title Deed' },
      { icon: 'description', title: 'Encumbrance Certificate' },
      { icon: 'description', title: 'Mutation Records' },
      { icon: 'description', title: 'Power of Attorney' },
      { icon: 'description', title: 'Property Tax Receipts' },
      { icon: 'description', title: 'Succession or Legal Heir Certificate (in inheritance cases)' }
    ]
  },

  // 2. Adjudication & Notary Services
  {
    key: endpoints.servicesList.adjudicationNotaryServices,
    icon: 'assets/images/notary-service.png',
    title: 'Adjudication & Notary Services',
    fullDescription: `Efficient, reliable legal documentation and certification for clients across Singapore, Malaysia, Indonesia, and India.`,
    servicesInclude: [
      { icon: 'fact_check', title: 'Document Adjudication', description: 'Validation of property-related documents in compliance with the Indian Stamp Act.' },
      { icon: 'edit_document', title: 'Power of Attorney Notarization', description: 'Drafting and notarizing Power of Attorney documents.' },
      { icon: 'description', title: 'Affidavits & Declarations', description: 'Preparation and notarization for legal or property-related matters.' },
      { icon: 'verified_user', title: 'Document Attestation', description: 'Attesting documents for use in courts, government offices, and other authorities.' },
      { icon: 'search_off', title: 'Real Estate Due Diligence & Litigation', description: 'Investigation and representation for property-related disputes.' }
    ],
    whyImportant: [
      { icon: 'verified', title: 'Legal Validation', description: 'Ensures documents executed abroad are legally valid and enforceable in India.' },
      { icon: 'support_agent', title: 'Full Process Support', description: 'From notarization abroad to final adjudication in India.' }
    ]
  },

  // 3. Work Injury Compensation Assistance
  {
    key: endpoints.servicesList.workInjuryCompensationAssistance,
    icon: 'assets/images/injury-compensation-service.png',
    title: 'Work Injury Compensation Assistance',
    fullDescription: `Helping Indian nationals working in Singapore, Malaysia, Indonesia, or India secure rightful compensation after workplace injuries.`,
    servicesInclude: [
      { icon: 'gavel', title: 'Full Legal Support', description: 'Filing WICA/work injury claims accurately and on time.' },
      { icon: 'language', title: 'Advice in Multiple Languages', description: 'Tamil, Hindi, and English support.' },
      { icon: 'record_voice_over', title: 'Representation in Appeals', description: 'Support for disputes over compensation.' },
      { icon: 'medical_services', title: 'Medical Assessment Coordination', description: 'Guidance during medical board evaluations.' },
      { icon: 'handshake', title: 'Negotiations', description: 'Advocating with employers and insurers.' },
      { icon: 'flight_takeoff', title: 'Repatriation Assistance', description: 'Support if returning to India is necessary.' }
    ],
    whyImportant: [
      { icon: 'verified', title: 'Rightful Compensation', description: 'Ensure you receive the maximum you are entitled to.' },
      { icon: 'timer', title: 'Timely Claims', description: 'Avoid rejection caused by delays or mistakes.' },
      { icon: 'medical_information', title: 'Medical Support', description: 'Assistance during medical grading that affects payout.' },
      { icon: 'campaign', title: 'Dispute Resolution', description: 'Appeals if claims are denied or reduced.' },
      { icon: 'thumb_up', title: 'No Lengthy Court Cases', description: 'Most claims settled without court intervention.' }
    ]
  },

  // 4. Cross-Border Legal Challenges
  {
    key: endpoints.servicesList.crossBorderLegalChallenges,
    icon: 'assets/images/cross-border-legal-challenges.png',
    title: 'Cross-Border Legal Challenges',
    fullDescription: `Specialized legal solutions for Indians with matters involving Singapore, Malaysia, Indonesia, and India.`,
    servicesInclude: [
      { icon: 'public', title: 'Dual Expertise', description: 'Knowledge of Indian law and local laws of each country.' },
      { icon: 'devices', title: 'Remote Legal Support', description: 'Handle property, family, and legal matters from abroad.' },
      { icon: 'people_alt', title: 'Migrant Worker Issues', description: 'Support for unpaid wages, repatriation, and injuries.' },
      { icon: 'business_center', title: 'Cross-Border Business Services', description: 'Company incorporation, trademarks, ISO certifications.' },
      { icon: 'sync_alt', title: 'Seamless Coordination', description: 'Single point of contact across jurisdictions.' }
    ],
    whyImportant: [
      { icon: 'gavel', title: 'Different Laws', description: 'Ensure compliance in multiple jurisdictions.' },
      { icon: 'event_available', title: 'Convenience', description: 'Avoid travel and multiple law offices.' }
    ]
  },

  // 5. Migrant Worker Safety & Repatriation
  {
    key: endpoints.servicesList.migrantWorkerSafetyRepatriation,
    icon: 'assets/images/migrant-worker-safety.png',
    title: 'Migrant Worker Safety & Repatriation',
    fullDescription: `Legal support and advocacy for Indian migrant workers in ensuring rights, wages, safety, and dignified return home.`,
    servicesInclude: [
      { icon: 'security', title: 'Workplace Rights Advice', description: 'Fair treatment and safety assurance.' },
      { icon: 'attach_money', title: 'Wage Claims', description: 'Recovery of unpaid salaries.' },
      { icon: 'healing', title: 'Injury & Medical Support', description: 'Help with injury claims and medical neglect cases.' },
      { icon: 'block', title: 'Unlawful Termination Support', description: 'Action against unfair dismissals.' },
      { icon: 'flight_land', title: 'Safe Repatriation', description: 'Legal and logistical assistance to return home safely.' }
    ],
    whyImportant: [
      { icon: 'shield', title: 'Protection of Rights', description: 'Stand up against exploitation.' },
      { icon: 'gavel', title: 'Access to Justice', description: 'Legal recourse for vulnerable workers.' }
    ]
  },

  // 6. Professional Business Registration & Certification Services
  {
    key: endpoints.servicesList.businessRegistrationCertification,
    icon: 'assets/images/registration-service.png',
    title: 'Professional Business Registration & Certification Services',
    fullDescription: `End-to-end legal and regulatory support for startups, SMEs, NRIs, and established businesses.`,
    servicesInclude: [
      { icon: 'apartment', title: 'Company Registration', description: 'Fast-track incorporation in India and abroad.' },
      { icon: 'branding_watermark', title: 'Trademark Registration', description: 'Legal protection for your brand.' },
      { icon: 'restaurant', title: 'FSSAI Licensing', description: 'Mandatory for food businesses.' },
      { icon: 'receipt_long', title: 'GST Compliance & Bookkeeping', description: 'Maintain audit-ready financials.' },
      { icon: 'verified', title: 'ISO & International Certifications', description: 'From ISO 9001 to Halal certification.' }
    ],
    whyImportant: [
      { icon: 'error_outline', title: 'Avoid Delays & Rejections', description: 'Accurate and compliant submissions.' },
      { icon: 'check_circle', title: 'Meet Legal Requirements', description: 'Mandatory licenses and certifications.' },
      { icon: 'shield', title: 'Protect Brand & Assets', description: 'Trademark and DSC security.' }
    ],
    certifications: [
      { icon: 'check_circle', title: 'ISO 9001:2015 - Quality Management' },
      { icon: 'eco', title: 'ISO 14001:2015 - Environmental Management' },
      { icon: 'restaurant_menu', title: 'ISO 22000:2018 - Food Safety Management' },
      { icon: 'security', title: 'ISO 27001:2013 - Information Security' },
      { icon: 'verified', title: 'CE Marking' },
      { icon: 'factory', title: 'GMP Certification' },
      { icon: 'science', title: 'HACCP' },
      { icon: 'mosque', title: 'Halal Certification' }
    ]
  },

  // 7. Consumer Protection Services
  {
    key: endpoints.servicesList.consumerProtectionServices,
    icon: 'assets/images/consumer-protection-service.png',
    title: 'Consumer Protection Services',
    fullDescription: `Comprehensive legal assistance for consumers facing defective products, unfair practices, or cross-border e-commerce disputes.`,
    servicesInclude: [
      { icon: 'warning', title: 'Faulty Goods or Services Support', description: 'Legal action and claims.' },
      { icon: 'no_accounts', title: 'Unfair Trade Practice Resolution', description: 'Stop unethical business conduct.' },
      { icon: 'shopping_bag', title: 'Cross-Border E-commerce Dispute Support', description: 'Refunds and compensation claims.' },
      { icon: 'gavel', title: 'Representation in Consumer Forums', description: 'From drafting complaints to hearings.' }
    ],
    whyImportant: [
      { icon: 'support_agent', title: 'Protect Consumer Rights', description: 'Stand up to unfair practices.' },
      { icon: 'public', title: 'Cross-Border Help', description: 'Even when vendors are abroad.' }
    ]
  },

  // 8. Arbitration & Mediation Services
  {
    key: endpoints.servicesList.arbitrationMediationServices,
    icon: 'assets/images/aribitration-service.png',
    title: 'Arbitration & Mediation Services',
    fullDescription: `Resolve disputes quickly, cost-effectively, and confidentially without long court battles.`,
    servicesInclude: [
      { icon: 'gavel', title: 'Commercial Contract Disputes' },
      { icon: 'home', title: 'Property & Real Estate Disputes' },
      { icon: 'people', title: 'Family & Succession Conflicts' },
      { icon: 'work', title: 'Employment & Workplace Disputes' },
      { icon: 'public', title: 'Cross-Border Settlement Facilitation' }
    ],
    whyImportant: [
      { icon: 'timer', title: 'Faster Resolutions', description: 'Weeks or months instead of years.' },
      { icon: 'monetization_on', title: 'Cost-Effective', description: 'Avoid heavy legal and court fees.' },
      { icon: 'visibility_off', title: 'Confidential', description: 'Protect reputation and sensitive data.' }
    ]
  },

  // 9. Family Law & Succession Planning
  {
    key: endpoints.servicesList.familyLawSuccession,
    icon: 'assets/images/family-law-succession-service.png',
    title: 'Family Law & Succession Planning',
    fullDescription: `Compassionate legal support for NRIs and cross-border families covering divorce, custody, maintenance, and inheritance.`,
    servicesInclude: [
      { icon: 'divorce', title: 'Divorce & Maintenance Assistance' },
      { icon: 'child_care', title: 'Child Custody & Visitation Arrangements' },
      { icon: 'account_balance_wallet', title: 'Succession & Inheritance Planning' },
      { icon: 'description', title: 'Will Drafting & Probate' },
      { icon: 'supervisor_account', title: 'Guardianship Legal Advice' }
    ],
    whyImportant: [
      { icon: 'group', title: 'Protect Family Interests', description: 'Fair legal protection for all members.' },
      { icon: 'event_note', title: 'Plan Ahead', description: 'Avoid disputes through proper succession planning.' }
    ]
  },

  // 10. Intellectual Property Rights
  {
    key: endpoints.servicesList.intellectualPropertyRights,
    icon: 'assets/images/property-right-service.png',
    title: 'Intellectual Property Rights',
    fullDescription: `Secure, manage, and enforce trademarks, copyrights, patents, and designs across multiple jurisdictions.`,
    servicesInclude: [
      { icon: 'branding_watermark', title: 'Trademark Registration', description: 'Protect brand identity.' },
      { icon: 'copyright', title: 'Copyrights', description: 'Secure original works like content and designs.' },
      { icon: 'lightbulb', title: 'Patents', description: 'Protect inventions and processes.' },
      { icon: 'brush', title: 'Design Registrations', description: 'Protect unique product designs.' },
      { icon: 'gavel', title: 'IP Enforcement & Infringement Support', description: 'Litigation and cease & desist notices.' }
    ],
    whyImportant: [
      { icon: 'lock', title: 'Protect Intellectual Assets', description: 'Stop unauthorized use.' },
      { icon: 'public', title: 'Cross-Border Expertise', description: 'Compliance with India, Singapore, Malaysia, and Indonesia.' }
    ]
  }
];
