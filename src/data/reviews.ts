// Replace content here: testimonials from clients.
export type Review = {
  name: string;
  text: string;
  stars: number;
  petType: string;
  source: string;
};

export const placeholderReviews: Review[] = [
  {
    name: "K. Mthetho",
    text: "Professional, gentle, and thoroughly reassuring. Our Labrador can be anxious at the vet, but the team here made him feel so at ease — we noticed the difference from the moment we walked in. Clear explanations throughout and a follow-up call the next day to check on him.",
    stars: 5,
    petType: "Dog owner",
    source: "Google",
  },
  {
    name: "L. Jacobs",
    text: "Wonderful experience from start to finish. The clinic is spotlessly clean, the staff are knowledgeable, and Dr. Delport took the time to explain every aspect of our cat's treatment plan in plain language. After-hours support is a real comfort — I know we're not on our own if something happens overnight.",
    stars: 5,
    petType: "Cat owner",
    source: "Google",
  },
  {
    name: "S. Petersen",
    text: "When our bearded dragon stopped eating we weren't sure where to turn — exotic vet care in East London is hard to find. Beacon Bay Vet was fantastic. They knew exactly what to look for, the consultation was thorough, and he's thriving again. Cannot recommend highly enough.",
    stars: 5,
    petType: "Exotic pet owner",
    source: "Google",
  },
  {
    name: "N. Botha",
    text: "Brought our senior rescue greyhound in for his annual check-up and blood panel. The team handled him with such patience and care — he's a nervous boy and they were incredible with him. The vet walked us through the results step by step and set up a tailored wellness plan for his age. Exactly the kind of care we were hoping to find.",
    stars: 5,
    petType: "Dog owner",
    source: "Google",
  },
  {
    name: "T. Olivier",
    text: "Our two cats needed sterilisation within a week of each other, and the team made both procedures completely stress-free for us as owners. Post-op check-ins were thorough and the recovery advice was detailed and practical. We've found our permanent vet home in Beacon Bay.",
    stars: 5,
    petType: "Cat owner",
    source: "Google",
  },
  {
    name: "A. Williams",
    text: "I was worried when my African grey parrot started showing signs of respiratory distress late on a Saturday afternoon. The after-hours service connected me with a vet immediately who gave me clear instructions and arranged an early consultation the following morning. The level of exotic bird knowledge here is impressive — a true find for bird owners in the Eastern Cape.",
    stars: 5,
    petType: "Exotic pet owner",
    source: "Google",
  },
];
