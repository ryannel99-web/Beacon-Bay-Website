module.exports = [
"[project]/src/data/faqs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Replace content here: FAQs shown across the site.
__turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        question: "Do you accept walk-ins?",
        answer: "We recommend calling ahead so we can prepare and minimise waiting times. Emergencies are always assessed immediately — please call us on +27 43 735 1592 so we can be ready when you arrive."
    },
    {
        question: "Do you treat exotic pets?",
        answer: "Yes, we care for a range of exotic species including birds, reptiles, rabbits, guinea pigs, and small mammals. Please call us with your pet's species and details so we can confirm we are the right fit and ensure the appropriate clinician and equipment are available for your appointment."
    },
    {
        question: "How do after-hours calls work?",
        answer: "Calls to our main number after hours are routed to the shared East London on-call veterinary rota. You will be connected to a vet who can assess the situation, provide guidance, and arrange urgent care if needed. Please note that after-hours, Saturday afternoon, Sunday, and public holiday consultations attract a surcharge."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash, card, and instant EFT. Please speak to reception about payment options when booking your appointment. We can advise on any available payment arrangements during your call."
    },
    {
        question: "What should I bring to my first appointment?",
        answer: "Please bring any previous veterinary records or vaccination certificates, a list of current medications or supplements your pet is taking, and your pet on a lead or in a secure carrier. For exotic pets, it helps to bring a photo or note of their usual diet and housing setup."
    },
    {
        question: "What should I do if my pet has an emergency?",
        answer: "Call our clinic number immediately on +27 43 735 1592. Outside of regular hours, you will be connected to the on-call vet who can advise you. Keep your pet calm, do not offer food or water unless instructed, and if you suspect poisoning, bring the packaging of the suspected substance with you."
    },
    {
        question: "Do you offer parasite prevention products?",
        answer: "Yes, we stock a range of veterinary-grade tick, flea, and worm prevention products at the clinic. We tailor recommendations to your pet's age, weight, species, and lifestyle — please ask during your consultation or call reception for advice."
    },
    {
        question: "At what age should I bring my new puppy or kitten for their first visit?",
        answer: "We recommend bringing new puppies and kittens in as soon as possible — ideally from 6–8 weeks of age. Early visits allow us to start vaccinations, discuss nutrition and parasite control, and microchip your pet. It also helps young animals become comfortable with the clinic environment from an early age."
    },
    {
        question: "What is the surcharge policy?",
        answer: "A surcharge applies to Saturday afternoon (after 12:00), Sunday, and public holiday consultations, as well as any after-hours on-call visits. This reflects the additional cost of providing care outside standard operating hours. Our team will always advise you of any applicable surcharges when you call."
    },
    {
        question: "Do you offer payment plans?",
        answer: "We do not offer in-house payment plans; however, we have partnered with Mediwallet to provide clients with access to short-term financing. Through Mediwallet, you can access an interest-free loan repayable over three months. Please speak to reception for details and to arrange this prior to your appointment."
    },
    {
        question: "How often should my pet have a wellness check?",
        answer: "We recommend annual wellness examinations for most adult pets, combined with their vaccination visit. Senior pets (dogs from around age 7, cats from around age 10) benefit from twice-yearly check-ups. Puppies and kittens will need more frequent visits during their first year to complete vaccination and development milestones."
    },
    {
        question: "Can I request a specific vet for my appointment?",
        answer: "Yes, wherever possible we are happy to accommodate preferences. Please mention this when you call to book, and we will do our best to schedule you with your preferred veterinarian. For ongoing conditions, continuity of care with the same vet is always beneficial."
    }
];
}),
"[project]/src/components/FAQAccordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQAccordion",
    ()=>FAQAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/faqs.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function FAQAccordion() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-primaryBlue/10 bg-lightBlue",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-4xl px-6 py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faqs"].map((faq, index)=>{
                    const isOpen = openIndex === index;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-white/60 bg-white p-5 shadow-soft",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 h-1 w-10 rounded-full bg-primaryBlue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                lineNumber: 20,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-expanded": isOpen,
                                className: "flex w-full items-center justify-between text-left text-sm font-semibold text-black",
                                onClick: ()=>setOpenIndex((prev)=>prev === index ? null : index),
                                children: [
                                    faq.question,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg text-black",
                                        children: isOpen ? "-" : "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQAccordion.tsx",
                                        lineNumber: 30,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                lineNumber: 21,
                                columnNumber: 17
                            }, this),
                            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-black",
                                children: faq.answer
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQAccordion.tsx",
                                lineNumber: 35,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, faq.question, true, {
                        fileName: "[project]/src/components/FAQAccordion.tsx",
                        lineNumber: 16,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/FAQAccordion.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FAQAccordion.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FAQAccordion.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_65257b8a._.js.map