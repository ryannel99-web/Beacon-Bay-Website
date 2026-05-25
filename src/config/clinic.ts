// Replace content here: clinic details, hours, and contact info.
export const clinicConfig = {
  name: "Beacon Bay Veterinary Clinic",
  address: "22 Bonza Bay Rd, Beacon Bay North, East London, 5205",
  city: "Beacon Bay, East London",
  phone: "043 748 2550",
  phoneIntl: "+27437482550",
  whatsappNumber: "27437482550",
  email: "info@beaconbayvet.co.za",
  mapLink: "https://maps.app.goo.gl/PHpYPdzo4WbEPzGg9",
  siteUrl: "https://beaconbayvet.co.za", // TODO: Update with the live website URL
  hours: {
    weekdays: "07:30-18:00",
    saturday: "08:30-12:00 and 17:00-18:00",
    sunday: "09:30-11:00 and 17:00-18:00",
  },
  afterHours:
    "After-hours calls are routed to the shared East London on-call rota. Please call the clinic number and you will be connected to the on-call vet.",
  surchargeNote:
    "Saturday afternoon, Sunday and public holidays attract a surcharge.",
  socials: {
    facebook: "https://www.facebook.com/beaconbayvetclinic/",
  },
} as const;

export type ClinicConfig = typeof clinicConfig;

