// Replace content here: blog posts and summaries.
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
};

// TODO: Replace /stock/*.png with high-quality photography for each post.
export const blogPosts: BlogPost[] = [
  {
    slug: "annual-vaccinations",
    title: "Why Annual Vaccinations Matter for Your Pet's Long-Term Health",
    excerpt:
      "Vaccinations are one of the most cost-effective ways to protect your pet against serious, preventable disease. Here's what every East London owner should know.",
    date: "2025-09-18",
    readTime: "5 min read",
    coverImage: "/stock/blog-1.png",
    content: [
      "Annual vaccinations remain one of the cornerstones of preventative veterinary care. For dogs, core vaccines protect against distemper, parvovirus, hepatitis, and rabies — diseases that are still circulating in the Eastern Cape and can be fatal if left unvaccinated. Cats require protection against feline herpesvirus, calicivirus, and panleukopaenia, and outdoor cats or those in multi-cat households benefit from additional lifestyle vaccines such as feline leukaemia.",
      "Many owners underestimate how quickly vaccine immunity wanes. While the initial puppy or kitten series builds foundational protection, annual boosters are required to keep immunity at a protective level. Missing even one year can leave your pet vulnerable, particularly in high-exposure environments such as dog parks, boarding facilities, and catteries. We tailor vaccination schedules to each pet's age, breed, lifestyle, and health status rather than taking a one-size-fits-all approach.",
      "The annual wellness visit that accompanies your pet's vaccination is equally valuable. It gives our vets the opportunity to perform a full physical examination, identify early signs of dental disease, weight changes, skin or coat concerns, and age-related conditions — often before symptoms appear. Think of it as a health MOT. Many serious conditions caught early are far simpler and less expensive to manage than those discovered at an advanced stage.",
      "If you are unsure when your pet is due for their next vaccination, or if you have recently adopted a pet without a clear vaccine history, please call us. We can review records, perform titre testing if appropriate, and build a personalised schedule to bring your pet up to date safely and without unnecessary over-vaccination.",
    ],
  },
  {
    slug: "first-visit-guide",
    title: "What to Expect During Your Pet's First Visit to Beacon Bay Vet",
    excerpt:
      "A first vet visit can feel daunting — for pets and owners alike. Here's exactly what to expect when you come through our doors for the first time.",
    date: "2025-08-04",
    readTime: "4 min read",
    coverImage: "/stock/blog-2.png",
    content: [
      "We know that new experiences can be stressful for animals, which is why we have designed our clinic environment and consultation approach to minimise anxiety at every stage. From the moment you arrive at Beacon Bay Veterinary Clinic, our team will do everything possible to ensure your pet feels safe and settled. We ask that dogs are kept on a lead and cats or small animals are transported in a secure carrier — this protects not just your pet but others in the waiting area.",
      "During the consultation, your vet will begin with a thorough nose-to-tail physical examination. This includes checking weight, body condition score, eyes, ears, teeth, lymph nodes, heart, lungs, and abdomen. You will have plenty of time to share your concerns and ask questions — we encourage you to write down any observations you've made at home before your appointment, as this information is genuinely useful for building an accurate clinical picture.",
      "Please bring any vaccination records, previous medical history, or a list of current medications your pet is taking. For young animals, we will discuss vaccination schedules, parasite control, nutrition, and microchipping. For older pets, we may recommend blood work or other diagnostics as part of a baseline health profile. Everything discussed during the consultation is explained clearly, and we will never recommend a treatment or procedure without explaining the reasoning behind it.",
      "After your appointment you are always welcome to call reception with follow-up questions. We believe that great veterinary care extends beyond the consultation room, and our team is here to support you between visits. If this is your pet's first time at any vet, please do let us know — we have specific approaches for helping anxious or fearful animals feel more comfortable over time.",
    ],
  },
  {
    slug: "after-hours-emergency-care",
    title: "Understanding After-Hours and Emergency Vet Care in East London",
    excerpt:
      "Knowing what to do in a veterinary emergency can save your pet's life. Here's how after-hours care works at Beacon Bay Vet and what to do if your pet needs urgent help.",
    date: "2025-07-12",
    readTime: "5 min read",
    coverImage: "/stock/blog-3.png",
    content: [
      "Emergencies don't follow business hours, and every pet owner should have a clear plan before a crisis strikes. At Beacon Bay Veterinary Clinic, our after-hours service connects callers to the shared East London on-call veterinary rota. If you call our main number outside of regular consulting hours, you will be connected to the on-call vet who can assess the situation, provide guidance, and arrange urgent care if needed. Please note that after-hours consultations attract a surcharge, as do Saturday afternoon and Sunday visits.",
      "Common veterinary emergencies include suspected poisoning (human medications, rat poison, certain plants, and xylitol in sugar-free foods are among the most frequent culprits), difficulty breathing, suspected fractures, seizures, severe vomiting or diarrhoea, urinary blockages (particularly in male cats), eye injuries, and trauma from road accidents or dog fights. If you are unsure whether something is an emergency, call us — it is always better to ask.",
      "While waiting for guidance or en route to the clinic, keep your pet as calm and still as possible. Do not offer food or water unless specifically instructed to. For suspected poisonings, try to identify the substance and bring the packaging or a photograph of it to the consultation. For wounds, apply gentle pressure with a clean cloth but do not attempt to remove foreign objects. Muzzle a dog in pain if you can do so safely, as even the gentlest pet may bite when frightened or hurting.",
      "Prevention is always the best approach. We recommend pet-proofing your home, storing medications securely, knowing which plants in your garden are toxic to pets, and ensuring your dog is always on a lead near roads. Keeping a record of your vet's after-hours number in your phone — and sharing it with anyone who cares for your pet — takes only seconds and could make all the difference in an emergency.",
    ],
  },
  {
    slug: "exotic-pets-east-london",
    title: "Exotic Pets: What East London Owners Need to Know",
    excerpt:
      "Rabbits, birds, reptiles, and small mammals have very different needs from dogs and cats. Here's what exotic pet owners in East London should know before and between vet visits.",
    date: "2025-06-03",
    readTime: "6 min read",
    coverImage: "/stock/blog-1.png",
    content: [
      "Exotic pets — a term that covers everything from rabbits and guinea pigs to parrots, bearded dragons, tortoises, and snakes — are growing in popularity across the Eastern Cape, but finding a vet with the knowledge and equipment to treat them well is not always straightforward. At Beacon Bay Veterinary Clinic, we see a range of exotic species and are experienced in the specific husbandry requirements, common disease presentations, and handling techniques that these animals require.",
      "One of the most important things exotic pet owners can do is research their species' needs thoroughly before acquiring a pet, and then find a vet who is familiar with that species before an emergency arises. Rabbits, for example, are often incorrectly assumed to be low-maintenance pets, but they require specialist dental care, can deteriorate rapidly when ill, and must never go without food for more than a few hours. Reptiles are ectotherms and their behaviour and physiology are directly tied to their enclosure temperature — a poorly set up habitat is responsible for the majority of reptile health problems we see.",
      "Parrots and other psittacines are long-lived, highly intelligent, and often skilled at masking illness — a survival instinct that can make early disease detection challenging. Annual health checks, weight monitoring, and an owner who knows their bird's normal behaviour are essential. Birds that are fluffed up, sleeping more than usual, or sitting on the bottom of the cage should be seen by a vet promptly. Similarly, reptiles that stop eating, develop swollen limbs, or show respiratory symptoms need prompt veterinary attention.",
      "If you own an exotic pet, please call us to discuss your specific species before your first visit so we can confirm we are the right fit and ensure we have the appropriate equipment ready. We are happy to advise on diet, housing, and preventative care over the phone, and we keep up to date with current best practice in exotic animal medicine. Owning an unusual pet should be a rewarding experience — the right veterinary support makes all the difference.",
    ],
  },
  {
    slug: "senior-pet-care",
    title: "Senior Pet Care: How We Support Older Dogs and Cats",
    excerpt:
      "Ageing pets need a different kind of attention. Learn how we approach senior wellness at Beacon Bay Vet and what owners can do to support an older companion at home.",
    date: "2025-04-28",
    readTime: "5 min read",
    coverImage: "/stock/blog-2.png",
    content: [
      "Dogs are generally considered senior from around seven years of age, though this varies significantly by breed — larger breeds age faster and may be geriatric by six or seven, while small breeds can remain physiologically younger into their early teens. Cats typically enter their senior years at around ten. Age itself is not a disease, but it brings a higher risk of conditions such as osteoarthritis, dental disease, kidney disease, hypertension, thyroid dysfunction, cognitive decline, and various cancers. The goal of senior wellness care is to catch these conditions early, when management options are most effective.",
      "We recommend twice-yearly wellness examinations for senior pets, along with an annual blood panel, urinalysis, and blood pressure check. These diagnostics can reveal kidney disease, diabetes, anaemia, and other conditions before clinical signs become obvious. Catching chronic kidney disease in its early stages, for example, allows us to implement dietary changes and supportive care that can significantly extend a cat's quality of life and lifespan. The same is true for many other age-related conditions — early detection changes outcomes.",
      "Mobility is a major quality-of-life factor in older pets. Arthritis is extremely common and frequently under-recognised because pets are stoic and owners often attribute slowing down to 'just getting old'. Signs of pain in dogs include reluctance to use stairs, difficulty getting up from rest, reduced play drive, and personality changes. In cats, look for changes in grooming, reluctance to jump, and altered litter tray use. Effective pain management options exist, and there is no reason for a senior pet to live with uncontrolled pain.",
      "At home, you can support an older pet by providing orthopedic bedding, ensuring food and water are easily accessible, maintaining a consistent routine, keeping them gently active without over-exerting them, and continuing parasite prevention and dental care. Regular nail trims become more important as older pets exercise less. Most importantly, trust your instincts — you know your pet better than anyone, and if something seems off, it is always worth a call to the clinic.",
    ],
  },
  {
    slug: "parasite-prevention-eastern-cape",
    title: "Parasite Prevention in the Eastern Cape: A Seasonal Guide",
    excerpt:
      "The Eastern Cape's climate means parasites are a year-round concern. Here's what Beacon Bay pet owners need to know about ticks, fleas, and worms — and how to stay ahead of them.",
    date: "2025-03-15",
    readTime: "5 min read",
    coverImage: "/stock/blog-3.png",
    content: [
      "The Eastern Cape, with its warm summers and mild winters, provides favourable conditions for parasites throughout much of the year. Ticks are the most significant concern in our region: several species are found locally, including the yellow dog tick, the bont tick, and the brown dog tick. Ticks are vectors for serious diseases including ehrlichiosis, babesiosis (biliary fever), and tick-bite fever — conditions that can be fatal if not treated promptly. We recommend year-round tick prevention for all dogs, with particular vigilance during the warmer months from September through April.",
      "Fleas are also a persistent challenge in the Eastern Cape. Beyond the discomfort of biting, fleas are the intermediate host for the tapeworm Dipylidium caninum, meaning a fleainfested pet is also at risk of intestinal parasite infection. Fleas can survive and reproduce in the home environment — carpets, upholstery, and pet bedding are all reservoirs — which means that treating the pet alone is often insufficient. A comprehensive flea management programme addresses both the animal and the household. We can advise on effective environmental treatments.",
      "Intestinal worms — including roundworm, hookworm, tapeworm, and whipworm — are common in dogs and cats at all life stages. Puppies and kittens can be born with or acquire roundworm from their mothers, making early deworming essential. Adult pets in areas with wildlife exposure, those that hunt, or those with access to soil are at ongoing risk. We recommend deworming every three months for adult pets, or more frequently for those at higher risk. Heartworm, though less common in our region than in some other parts of South Africa, should also be discussed with your vet, particularly if you travel with your pet.",
      "The most effective parasite prevention programme is one that is consistent and tailored to your pet's individual risk factors. There is now an excellent range of products available — including spot-on treatments, oral chews, and collars — that combine tick, flea, and worm protection in a single convenient product. Please call us to discuss the best option for your pet's age, weight, species, and lifestyle. We also stock a selection of veterinary-grade parasite prevention products at the clinic, so you can be confident you are using products that are both safe and effective.",
    ],
  },
];
