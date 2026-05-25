export const groupConfig = {
  name: "Beacon Vet Group",
  tagline: "Raising the standard of veterinary care across the Eastern Cape",
  website: "https://beaconvetgroup.co.za", // placeholder — update when live
  practices: [
    {
      id: "beacon-bay",
      name: "Beacon Bay Veterinary Clinic",
      address: "22 Bonza Bay Rd, Beacon Bay North, East London, 5205",
      phone: "043 748 2550",
      city: "Beacon Bay, East London",
      href: "/",
      mapLink: "https://maps.app.goo.gl/PHpYPdzo4WbEPzGg9",
      status: "open" as const,
    },
    {
      id: "coming-soon",
      name: "New Location — Coming Soon",
      address: "Eastern Cape",
      phone: "",
      city: "Eastern Cape",
      href: "/locations",
      mapLink: "",
      status: "coming-soon" as const,
    },
  ],
};
