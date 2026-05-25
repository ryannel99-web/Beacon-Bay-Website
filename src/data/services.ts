// Replace content here: service list shown on the site.
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "vaccinations",
    title: "Vaccinations",
    description:
      "Core and lifestyle vaccines tailored to your pet's age, breed, and exposure risk, with clear guidance on schedules and timing.",
    icon: "syringe",
  },
  {
    id: "sterilisation",
    title: "Sterilisation",
    description:
      "Safe, routine sterilisation procedures with attentive pre-op assessment, careful anaesthesia management, and thorough post-op care.",
    icon: "shield",
  },
  {
    id: "dentistry",
    title: "Dentistry",
    description:
      "Professional dental scaling, polishing, and extractions performed under general anaesthesia, with full dental charting and aftercare guidance.",
    icon: "tooth",
  },
  {
    id: "diagnostics",
    title: "Diagnostics",
    description:
      "In-house blood panels, urinalysis, and cytology for rapid, accurate results — enabling faster diagnosis and treatment decisions.",
    icon: "microscope",
  },
  {
    id: "xrays-ultrasound",
    title: "X-rays & Ultrasound",
    description:
      "Digital radiography and ultrasound imaging for detailed assessment of bones, organs, and soft tissue in a calm, well-equipped environment.",
    icon: "xray",
  },
  {
    id: "surgery",
    title: "Surgery",
    description:
      "Soft-tissue and selected orthopaedic procedures performed in a clean, fully equipped theatre with attentive anaesthetic monitoring throughout.",
    icon: "scalpel",
  },
  {
    id: "exotic-pets",
    title: "Exotic Pets",
    description:
      "Specialist care for birds, reptiles, rabbits, guinea pigs, and small mammals, with knowledge of the unique needs of each species.",
    icon: "paw",
  },
  {
    id: "senior-care",
    title: "Senior Care",
    description:
      "Targeted wellness plans, regular blood work, mobility assessments, and comfort-focused management for older dogs and cats.",
    icon: "heart",
  },
  {
    id: "puppy-kitten-plans",
    title: "Puppy & Kitten Plans",
    description:
      "Structured vaccination schedules, microchipping, nutrition guidance, and early health checks to give young pets the best possible start.",
    icon: "star",
  },
  {
    id: "parasite-control",
    title: "Parasite Control",
    description:
      "Year-round tick, flea, and worm prevention programmes using veterinary-grade products tailored to your pet's species and risk profile.",
    icon: "bug",
  },
  {
    id: "microchipping",
    title: "Microchipping",
    description:
      "Permanent identification linked to national registries, ensuring your pet can always be traced back to you if lost or stolen.",
    icon: "chip",
  },
  {
    id: "nutrition-advice",
    title: "Nutrition Advice",
    description:
      "Personalised dietary guidance for weight management, growth, performance, and the nutritional support of medical conditions.",
    icon: "leaf",
  },
  {
    id: "euthanasia",
    title: "Euthanasia",
    description:
      "Compassionate end-of-life care provided with dignity, sensitivity, and full support for the pet and the family throughout the process.",
    icon: "dove",
  },
];
