import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tri-Point Landscaping",
  description:
    "Terms and Conditions for Tri-Point Landscaping LLC — Washington Township, Michigan. Service agreements, payment terms, cancellation policy, and more.",
  alternates: { canonical: "https://www.tripointlandscaping.com/terms-and-conditions" },
};

const sections = [
  {
    title: "Section 1 — Services",
    subsections: [
      {
        heading: "A. Scope of Work",
        body: `The specific services provided are detailed in written estimates, proposals, or service agreements given to clients before work begins. Tri-Point Landscaping reserves the right to make reasonable adjustments to scope, methodology, or materials where, in the Company's professional judgment, such adjustments are necessary due to unforeseen site conditions, safety concerns, or unavailability of materials.`,
      },
      {
        heading: "B. Service Scheduling",
        body: `All appointments depend on crew availability, weather, and equipment readiness. The company reserves the right to reschedule due to inclement weather, unsafe working conditions, equipment failure, or other circumstances beyond our reasonable control, with reasonable notification efforts made to clients.`,
      },
      {
        heading: "C. Access to Property",
        body: `Clients must provide safe, unobstructed access to their property on scheduled dates, including unlocked gates, secured pets, moved vehicles, and advance notice of irrigation systems or utilities. Tri-Point Landscaping shall not be liable for delays, incomplete work, or additional charges resulting from restricted or obstructed property access.`,
      },
      {
        heading: "D. Subcontractors",
        body: `The company reserves the right to engage licensed, qualified subcontractors who meet the same professional standards as direct employees.`,
      },
    ],
  },
  {
    title: "Section 2 — Estimates, Pricing, and Payment",
    subsections: [
      {
        heading: "A. Estimates",
        body: `Written estimates remain valid for 30 days from issuance unless stated otherwise. They are based on available information and subject to revision if actual site conditions differ materially from those represented by the Client or observed during initial assessment. An estimate becomes binding only when the client accepts it in writing or authorizes work to begin.`,
      },
      {
        heading: "B. Payment Terms",
        body: `Payment is due upon service completion unless alternative terms are agreed in writing beforehand. For larger projects, the company may require up to 50% deposit before scheduling or ordering materials. Unpaid invoices after 15 days incur a $15 flat fee, plus 1.5% monthly interest on remaining balances or the maximum rate permitted by applicable Michigan law, whichever is lower.`,
      },
      {
        heading: "C. Accepted Payment Methods",
        body: `The company accepts checks, credit cards, electronic transfers, and other designated methods. Returned checks incur a $35 fee plus bank charges.`,
      },
      {
        heading: "D. Price Adjustments",
        body: `For recurring agreements, pricing may be adjusted at the start of each service season with 30 days' written notice. Continued service use after notice constitutes acceptance of new pricing.`,
      },
      {
        heading: "E. Disputed Invoices",
        body: `Billing disputes must be submitted in writing within 10 days of the invoice date. Failure to dispute within this period means acceptance of charges. The company will attempt good-faith resolution promptly.`,
      },
    ],
  },
  {
    title: "Section 3 — Cancellation and Rescheduling",
    subsections: [
      {
        heading: "A. Cancellation by Client",
        body: `One-time services may be cancelled with at least 24 hours' notice at no charge. Cancellations made less than 24 hours before service may face a 25% cancellation fee to offset crew scheduling and mobilization expenses. For ongoing agreements, either party may terminate with 30 days' written notice. Services rendered before termination remain fully due and payable.`,
      },
      {
        heading: "B. Deposits on Cancelled Projects",
        body: `If a project is cancelled: (i) cancellations before material procurement or labor scheduling receive full refund minus administrative costs; (ii) cancellations after ordering receive forfeited deposits covering non-recoverable costs, with remaining balance refunded.`,
      },
      {
        heading: "C. Cancellation by Company",
        body: `Tri-Point Landscaping reserves the right to cancel services for unsafe conditions, non-payment, or conduct posing personnel or equipment risk. Clients receive prompt notification, and unearned prepayments are refunded.`,
      },
    ],
  },
  {
    title: "Section 4 — Satisfaction, Warranty, and Limitation of Liability",
    subsections: [
      {
        heading: "A. Workmanship",
        body: `Services are warranted to be performed professionally consistent with industry standards prevailing in Macomb County, Michigan. Dissatisfied clients must notify the company in writing within 5 business days of completion. The company will either re-perform deficient work at no charge or issue a credit toward future services, at its election.`,
      },
      {
        heading: "B. Plant and Material Warranty",
        body: `Unless otherwise specified, Tri-Point Landscaping does not warrant plant survival or long-term health. Plant survival is subject to numerous variables beyond the Company's control, including weather, soil composition, drainage, irrigation practices, pest activity, and post-installation care by the Client. Limited warranties, if offered, are expressly stated in proposals.`,
      },
      {
        heading: "C. Limitation of Liability",
        body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TRI-POINT LANDSCAPING'S TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM. The company is not liable for indirect, incidental, consequential, special, or punitive damages, including lost profits or property damage not directly caused by company negligence.`,
      },
      {
        heading: "D. Pre-Existing Conditions",
        body: `The company is not responsible for damage to unmarked underground utilities, irrigation systems, pet fencing, drainage pipes, or subsurface infrastructure. Clients must identify and clearly mark the location of all underground utilities and systems before any digging, edging, or ground-disturbing work is performed.`,
      },
    ],
  },
  {
    title: "Section 5 — Snow Removal Services",
    subsections: [
      {
        heading: "Snow Removal Terms",
        body: `Snow removal terms supplement general agreement terms and control in conflicts regarding snow services. Services target residential clients within designated service areas; commercial inquiries are case-by-case. Service triggers (snowfall thresholds) are specified in agreements, with professional judgment used otherwise.

Tri-Point Landscaping is not liable for damage to grass, turf, landscaping, pavement, or other property caused by snow plowing, salting, or sanding operations, provided that such operations were conducted in a commercially reasonable manner. Minor turf and landscaping damage is an inherent risk.

Tri-Point Landscaping does not guarantee the complete elimination of snow, ice, or slippery conditions from any property. Clients retain ultimate safety responsibility and may supplement services with personal ice management. Service priority during major weather events is determined by the company based on safety, capacity, and route efficiency.`,
      },
    ],
  },
  {
    title: "Section 6 — Intellectual Property",
    subsections: [
      {
        heading: "Design Materials",
        body: `Landscape designs, plans, drawings, renderings, and creative work ("Design Materials") remain exclusive company property unless explicitly transferred in signed writing. After full payment, clients receive a limited, non-exclusive, non-transferable license to use the Design Materials solely in connection with the property for which they were prepared. Design Materials cannot be reproduced, distributed, or used elsewhere without written company consent.`,
      },
    ],
  },
  {
    title: "Section 7 — Photography and Marketing",
    subsections: [
      {
        heading: "Photography Rights",
        body: `Tri-Point Landscaping reserves the right to photograph completed work for portfolios, marketing, social media, and promotion. Photos avoid identifying specific addresses or personal information without consent. Clients objecting to photography must notify the Company in writing prior to commencement of services.`,
      },
    ],
  },
  {
    title: "Section 8 — Insurance",
    subsections: [
      {
        heading: "Coverage",
        body: `The company maintains general liability and workers' compensation insurance where required. Insurance certificates are available upon written request. Clients are responsible for maintaining adequate homeowner's or commercial property coverage. Tri-Point Landscaping's insurance coverage does not extend to the Client's property, structures, or personal belongings.`,
      },
    ],
  },
  {
    title: "Section 9 — Governing Law and Dispute Resolution",
    subsections: [
      {
        heading: "A. Governing Law",
        body: `This agreement is governed by Michigan law without regard to conflict provisions. Legal actions must be brought in Macomb County state or federal courts, where parties irrevocably consent to jurisdiction.`,
      },
      {
        heading: "B. Dispute Resolution",
        body: `Parties agree to resolve disputes through good-faith negotiation first. If unresolved within 30 days, the parties agree to submit the matter to non-binding mediation before pursuing litigation. Mediation costs are split equally.`,
      },
      {
        heading: "C. Attorney's Fees",
        body: `The prevailing party in legal proceedings is entitled to recover reasonable attorney's fees and costs from the non-prevailing party, to the extent permitted by applicable law.`,
      },
    ],
  },
  {
    title: "Section 10 — Indemnification",
    subsections: [
      {
        heading: "Client Indemnification",
        body: `Clients agree to indemnify and defend the company and its owners, officers, employees, agents, and subcontractors from claims, damages, losses, costs, and expenses arising out of or related to: (i) the Client's breach of any term of this Agreement; (ii) the Client's misrepresentation of property conditions or subsurface features; (iii) the Client's failure to disclose underground utilities; or (iv) any injury or damage occurring on the Client's property that is not directly caused by Company gross negligence or willful misconduct.`,
      },
    ],
  },
  {
    title: "Section 11 — Miscellaneous Provisions",
    subsections: [
      {
        heading: "A. Entire Agreement",
        body: `This agreement plus any signed estimate, proposal, or service contract constitutes the complete understanding and supersedes all prior negotiations, representations, warranties, and understandings of the parties, whether written or oral.`,
      },
      {
        heading: "B. Amendments",
        body: `No amendments or modifications are effective unless in writing and signed by an authorized company representative.`,
      },
      {
        heading: "C. Severability",
        body: `If any provision is found invalid or unenforceable, it shall be modified minimally to become enforceable, while remaining provisions stay fully effective.`,
      },
      {
        heading: "D. Waiver",
        body: `Failure to enforce any right or provision shall not be construed as a waiver of that party's right to enforce such provision in the future.`,
      },
      {
        heading: "E. Force Majeure",
        body: `Neither party is liable for performance delays or failures caused by circumstances beyond the party's reasonable control, including but not limited to acts of God, severe weather, governmental orders, labor disputes, supply disruptions, or pandemic conditions.`,
      },
      {
        heading: "F. Notices",
        body: `Written notices are delivered via email, personal delivery, or U.S. mail to addresses on file.`,
      },
    ],
  },
  {
    title: "Section 12 — Contact Information",
    subsections: [
      {
        heading: "Tri-Point Landscaping LLC",
        body: `Washington Township, Macomb County, Michigan\nService Areas: Washington Township | Macomb Township | Shelby Township | Romeo\n\nEmail: tripointlandscaping@gmail.com\nTelephone: (586) 327-8080\nWebsite: www.tripointlandscaping.com`,
      },
    ],
  },
  {
    title: "Section 13 — Amendments to These Terms",
    subsections: [
      {
        heading: "Policy Updates",
        body: `Tri-Point Landscaping reserves the right to revise these terms at any time. Updated terms are published on the website with a revised effective date. Continued use of our services or website following the posting of any revised Terms constitutes the Client's acceptance of such changes. It is the Client's responsibility to review these Terms periodically.`,
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: "#111111" }} className="py-16 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Terms &amp; Conditions
            </h1>
            <p className="text-white/50 text-sm">Effective Date: March 3, 2026</p>
          </div>
        </section>

        {/* Acknowledgment banner */}
        <div style={{ backgroundColor: "#2C5F2E" }} className="py-4">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-white text-sm text-center font-medium">
              BY ENGAGING TRI-POINT LANDSCAPING FOR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THESE TERMS AND AGREE TO BE LEGALLY BOUND BY THEM.
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Table of contents */}
            <div style={{ backgroundColor: "#f5f0e8" }} className="p-8 mb-12">
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-xl font-bold text-gray-900 mb-4"
              >
                Table of Contents
              </h2>
              <ol className="space-y-1.5 text-sm text-gray-600">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#section-${i + 1}`} className="text-green-700 hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={section.title} id={`section-${i + 1}`} className="pb-12 border-b border-gray-100 last:border-0">
                  <h2
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-2xl font-bold text-gray-900 mb-6"
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.subsections.map((sub) => (
                      <div key={sub.heading}>
                        {sub.heading && (
                          <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{sub.heading}</h3>
                        )}
                        <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Tri-Point Landscaping LLC. All rights reserved.</p>
              <p className="mt-2">
                <Link href="/privacy-policy" className="text-green-700 hover:underline">Privacy Policy</Link>
                {" · "}
                <Link href="/contact" className="text-green-700 hover:underline">Contact Us</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
