import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Tri-Point Landscaping",
  description: "Privacy Policy for Tri-Point Landscaping LLC — Washington Township, Michigan. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://tripointlandscaping.com/privacy-policy" },
};

const sections = [
  {
    title: "About Us",
    content: `This Privacy Policy governs the collection, use, storage, and disclosure of personal information obtained by Tri-Point Landscaping, a landscaping and property services company operating in Macomb County, Michigan. The policy applies to information collected through the website, telephone communications, in-person interactions, and other engagement channels.

By accessing the website, submitting inquiries, requesting quotes, or providing contact information, you acknowledge acceptance of these practices.`,
  },
  {
    title: "Section 1 — Information We Collect",
    content: `A. Information Provided Voluntarily

We collect: full legal name and residential or commercial property addresses; primary and secondary telephone numbers, including mobile numbers; email addresses; property details relevant to requested services; mobile numbers for SMS communications; payment information (processed through PCI-compliant third parties, not stored internally); and written or verbal communications via forms, email, or phone.

B. Information Collected Automatically

We gather: Internet Protocol addresses and derived geographic location; browser type, operating system, device identifiers, and referring URLs; pages visited, time spent, and clickstream data via cookies; and date, time, and session duration data.`,
  },
  {
    title: "Section 2 — Use of Collected Information",
    content: `Personal information is utilized for: scheduling and performing landscaping, lawn care, design, snow removal, pressure washing, and lighting services; preparing estimates, proposals, invoices, and service agreements; client communications regarding confirmations, reminders, scheduling changes, and accounts; SMS marketing for promotions, announcements, and special offers (opt-in basis); payment processing and financial record maintenance; website usage analysis to improve functionality; business records maintenance per applicable law; and responding to inquiries, complaints, and information requests.`,
  },
  {
    title: "Section 3 — SMS and Text Message Communications",
    content: `A. Transactional SMS

Upon providing a mobile number for service requests or accounts, you may receive automated texts regarding appointment confirmations, crew arrival notifications, completion notices, and billing reminders. These are integral to service delivery.

B. SMS Marketing Communications

By expressly opting in through the website, paper form, or verbal acknowledgment, you grant consent for recurring automated marketing texts. Messages include seasonal promotions, limited-time offers, service announcements, and company updates. Consent is entirely voluntary and not a service purchase condition. Frequency: up to four marketing messages monthly. Standard message and data rates may apply per carrier.

C. Opt-Out and Help Instructions

To opt out — reply STOP to any text message from Tri-Point Landscaping. A confirmatory message follows, then marketing SMS ceases. To request assistance — reply HELP to any SMS or contact us directly.

D. Non-Disclosure of Mobile Numbers

Mobile numbers collected for SMS will not be sold, leased, transferred, or disclosed to third parties for independent marketing purposes.`,
  },
  {
    title: "Section 4 — Disclosure of Personal Information",
    content: `The company does not sell, rent, or trade personal information for commercial purposes. Disclosure occurs only in these circumstances:

Authorized Service Providers — Information may be shared with vetted third-party vendors performing functions including CRM platforms, field service management software (including Jobber), payment processors, email services, and SMS messaging platforms.

Legal Obligation — Disclosure occurs if required by applicable law, court order, subpoena, or regulatory directive.

Business Succession — During mergers, acquisitions, or similar transactions, personal information may transfer to the acquiring entity, provided it agrees to this Policy.`,
  },
  {
    title: "Section 5 — Data Retention",
    content: `Personal information is retained as reasonably necessary to fulfill policy purposes, comply with legal and regulatory obligations, resolve disputes, and enforce agreements. Client records, including service histories, invoices, and communications, are retained a minimum of seven years per standard business practices. Upon expiration, information is securely deleted, anonymized, or destroyed.`,
  },
  {
    title: "Section 6 — Your Rights and Choices",
    content: `Subject to applicable law, you retain these rights:

• Right of Access — Request a copy of personal information held.
• Right of Correction — Request correction of inaccurate or incomplete information.
• Right of Deletion — Request deletion of personal information, subject to legal retention requirements.
• Right to Opt Out of Marketing — Withdraw marketing communication consent (email and SMS) at any time without penalty.
• Right to Non-Discrimination — We will not deny services or charge differential rates based on rights exercise.

Submit written requests using the contact information in Section 9. Responses occur within thirty days of receipt.`,
  },
  {
    title: "Section 7 — Data Security",
    content: `The company implements commercially reasonable technical, administrative, and physical safeguards protecting personal information from unauthorized access, disclosure, alteration, loss, or destruction. Measures include access controls, secure transmission protocols, and vendor security requirements.

No electronic transmission or storage method is entirely secure. Upon material data breach, affected parties are notified per applicable Michigan and federal law.`,
  },
  {
    title: "Section 8 — Cookies and Tracking Technologies",
    content: `The website employs cookies, web beacons, pixel tags, and similar technologies collecting interaction information and improving functionality. Cookies are small data files enabling visitor recognition and traffic analysis.

Configure your browser to refuse cookies or alert when sent. Disabling cookies may limit website feature access.`,
  },
  {
    title: "Section 9 — Contact Information",
    content: `Direct inquiries, requests, complaints, or correspondence relating to this Privacy Policy to:

Tri-Point Landscaping LLC
Washington Township, Macomb County, Michigan

Email: tripointlandscaping@gmail.com
Telephone: (586) 327-8080
Website: www.tripointlandscaping.com`,
  },
  {
    title: "Section 10 — Amendments to This Policy",
    content: `Tri-Point Landscaping reserves the right to modify, update, or revise this Privacy Policy at any time at its sole discretion. Material changes will be reflected by an updated Effective Date at the top of this document. Continued website or service use following revised Policy posting constitutes acceptance of updated terms.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ backgroundColor: "#111111" }} className="py-16 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">Effective Date: March 3, 2026</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-gray max-w-none">
              {sections.map((section) => (
                <div key={section.title} className="mb-10 pb-10 border-b border-gray-100 last:border-0">
                  <h2
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Tri-Point Landscaping LLC. All rights reserved.</p>
              <p className="mt-2">
                <Link href="/terms-and-conditions" className="text-green-700 hover:underline">Terms & Conditions</Link>
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
