// Replace content here: team members and bios.
export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image: string;
};

// TODO: Replace /stock/*.png with real team photography once available.
export const teamMembers: TeamMember[] = [
  {
    name: "Dr. WH Delport",
    role: "Owner / Veterinarian",
    bio: "Dr. Delport founded Beacon Bay Veterinary Clinic with a commitment to raising the standard of companion animal care in East London. With extensive experience in small animal medicine, surgery, and exotic pets, he is a champion of calm handling techniques and building long-term relationships with pet owners and their families.",
    image: "/stock/team-1.png",
  },
  {
    name: "Dr. S Voster",
    role: "Veterinarian",
    bio: "Dr. Voster is passionate about preventative care, dentistry, and comprehensive wellness planning. She believes that early intervention and client education are the most powerful tools in keeping pets healthy, and she takes time to ensure every owner leaves with a clear understanding of their pet's needs.",
    image: "/stock/team-2.png",
  },
  {
    name: "Dr. R Nel",
    role: "Veterinarian",
    bio: "Dr. Nel brings a keen interest in diagnostics and soft-tissue surgery to the team. Known for a gentle, methodical approach, she takes pride in thorough clinical assessments and ensuring that each diagnosis is backed by the most accurate information available before recommending a treatment plan.",
    image: "/stock/team-3.png",
  },
  {
    name: "Our Nursing Team",
    role: "Veterinary Nurses",
    bio: "Our dedicated nursing team is the backbone of every visit. They provide expert patient care, clear client communication, and ongoing support from check-in to discharge — ensuring your pet is comfortable and that you have all the information you need throughout every step of the process.",
    image: "/stock/team-4.png",
  },
];
