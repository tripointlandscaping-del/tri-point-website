import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Tri-Point Landscaping",
  description: "Privacy Policy for Tri-Point Landscaping LLC — Washington Township, Michigan. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.tripointlandscaping.com/privacy-policy" },
};

const sections = [
  {
    title: "About This Policy",
    content: `This Privacy Policy (hereinafter "Policy") is issued by Tri-Point Landscaping LLC, a Michigan limited liability company having its principal place of business in Washington Township, Macomb County, Michigan (hereinafter "Company," "we," "us," or "our"). This Policy governs the collection, use, processing, storage, disclosure, and protection of Personal Information obtained from individuals (hereinafter "you," "your," or "Data Subject") who access the Company's website located at www.tripointlandscaping.com (hereinafter "Website"), submit service inquiries, request estimates or proposals, engage the Company for landscaping, lawn care, snow removal, or ancillary property services, or otherwise interact with the Company through any medium.

WHEREAS, the Company is committed to the responsible stewardship of Personal Information and to operating in compliance with applicable federal and Michigan state privacy laws; and

WHEREAS, this Policy is intended to inform Data Subjects of the nature of information collected, the purposes for which such information is used, the conditions under which such information may be disclosed, and the rights available to Data Subjects under applicable law;

NOW, THEREFORE, by accessing the Website, submitting inquiries, requesting estimates or quotes, providing contact or payment information, or otherwise engaging with the Company in any capacity, you acknowledge that you have read, understood, and consent to the practices described herein. If you do not agree with any provision of this Policy, you should immediately discontinue all use of the Website and refrain from engaging the Company's services.`,
  },
  {
    title: "Definitions",
    content: `For purposes of this Privacy Policy, the following terms shall have the meanings ascribed to them herein:

"Company" shall mean Tri-Point Landscaping LLC, its owners, officers, managers, employees, agents, contractors, successors, and assigns.

"Personal Information" shall mean any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, to a particular individual or household, including without limitation names, addresses, telephone numbers, email addresses, financial account information, and Internet Protocol addresses.

"Data Subject" shall mean any natural person whose Personal Information is collected, processed, stored, or disclosed by the Company, including without limitation clients, prospective clients, website visitors, and communications recipients.

"Processing" shall mean any operation or set of operations performed on Personal Information, including collection, recording, organization, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, combination, restriction, erasure, or destruction.

"Third-Party Service Provider" shall mean any external entity engaged by the Company to perform functions on the Company's behalf that may involve access to or Processing of Personal Information, including without limitation field service management platforms, payment processors, SMS messaging platforms, and email service providers.

"Sensitive Personal Information" shall mean Personal Information that reveals financial account details, payment card information, or other categories of information that may present heightened risk if improperly disclosed.

"Breach" shall mean any unauthorized acquisition, access, use, disclosure, modification, or destruction of Personal Information that compromises the security, confidentiality, or integrity of such information.

"Effective Date" shall mean March 3, 2026, being the date upon which this Policy takes legal effect.`,
  },
  {
    title: "Section 1 — Information We Collect",
    content: `A. Information Provided Voluntarily

The Company collects Personal Information that Data Subjects affirmatively and voluntarily provide when interacting with the Company through any channel, including but not limited to the Website, telephone, email, in-person consultation, or paper-based forms. Such voluntarily provided Personal Information includes, without limitation, the following categories:

(i) Full legal name and any trade or business name, as applicable;
(ii) Residential, commercial, or billing addresses, including service property address and mailing address where different;
(iii) Primary and secondary telephone numbers, including landline and mobile numbers designated for voice and text communications;
(iv) Electronic mail addresses used for service correspondence, billing, and marketing;
(v) Detailed property information relevant to the requested services, including but not limited to lot size, existing landscaping conditions, irrigation systems, fencing, and underground utility disclosures;
(vi) Mobile telephone numbers expressly designated for Short Message Service (SMS) communications, subject to the opt-in requirements described in Section 3 hereof;
(vii) Payment information, including credit card and debit card numbers, bank account information, and billing details, all of which are transmitted to and processed exclusively by PCI-DSS-compliant third-party payment processors and are not stored on Company systems; and
(viii) Written and verbal communications transmitted to the Company via contact forms, electronic mail, telephone, or any other medium, including service requests, complaints, and feedback.

B. Information Collected Automatically

Upon accessing or interacting with the Website, the Company and its authorized Third-Party Service Providers may automatically collect certain technical and behavioral information through the use of cookies, web beacons, pixel tags, server logs, and similar tracking technologies. Such automatically collected information includes, without limitation:

(i) Internet Protocol (IP) address and network information, from which approximate geographic location may be derived;
(ii) Browser type and version, operating system and version, device type, device identifiers, screen resolution, and referring Uniform Resource Locators (URLs);
(iii) Pages visited, hyperlinks clicked, features accessed, content downloaded, and clickstream data reflecting the sequence and nature of Website interactions;
(iv) Date, time, duration, and frequency of Website sessions; and
(v) Diagnostic and performance data, including page load times and error logs.

The Company does not collect Special Categories of Personal Information (such as health data, biometric data, or government identification numbers) and requests that Data Subjects refrain from submitting such information through any Company channel.`,
  },
  {
    title: "Section 2 — Use of Collected Information",
    content: `The Company processes Personal Information solely for legitimate business purposes and only to the extent necessary for such purposes. Specifically, Personal Information collected by the Company is used for the following purposes:

(i) Service Delivery — To schedule, coordinate, and perform landscaping, lawn care, garden design, landscape installation, snow removal, pressure washing, outdoor lighting installation, and all ancillary property maintenance and improvement services requested by the Data Subject;

(ii) Estimates, Proposals, and Invoicing — To prepare, transmit, and maintain written estimates, service proposals, project scopes, invoices, receipts, and service agreements relating to services rendered or proposed;

(iii) Client Communications — To communicate with Data Subjects regarding service confirmations, appointment reminders, crew dispatch notifications, service completion notices, scheduling modifications, account status, and all matters reasonably related to the provision of services;

(iv) SMS Marketing Communications — To transmit promotional, informational, and marketing text messages to Data Subjects who have provided valid express written consent to receive such communications, as further described in Section 3 hereof;

(v) Payment Processing and Financial Recordkeeping — To facilitate the processing of payments, issue refunds where applicable, maintain financial records, and comply with tax and accounting obligations;

(vi) Website Analytics and Improvement — To analyze aggregate and anonymized Website usage data for the purpose of improving Website functionality, user experience, content relevance, and service offerings;

(vii) Legal Compliance and Risk Management — To comply with applicable federal, state, and local laws, regulations, and judicial or administrative orders; to exercise or defend legal rights and claims; to investigate potential fraud, misconduct, or violations of Company policies; and to maintain records required by applicable law;

(viii) Customer Service and Dispute Resolution — To receive, investigate, and respond to inquiries, service requests, complaints, and information requests submitted by Data Subjects; and

(ix) Business Operations — To conduct internal analytics, quality assurance, employee training, operational planning, and other internal business functions consistent with the Company's legitimate interests.

The Company shall not use Personal Information for purposes materially incompatible with those disclosed herein without providing prior notice to, and where required obtaining the consent of, the affected Data Subject.`,
  },
  {
    title: "Section 3 — SMS and Text Message Communications",
    content: `A. Transactional SMS Communications

Upon providing a mobile telephone number in connection with a service request, account creation, or ongoing service agreement, the Data Subject acknowledges that the Company may transmit automated Short Message Service (SMS) text messages for transactional and service-related purposes. Such transactional messages may include, without limitation: appointment confirmations, crew arrival notifications, service completion confirmations, billing reminders, and account status updates. Transactional SMS communications are integral to and reasonably necessary for the provision of services and may be sent regardless of marketing preferences; however, Data Subjects may contact the Company to discuss alternative communication methods.

B. SMS Marketing Communications

The Company may transmit recurring automated marketing SMS messages to Data Subjects who have provided valid, express, prior written or electronic opt-in consent through one of the following channels: (i) the Website opt-in form; (ii) a written paper consent form; or (iii) a verbally acknowledged opt-in recorded in the Company's service management platform. Such express consent is entirely voluntary, and provision of consent is not a condition of purchasing, receiving, or continuing to receive any service from the Company. Marketing SMS messages may include, without limitation, seasonal promotions, limited-time service offers, new service announcements, company news, and related commercial communications. Message frequency shall not exceed four (4) marketing messages per calendar month, unless otherwise expressly stated at the point of opt-in. Standard message and data rates may apply in accordance with the Data Subject's wireless carrier plan.

C. Opt-Out and Help Procedures

Any Data Subject who wishes to opt out of receiving marketing SMS communications from the Company may do so at any time, without penalty or consequence to service eligibility, by replying "STOP" to any SMS message received from the Company. Upon receipt of a STOP reply, the Company shall transmit a single confirmatory message acknowledging the opt-out request, after which no further marketing SMS messages shall be transmitted to that mobile number unless new express consent is subsequently obtained. To request assistance or additional information regarding the Company's SMS program, the Data Subject may reply "HELP" to any SMS message or contact the Company directly using the information set forth in Section 9 hereof.

D. Non-Sale and Non-Disclosure of Mobile Numbers

Mobile telephone numbers collected by the Company for purposes of SMS communications shall not be sold, leased, licensed, rented, transferred, or otherwise disclosed to any third party for such third party's independent marketing, solicitation, or commercial purposes. Mobile numbers may be shared only with the Company's authorized SMS platform providers acting solely on the Company's behalf and subject to binding confidentiality and data protection obligations consistent with this Policy.`,
  },
  {
    title: "Section 4 — Disclosure of Personal Information",
    content: `The Company does not sell, rent, barter, trade, or otherwise transfer Personal Information to unaffiliated third parties for their independent commercial purposes. Notwithstanding the foregoing, the Company may disclose Personal Information under the following limited and specifically enumerated circumstances:

A. Authorized Third-Party Service Providers

The Company may share Personal Information with carefully vetted third-party vendors and service providers who perform specific functions on the Company's behalf and who require access to Personal Information solely to perform such functions. Such Third-Party Service Providers include, without limitation: customer relationship management (CRM) platforms; field service management software, including Jobber, Inc.; payment card processors and financial transaction platforms; electronic mail service providers; SMS and mobile messaging platforms; and website hosting and analytics providers. All Third-Party Service Providers engaged by the Company are required by contract to: (i) use Personal Information only as directed by and for the benefit of the Company; (ii) maintain appropriate security measures protecting Personal Information; and (iii) refrain from further disclosing or using Personal Information for any purpose not authorized by the Company.

B. Legal Obligation and Regulatory Compliance

The Company may disclose Personal Information where required or permitted by applicable law, including in response to a valid court order, judicial subpoena, regulatory investigation, governmental audit, or other legally compelled process. In such circumstances, the Company shall, to the extent permitted by law and practicable under the circumstances, endeavor to provide the affected Data Subject with prior notice of the required disclosure.

C. Protection of Rights, Safety, and Property

The Company reserves the right to disclose Personal Information where the Company, in its reasonable judgment, believes such disclosure is necessary or appropriate to: (i) prevent, investigate, or take action regarding suspected fraud, identity theft, or illegal activity; (ii) enforce this Policy or any agreement between the Company and the Data Subject; (iii) protect the rights, property, or safety of the Company, its personnel, or third parties; or (iv) respond to a bona fide emergency involving risk of bodily harm.

D. Business Succession Transactions

In the event of a merger, acquisition, corporate reorganization, sale of all or substantially all assets, or similar business succession transaction, Personal Information held by the Company may be transferred to the acquiring or successor entity as part of such transaction. The Company shall use commercially reasonable efforts to ensure that any successor entity agrees to be bound by the material terms of this Policy or provides equivalent privacy protections to Data Subjects.`,
  },
  {
    title: "Section 5 — Data Retention",
    content: `The Company shall retain Personal Information only for so long as is reasonably necessary to fulfill the purposes for which it was collected, as described in this Policy, and to comply with all applicable legal, regulatory, tax, accounting, and contractual obligations. In determining appropriate retention periods, the Company considers: (i) the amount, nature, and sensitivity of the Personal Information; (ii) the potential risk of harm from unauthorized use or disclosure; (iii) the purposes for which the Personal Information is processed and whether such purposes can be achieved through other means; and (iv) applicable legal retention requirements.

Notwithstanding any other provision hereof, client records — including without limitation service histories, signed estimates and proposals, invoices, payment records, photographs, communications, and related documentation — shall be retained for a minimum period of seven (7) years from the date of last service or last transaction, consistent with prevailing professional business standards and applicable Michigan law governing commercial records retention. Records subject to pending legal proceedings, regulatory investigations, or unresolved disputes shall be retained for the duration of such proceedings plus any applicable statute of limitations period.

Upon expiration of the applicable retention period, the Company shall cause Personal Information to be securely and permanently deleted, de-identified to a standard such that re-identification is not reasonably practicable, anonymized for aggregate analytics purposes, or physically destroyed, as appropriate to the medium and nature of the information. The Company shall implement and maintain documented data retention and disposal policies and procedures consistent with this Section.`,
  },
  {
    title: "Section 6 — Your Rights and Choices",
    content: `Subject to applicable law, including without limitation the Michigan Consumer Protection Act and any other applicable federal or state privacy statutes, Data Subjects shall retain the following rights with respect to their Personal Information held by the Company. The Company shall honor such rights to the extent required by applicable law and shall not unreasonably withhold the exercise thereof.

Right of Access — You have the right to submit a written request to the Company to receive a copy of the categories and specific items of Personal Information that the Company holds about you, the purposes for which such information is being processed, and the categories of third parties with whom such information has been shared. The Company shall verify the identity of the requesting party before fulfilling such request.

Right of Correction — You have the right to request that the Company correct, update, or complete any Personal Information held about you that is inaccurate, incomplete, outdated, or misleading. The Company shall make good-faith efforts to implement requested corrections within a commercially reasonable time.

Right of Deletion — Subject to the Company's legal obligations to retain certain records as described in Section 5 hereof, you have the right to request that the Company delete Personal Information held about you. The Company may deny or limit such requests where retention is required by law, necessary to complete a transaction, or otherwise permitted under applicable law.

Right to Opt Out of Marketing — You have the right to withdraw your consent to receive marketing communications, including without limitation email marketing and SMS marketing messages, at any time and without penalty. Such withdrawal shall not affect the lawfulness of processing that occurred prior to the withdrawal of consent, nor shall it affect the Company's ability to transmit transactional communications reasonably necessary for service delivery.

Right to Non-Discrimination — The Company shall not discriminate against any Data Subject for exercising any privacy right described herein. The Company shall not deny services, charge differential or penalty pricing, provide a reduced level of service, or engage in any retaliatory conduct based solely on the exercise of rights described in this Section.

To exercise any of the foregoing rights, Data Subjects shall submit a written request to the Company using the contact information set forth in Section 9 hereof. The Company shall acknowledge receipt of properly submitted requests within five (5) business days and shall provide a substantive response within thirty (30) calendar days of receipt, subject to extension for good cause with notice to the requesting party.`,
  },
  {
    title: "Section 7 — Data Security",
    content: `The Company shall implement and maintain commercially reasonable and industry-appropriate technical, administrative, and physical safeguards designed to protect Personal Information against unauthorized access, acquisition, use, disclosure, alteration, loss, theft, or destruction. Such security measures include, without limitation: role-based access controls limiting Personal Information access to authorized personnel with a legitimate business need; Secure Sockets Layer (SSL) or equivalent transport layer security protocols for data transmitted over the internet; vendor contractual security requirements imposing obligations on Third-Party Service Providers consistent with those described herein; periodic review and updating of security practices in response to evolving threats and industry standards; and employee training on data handling, phishing awareness, and security protocols.

Notwithstanding the foregoing, no method of electronic transmission, storage, or processing is entirely secure or free from risk. The Company cannot and does not warrant or guarantee the absolute security of Personal Information transmitted to or maintained by the Company. Data Subjects transmit Personal Information to the Company at their own risk and are encouraged to take appropriate precautions to protect their own devices and internet connections.

In the event of a data security Breach that materially compromises the security, confidentiality, or integrity of Personal Information, the Company shall provide notification to affected Data Subjects and applicable regulatory authorities in accordance with the requirements of applicable Michigan and federal law, including without limitation the Michigan Identity Theft Protection Act, MCL § 445.63 et seq., and any applicable federal breach notification statutes. Such notification shall be provided in the form and within the time periods required by applicable law.`,
  },
  {
    title: "Section 8 — Cookies and Tracking Technologies",
    content: `The Website employs cookies, web beacons, pixel tags, JavaScript tags, and similar automated tracking technologies that collect information about Data Subjects' interactions with the Website and facilitate the improvement of Website functionality and user experience. A "cookie" is a small data file that a website places on a visitor's device to recognize the visitor across sessions, remember preferences, maintain session state, and facilitate analytics. Web beacons and pixel tags are transparent image files embedded in web pages or emails that permit the Company and its service providers to monitor user activity and gather performance data.

The Company uses the following categories of cookies on the Website:

Strictly Necessary Cookies — These cookies are essential for the basic operation of the Website and cannot be disabled without materially impairing core Website functionality. They do not collect information used for marketing.

Analytical and Performance Cookies — These cookies collect aggregate information about how visitors use the Website, including which pages are visited most frequently, how long visitors remain on pages, and how visitors navigate between pages. This information is used solely to improve Website performance and content.

Functional Cookies — These cookies enable the Website to remember user preferences and settings to provide a more personalized experience.

Third-Party Cookies — Third-party analytics providers, including without limitation Google Analytics, may place cookies on the Website to assist the Company in understanding Website traffic patterns and user behavior.

Data Subjects may configure their web browser to refuse all cookies, alert them when cookies are being sent, or delete previously stored cookies. Instructions for managing cookie settings are available through each browser's help documentation. Please note that disabling certain cookies may limit or impair access to certain features or functionality of the Website. The Company is not responsible for the privacy practices of third-party cookie or tracking technology providers; Data Subjects are encouraged to review the privacy policies of such providers directly.`,
  },
  {
    title: "Section 9 — Contact Information",
    content: `All inquiries, access requests, correction requests, deletion requests, opt-out requests, complaints, or other correspondence relating to this Privacy Policy or the Company's data processing practices shall be directed in writing to:

Tri-Point Landscaping LLC
Washington Township, Macomb County, Michigan

Electronic Mail: tripointlandscaping@gmail.com
Telephone: (586) 327-8080
Website: www.tripointlandscaping.com

The Company shall make reasonable efforts to respond to all legitimate privacy-related inquiries and requests within the time periods specified herein. Data Subjects who believe their privacy rights have been violated and who are not satisfied with the Company's response may have the right to lodge a complaint with applicable state or federal regulatory authorities.`,
  },
  {
    title: "Section 10 — Amendments to This Policy",
    content: `Tri-Point Landscaping LLC expressly reserves the right to modify, amend, update, or revise this Privacy Policy at any time, in whole or in part, at its sole and absolute discretion, without prior notice except as may be required by applicable law. Any such modification shall be effective upon posting of the revised Policy to the Website. Material amendments — defined as changes that materially alter the rights of Data Subjects or the manner in which Personal Information is processed — shall be reflected by an updated Effective Date prominently displayed at the top of this document and, where practicable, communicated to existing clients via electronic mail or other available means.

The Data Subject's continued use of the Website, continued engagement of the Company's services, or failure to exercise available opt-out rights following the posting of any revised Policy shall constitute the Data Subject's acknowledgment of and agreement to be bound by the amended terms. It is the sole responsibility of the Data Subject to periodically review this Policy to remain apprised of any changes. The current and controlling version of this Policy shall at all times be the version posted on the Website at www.tripointlandscaping.com/privacy-policy.`,
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
