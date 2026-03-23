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
    title: "Preamble and Agreement to Terms",
    subsections: [
      {
        heading: "",
        body: `THESE TERMS AND CONDITIONS OF SERVICE (hereinafter "Agreement") constitute a legally binding contract between Tri-Point Landscaping LLC, a Michigan limited liability company with its principal place of business in Washington Township, Macomb County, Michigan (hereinafter "Company," "we," "us," or "our"), and the individual, entity, or property owner engaging the Company for landscaping, lawn care, snow removal, outdoor lighting, pressure washing, or any ancillary property maintenance or improvement service (hereinafter "Client," "you," or "your").

WHEREAS, the Company is duly organized and operating as a licensed landscape and property services company serving residential and commercial clients in Macomb County and surrounding areas in the State of Michigan; and

WHEREAS, the Client desires to engage the Company for professional property services on the terms and conditions set forth herein;

NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the payment of agreed service fees, and other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree to be bound by this Agreement.

BY REQUESTING A QUOTE, SIGNING A SERVICE ESTIMATE OR PROPOSAL, AUTHORIZING WORK TO COMMENCE, OR PERMITTING THE COMPANY TO ACCESS THE CLIENT'S PROPERTY FOR SERVICE, THE CLIENT ACKNOWLEDGES HAVING READ, UNDERSTOOD, AND AGREED TO BE LEGALLY BOUND BY ALL TERMS AND CONDITIONS OF THIS AGREEMENT.`,
      },
    ],
  },
  {
    title: "Definitions",
    subsections: [
      {
        heading: "",
        body: `For purposes of this Agreement, the following terms shall have the meanings ascribed to them herein:

"Agreement" shall mean these Terms and Conditions of Service, together with any signed Estimate, Proposal, Service Contract, Supplemental Terms, or Work Order incorporated by reference herein, all of which shall collectively constitute the entire agreement between the parties.

"Client" shall mean the individual, entity, property owner, tenant, or authorized agent who engages or requests services from the Company, and who is financially and legally responsible for payment of all amounts due hereunder.

"Company" shall mean Tri-Point Landscaping LLC, its members, managers, officers, employees, agents, independent contractors, subcontractors, successors, and permitted assigns.

"Design Materials" shall mean any landscape designs, architectural drawings, CAD files, renderings, plant plans, planting diagrams, sketches, or other creative or technical works produced by the Company in connection with the provision of design services.

"Estimate" or "Proposal" shall mean a written document prepared by the Company describing the scope of proposed services, materials, pricing, and relevant terms, which shall become binding upon the Client's written acceptance or authorization of work.

"Force Majeure Event" shall mean any circumstance or event beyond the reasonable control of the affected party, including without limitation acts of God, hurricane, tornado, blizzard, ice storm, flood, earthquake, fire, epidemic, pandemic, governmental orders or regulations, war, civil unrest, labor disputes, supply chain disruptions, or equipment failure not attributable to the affected party's negligence.

"Service Property" shall mean the real property, lot, parcel, or premises identified in the applicable Estimate or Proposal at which the Company is engaged to perform services.

"Services" shall mean all landscaping, lawn maintenance, garden installation, snow removal, salting, sanding, pressure washing, outdoor lighting installation and maintenance, hardscape installation, and any other property improvement or maintenance services provided by the Company pursuant to this Agreement.

"Subcontractor" shall mean any licensed, insured, and qualified individual or entity engaged by the Company to perform specific components of the Services on the Company's behalf.`,
      },
    ],
  },
  {
    title: "Section 1 — Services",
    subsections: [
      {
        heading: "A. Scope of Work",
        body: `The specific Services to be provided by the Company shall be detailed in written Estimates, Proposals, or Service Agreements delivered to the Client prior to commencement of work. Such written instruments shall define the scope, methodology, materials, scheduling parameters, and pricing applicable to the engagement. The Company expressly reserves the right to make commercially reasonable adjustments to the scope of work, service methodology, equipment, or materials where, in the Company's sole professional judgment, such adjustments are reasonably necessary due to: (i) unforeseen site conditions not discoverable upon reasonable pre-service inspection; (ii) safety hazards or environmental concerns identified during service; (iii) material unavailability or supply chain disruptions; or (iv) regulatory or legal requirements. The Company shall provide the Client with reasonable notice of any material scope adjustment and, where applicable, a revised cost estimate prior to implementing such adjustment.`,
      },
      {
        heading: "B. Service Scheduling",
        body: `All service appointments are subject to and contingent upon crew availability, prevailing weather conditions, equipment operational readiness, and the Company's scheduling capacity at the time of booking. The Company reserves the right, exercisable in its reasonable discretion, to reschedule any service appointment due to inclement weather, unsafe working conditions as determined by Company supervisory personnel, mechanical equipment failure, or any other circumstance constituting a Force Majeure Event or otherwise beyond the Company's reasonable control. The Company shall use commercially reasonable efforts to provide timely notification to the Client of any scheduling change. Rescheduled services shall be performed as promptly as practicable given prevailing conditions and scheduling availability. The Company shall not be liable to the Client for any loss, damage, or inconvenience resulting from scheduling adjustments made consistent with this provision.`,
      },
      {
        heading: "C. Access to Property",
        body: `The Client shall be solely responsible for ensuring that the Company's personnel and equipment have safe, adequate, and unobstructed access to all areas of the Service Property on each scheduled service date. Client obligations with respect to property access include, without limitation: (i) ensuring that all gates, access points, and locked enclosures are unlocked and accessible prior to the scheduled service time; (ii) restraining, confining, or removing all pets, livestock, and animals from service areas; (iii) removing or relocating vehicles, equipment, furniture, and personal property that would obstruct service areas or impede access; (iv) providing advance written disclosure of the location of all in-ground irrigation systems, invisible pet fencing, electrical conduit, drainage systems, and other subsurface infrastructure; and (v) ensuring that the general condition of the property does not present unreasonable hazards to Company personnel. Tri-Point Landscaping LLC shall bear no liability for delays, incomplete service performance, or any additional charges necessitated by restricted, obstructed, or unsafe property access conditions attributable to the Client's failure to comply with this Section.`,
      },
      {
        heading: "D. Use of Subcontractors",
        body: `The Company expressly reserves the right, exercisable in its sole discretion, to engage licensed, bonded, insured, and professionally qualified Subcontractors to perform all or any portion of the Services. All Subcontractors engaged by the Company shall be required to maintain professional standards consistent with those required of the Company's direct employees and shall be subject to oversight and quality control by the Company. The engagement of Subcontractors shall not relieve the Company of its obligations under this Agreement with respect to the quality and completion of Services, except as otherwise expressly provided herein. The Client shall not directly engage, solicit, or contract with any Subcontractor identified through the Company during the term of any active service agreement and for a period of twelve (12) months thereafter.`,
      },
    ],
  },
  {
    title: "Section 2 — Estimates, Pricing, and Payment",
    subsections: [
      {
        heading: "A. Estimates and Proposals",
        body: `All written Estimates and Proposals issued by the Company shall remain valid and binding for a period of thirty (30) calendar days from the date of issuance, unless an alternative validity period is expressly stated therein. Estimates and Proposals are prepared based upon information available to the Company at the time of issuance, including information provided by the Client and conditions observable during the Company's initial site assessment. The Company reserves the right to revise any Estimate or Proposal in the event that actual site conditions, subsurface conditions, Client-provided information, or material costs differ materially from those upon which the original estimate was based. An Estimate or Proposal shall become a binding contractual obligation only upon: (i) the Client's written acceptance thereof; (ii) the Client's electronic acknowledgment via the Company's service management platform; or (iii) the Client's authorization, whether express or implied by conduct, for work to commence pursuant to such Estimate. Verbal agreements or representations shall not supersede or modify the terms of any written Estimate or Proposal.`,
      },
      {
        heading: "B. Payment Terms",
        body: `Payment for all Services shall be due and payable in full upon completion of the Services unless alternative payment terms are expressly agreed upon by the parties in a prior written instrument. For larger-scale installation projects, hardscape projects, or projects requiring significant advance material procurement, the Company may, at its sole discretion, require a deposit of up to fifty percent (50%) of the total estimated project cost prior to scheduling services or ordering materials. Such deposit requirement shall be specified in the applicable Estimate or Proposal. Invoices that remain unpaid for more than fifteen (15) calendar days following the invoice date shall be subject to: (i) a flat late fee of Fifteen Dollars ($15.00) per occurrence; and (ii) interest accruing on the outstanding balance at the rate of one and one-half percent (1.5%) per month (equivalent to eighteen percent (18%) per annum), or the maximum rate of interest permissible under applicable Michigan law, whichever is lower. The Client shall be responsible for all reasonable costs of collection, including court costs and attorney's fees, incurred by the Company in recovering delinquent amounts, to the extent permitted by applicable law.`,
      },
      {
        heading: "C. Accepted Payment Methods and Returned Instruments",
        body: `The Company accepts payment by personal or business check, major credit cards, debit cards, electronic funds transfer (ACH), and such other payment methods as may be designated by the Company from time to time. All payments by credit or debit card may be subject to applicable processing fees disclosed at the time of payment. Any check or electronic payment instrument returned unpaid by the Client's financial institution for any reason, including without limitation insufficient funds, account closure, or stop payment order, shall result in the immediate assessment of a returned instrument fee of Thirty-Five Dollars ($35.00), plus any bank-assessed charges incurred by the Company as a result of such return. The Company reserves the right to require future payments from any Client with a history of returned instruments to be made by certified check, money order, or other guaranteed funds.`,
      },
      {
        heading: "D. Price Adjustments for Recurring Service Agreements",
        body: `With respect to ongoing or recurring service agreements covering multiple service visits or seasons, the Company reserves the right to adjust service pricing at the commencement of each new service season or contract renewal period. The Company shall provide the Client with no less than thirty (30) calendar days' prior written notice of any such price adjustment, delivered to the Client's address or email address on file. The Client's continued engagement of services following the effective date of any notified price adjustment shall constitute the Client's acceptance of and agreement to such revised pricing. If the Client does not accept revised pricing, the Client must notify the Company in writing prior to the effective date of the adjustment, in which case the Company shall have the right to terminate the recurring service agreement upon such notice.`,
      },
      {
        heading: "E. Billing Disputes",
        body: `Any dispute, objection, or claim regarding the accuracy or validity of any invoice issued by the Company must be submitted to the Company in writing within ten (10) calendar days of the applicable invoice date. Written dispute notices must identify with reasonable specificity the invoice number, the amount disputed, and the factual and legal basis for the dispute. The Company shall investigate and respond to properly submitted billing disputes in good faith within a commercially reasonable time. Failure by the Client to submit a written dispute notice within the ten (10) day period shall constitute the Client's unequivocal acceptance of all charges reflected on such invoice and a waiver of any right to dispute such charges thereafter. Disputed amounts shall not excuse or suspend the Client's obligation to timely pay all undisputed invoice amounts.`,
      },
    ],
  },
  {
    title: "Section 3 — Cancellation and Rescheduling",
    subsections: [
      {
        heading: "A. Cancellation by Client — One-Time Services",
        body: `Clients may cancel a scheduled one-time service appointment without incurring any cancellation fee, provided that written or verbal cancellation notice is received by the Company no less than twenty-four (24) hours prior to the scheduled service commencement time. Cancellations received less than twenty-four (24) hours before the scheduled service time, and cancellations where the Company's crew arrives at the Service Property and is unable to perform services due to access issues, unsafe conditions, or other Client-attributable causes, shall be subject to a cancellation fee equal to twenty-five percent (25%) of the applicable service price, which fee represents a reasonable estimate of the crew scheduling, mobilization, fuel, and administrative costs incurred by the Company as a result of the late cancellation. Such cancellation fee shall be invoiced and payable pursuant to the payment terms set forth in Section 2 hereof.`,
      },
      {
        heading: "B. Cancellation by Client — Recurring Service Agreements",
        body: `Either party may terminate a recurring or ongoing service agreement upon thirty (30) calendar days' prior written notice delivered to the other party. All Services rendered and materials supplied prior to the effective date of termination shall remain due and payable in full at the contract rates then in effect, without proration, discount, or offset, unless otherwise expressly agreed in writing. The Company reserves the right to invoice and collect for any scheduled service visits falling within the thirty (30) day notice period, whether or not such services are performed, provided that the Company makes a good-faith effort to perform such services absent Client-imposed access restrictions.`,
      },
      {
        heading: "C. Deposit Forfeiture on Project Cancellations",
        body: `In the event that a project for which a deposit has been collected is subsequently cancelled by the Client, the following deposit refund provisions shall apply: (i) if cancellation occurs before the Company has procured materials, ordered plant materials, or committed to subcontractor scheduling, the Client shall receive a full refund of the deposit less any reasonable administrative and processing costs actually incurred by the Company; (ii) if cancellation occurs after the Company has ordered or procured materials, engaged subcontractors, or performed design or planning work in reliance on the engagement, the Client shall forfeit such portion of the deposit as is necessary to cover the Company's non-recoverable costs, including without limitation special-order materials, non-refundable vendor deposits, design fees, and committed subcontractor costs, with any remaining balance of the deposit refunded to the Client within a commercially reasonable time.`,
      },
      {
        heading: "D. Cancellation by the Company",
        body: `Tri-Point Landscaping LLC expressly reserves the right, exercisable in its sole and reasonable discretion, to cancel, suspend, or decline to initiate any service engagement in the event of: (i) conditions at the Service Property that, in the Company's professional judgment, present unreasonable safety risks to Company personnel, equipment, or third parties; (ii) the Client's failure to make timely payment on any outstanding invoice, whether related to the subject engagement or any prior service; (iii) Client conduct that is abusive, threatening, or hostile toward Company personnel; (iv) the Company's inability to obtain access to the Service Property; or (v) Force Majeure Events rendering performance impossible or commercially unreasonable. In the event of Company-initiated cancellation, the Client shall receive prompt notification thereof, and any unearned prepayments or deposits attributable to unperformed services shall be refunded within a commercially reasonable period.`,
      },
    ],
  },
  {
    title: "Section 4 — Satisfaction, Warranty, and Limitation of Liability",
    subsections: [
      {
        heading: "A. Workmanship Warranty",
        body: `The Company warrants that all Services shall be performed in a professional, workmanlike manner, consistent with the standards of practice generally prevailing in the landscaping and property services industry in Macomb County, Michigan, and in material conformance with the specifications set forth in the applicable Estimate or Proposal. This workmanship warranty is the Company's sole and exclusive warranty with respect to the performance of Services. Any Client who is dissatisfied with the quality of workmanship performed must provide written notice to the Company within five (5) business days following the date of service completion, specifically identifying the nature and location of the alleged deficiency. Failure to provide timely written notice within such period shall constitute acceptance of the completed Services and a waiver of any warranty claim related thereto. Upon timely receipt of a valid warranty claim, the Company shall elect, in its sole discretion, to either: (i) re-perform the deficient portion of the Services at no additional charge to the Client; or (ii) issue a credit against future services in an amount reasonably commensurate with the value of the deficient work. The remedies described herein shall constitute the Client's sole and exclusive remedy for any warranty claim.`,
      },
      {
        heading: "B. Exclusion of Plant and Material Warranty",
        body: `Notwithstanding any other provision of this Agreement, the Company expressly disclaims and excludes any warranty, express or implied, with respect to the survival, growth, long-term health, vigor, or aesthetic appearance of any plant material, sod, seed, bulbs, turf, or living organic material installed or provided in connection with Services, unless a limited plant warranty is expressly and specifically stated in a signed writing forming part of the applicable Estimate or Proposal. The Client acknowledges and agrees that plant and organic material survival is subject to numerous variables entirely outside the Company's control and that planting involves inherent risks regardless of the professional standards applied. Such variables include, without limitation: post-installation weather conditions including drought, frost, temperature extremes, and hail; soil composition, compaction, pH, and drainage characteristics; Client irrigation practices and watering frequency; pest infestation, disease, and fungal conditions; animal damage; and the Client's maintenance and care practices following installation. Any limited warranty expressly stated in a Proposal shall be void and unenforceable if the Client fails to follow the Company's post-installation care instructions.`,
      },
      {
        heading: "C. Limitation of Liability",
        body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY'S TOTAL CUMULATIVE LIABILITY TO THE CLIENT FOR ANY AND ALL CLAIMS, LOSSES, DAMAGES, OR CAUSES OF ACTION ARISING OUT OF OR RELATED TO THIS AGREEMENT OR THE SERVICES PROVIDED HEREUNDER, WHETHER SOUNDING IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, SHALL IN NO EVENT EXCEED THE TOTAL AMOUNT ACTUALLY PAID BY THE CLIENT TO THE COMPANY FOR THE SPECIFIC SERVICE ENGAGEMENT DIRECTLY GIVING RISE TO THE CLAIM. THE COMPANY SHALL NOT BE LIABLE TO THE CLIENT OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES OF ANY NATURE WHATSOEVER, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, LOSS OF USE, LOSS OF BUSINESS OPPORTUNITY, DIMINUTION IN PROPERTY VALUE, COST OF REPLACEMENT LANDSCAPING, OR DAMAGES NOT DIRECTLY AND PROXIMATELY CAUSED BY THE COMPANY'S NEGLIGENT ACTS OR OMISSIONS IN PERFORMING SERVICES. The Client acknowledges that the limitations of liability set forth herein represent a reasonable allocation of risk between sophisticated parties and were a material factor in the Company's agreement to provide Services at the agreed pricing.`,
      },
      {
        heading: "D. Pre-Existing Conditions and Unmarked Subsurface Infrastructure",
        body: `The Company shall not bear any liability whatsoever for damage to, disruption of, or destruction of underground utilities, irrigation lines and components, invisible pet fencing and associated wiring, drainage tiles and pipes, electrical conduit, cable or fiber optic lines, septic system components, or any other subsurface infrastructure located beneath the Service Property, where such infrastructure was not disclosed in advance by the Client or was not visibly marked at the time services were performed. THE CLIENT BEARS THE SOLE AND EXCLUSIVE OBLIGATION AND RESPONSIBILITY TO: (i) identify, disclose in writing to the Company, and cause to be physically marked the location of all underground utilities, irrigation systems, and subsurface infrastructure prior to the commencement of any digging, aerating, edging, grading, trenching, or other ground-disturbing work; and (ii) contact Michigan's "MISS DIG" utility notification system (dial 811) as required by Michigan law prior to any ground-disturbing work. The Company's disclaimer of liability under this Section applies regardless of whether damage results from the Company's direct contact with the subsurface infrastructure, provided that the Client failed to comply with the disclosure and marking obligations set forth herein.`,
      },
    ],
  },
  {
    title: "Section 5 — Snow Removal Services",
    subsections: [
      {
        heading: "A. Supplemental Terms — Scope and Applicability",
        body: `The terms set forth in this Section 5 are supplemental to and shall be read in conjunction with all other provisions of this Agreement. In the event of any conflict between this Section 5 and any other provision of this Agreement with respect to snow removal services specifically, the provisions of this Section 5 shall control and govern. Snow removal and ice management services are offered primarily to residential clients located within the Company's designated service areas; commercial property inquiries shall be evaluated on a case-by-case basis at the Company's discretion. Service trigger thresholds — being the minimum accumulation of snowfall or ice that will prompt a service visit — shall be specified in the applicable service agreement or Proposal. Where no specific trigger threshold is stated, the Company shall exercise professional judgment in determining the appropriate timing of service visits based on prevailing weather conditions, accumulation levels, and service area conditions.`,
      },
      {
        heading: "B. Limitation of Liability for Snow Removal Operations",
        body: `The Client acknowledges and agrees that snow plowing, salting, sanding, and ice management operations involve certain inherent and unavoidable risks of incidental property impact and that the Company's operations shall be conducted in a commercially reasonable manner consistent with prevailing industry standards. Notwithstanding any other provision of this Agreement, the Company shall not be liable for any of the following categories of damage, provided that the Company's operations were conducted in a commercially reasonable manner: (i) minor turf damage, grass browning, or lawn damage caused by snow plow blades, plow edges, or snow relocation; (ii) damage to landscaping, ornamental plantings, mulch beds, or decorative elements caused by snow accumulation, plow contact, or salt spray; (iii) surface discoloration, etching, or pitting of concrete, asphalt, pavers, or decorative stone attributable to ice melt application consistent with standard industry practice; or (iv) incidental damage to hardscape features, curbs, or edging not visible due to snow cover. The Client acknowledges that minor turf and landscaping damage is an inherent and foreseeable risk of snow removal services and constitutes an accepted trade-off for the safety and access benefits provided.`,
      },
      {
        heading: "C. No Guarantee of Complete Snow or Ice Elimination",
        body: `The Company does not guarantee or warrant the complete elimination, removal, or remediation of snow, ice, slippery conditions, black ice, refreezing, or other winter hazards from any portion of the Service Property. Snow removal services are designed to materially reduce accumulation and improve accessibility; however, the effectiveness of such services is subject to weather conditions including refreezing, continued snowfall during and after service, wind-driven snow accumulation, temperature fluctuations, and other conditions outside the Company's control. The Client retains ultimate and non-delegable responsibility for the safety of the Service Property and for the safety of all persons accessing such property, including without limitation guests, employees, contractors, mail carriers, and delivery personnel. The Client is strongly encouraged to supplement the Company's snow removal services with personal ice management measures, including the maintenance of adequate supplies of ice melt, sand, or other traction-improving materials for application between Company service visits.`,
      },
      {
        heading: "D. Service Priority and Route Scheduling",
        body: `During periods of significant weather events, including but not limited to major snowstorms, lake-effect snow events, and extended winter weather systems, the Company's ability to service all clients within its customary timeframes may be materially impacted by weather severity, equipment limitations, and the volume of concurrent service obligations. Service priority, route sequencing, and scheduling during major weather events shall be determined by the Company in its sole and reasonable discretion, based on considerations including client safety needs, geographic route efficiency, equipment capacity, and crew safety. The Client acknowledges that service delays during major weather events are foreseeable and does not constitute a breach of the service agreement, and the Client agrees to hold the Company harmless for reasonable delays attributable to weather-related operational constraints.`,
      },
    ],
  },
  {
    title: "Section 6 — Intellectual Property",
    subsections: [
      {
        heading: "Ownership of Design Materials",
        body: `All Design Materials, including without limitation landscape designs, architectural plans, engineering drawings, computer-aided design (CAD) files, three-dimensional renderings, planting plans, plant schedules, material specifications, and all derivative works thereof, prepared by the Company in connection with any service engagement, shall remain the exclusive intellectual property of Tri-Point Landscaping LLC, regardless of whether such materials are delivered to or used by the Client. The Company retains all rights, title, and interest in and to all Design Materials, including all copyright, patent, trade secret, and other intellectual property rights therein, whether or not such rights are registered.

Upon the Client's full and complete payment of all amounts due and owing to the Company for the applicable engagement, the Company hereby grants to the Client a limited, personal, non-exclusive, non-transferable, non-sublicensable license to use and reference the Design Materials solely in connection with the improvement, maintenance, or future development of the specific Service Property for which such materials were prepared. This license shall not permit the Client to: (i) reproduce, copy, or distribute the Design Materials for any other purpose; (ii) use the Design Materials in connection with any other property; (iii) modify, adapt, or create derivative works based upon the Design Materials without the Company's prior written consent; or (iv) transfer, assign, license, or otherwise convey any rights in the Design Materials to any third party. Any unauthorized use of Design Materials shall constitute a material breach of this Agreement and may give rise to claims for copyright infringement and other remedies available at law or in equity.`,
      },
    ],
  },
  {
    title: "Section 7 — Photography and Marketing",
    subsections: [
      {
        heading: "Company Photography Rights",
        body: `Tri-Point Landscaping LLC expressly reserves the perpetual, irrevocable, royalty-free right and license to photograph, videograph, and otherwise capture visual documentation of the Service Property and all completed work performed thereon, for any and all commercial purposes including without limitation: inclusion in the Company's portfolio of work; use in print and digital marketing materials, brochures, and presentations; publication on the Company's website and social media accounts; use in advertising campaigns; and submission to industry publications, award programs, or professional associations. The Company shall exercise reasonable efforts to avoid including images that identify the specific street address of the Service Property or that capture identifying personal information about the Client or members of the Client's household without the Client's separate written consent.

Any Client who objects to the Company's exercise of photography rights as described herein must provide written notice of such objection to the Company prior to the commencement of any services at the Service Property. Such written objection must be delivered to the Company sufficiently in advance of service commencement to allow the Company a reasonable opportunity to record and implement the restriction. Written objection to photography shall not affect the Client's obligation to pay for services or the Company's obligation to perform services. Absent a timely written objection, the Client shall be deemed to have consented to the photography and marketing rights described in this Section.`,
      },
    ],
  },
  {
    title: "Section 8 — Insurance",
    subsections: [
      {
        heading: "Company Insurance Coverage",
        body: `Tri-Point Landscaping LLC shall at all times during the term of any active service engagement maintain, at minimum, the following categories of commercial insurance coverage in amounts consistent with prevailing industry standards and applicable Michigan legal requirements: (i) Commercial General Liability insurance, providing coverage for bodily injury and property damage arising out of the Company's operations; and (ii) Workers' Compensation insurance as required by applicable Michigan law, covering the Company's employees against work-related injuries and occupational illness. Certificates of Insurance evidencing the foregoing coverage shall be made available to the Client upon reasonable written request submitted to the Company. Coverage levels and insurer information shall be provided as reflected in the then-current certificate.

The Client expressly acknowledges and agrees that the Company's insurance coverage is maintained solely for the Company's benefit and does not extend to, cover, or protect the Client's real or personal property, structures, vehicles, landscaping, or other assets or interests. The Client shall be solely responsible for maintaining adequate homeowner's insurance, commercial property insurance, umbrella liability coverage, or other appropriate insurance coverage for the Client's own property and liability exposures. The Client is strongly advised to review the Client's own insurance policies to confirm the scope of coverage applicable to third-party service contractors working on the Client's property and to obtain additional coverage if necessary.`,
      },
    ],
  },
  {
    title: "Section 9 — Governing Law and Dispute Resolution",
    subsections: [
      {
        heading: "A. Governing Law and Jurisdiction",
        body: `This Agreement and all disputes, claims, controversies, or causes of action arising out of or related to this Agreement, the Services, or the parties' relationship shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of laws principles or choice of law rules. The parties irrevocably consent to and agree that the exclusive jurisdiction and venue for any litigation or legal proceeding arising from or related to this Agreement shall be the state courts of Macomb County, Michigan, or the United States District Court for the Eastern District of Michigan, as appropriate based on subject matter jurisdiction. Each party irrevocably waives any objection to the laying of venue in such courts and any claim that such courts constitute an inconvenient forum.`,
      },
      {
        heading: "B. Mandatory Good-Faith Negotiation",
        body: `Prior to initiating any formal legal proceeding or mediation, the parties agree to engage in good-faith negotiation in a genuine effort to resolve any dispute, claim, or controversy arising out of or relating to this Agreement or the Services. A party asserting a claim shall provide written notice to the other party describing the nature of the dispute and the remedy sought. The parties shall have thirty (30) calendar days from the date of such written notice, or such longer period as the parties may agree in writing, to resolve the dispute through direct negotiation before proceeding to mediation or litigation.`,
      },
      {
        heading: "C. Non-Binding Mediation",
        body: `If any dispute is not resolved through good-faith negotiation within the period specified above, the parties agree, as a condition precedent to the initiation of any litigation, to submit the dispute to non-binding mediation before a mutually agreed-upon mediator experienced in commercial or contractor disputes. Mediation shall be initiated by either party upon written notice to the other party following the expiration of the negotiation period. The costs of the mediator's fees and any mediation facility charges shall be borne equally by the parties. Each party shall be responsible for its own attorney's fees and costs incurred in connection with mediation. The mediation process shall be completed within thirty (30) days of the appointment of the mediator unless extended by mutual written agreement. If mediation fails to resolve the dispute, either party may then pursue available legal remedies.`,
      },
      {
        heading: "D. Attorney's Fees",
        body: `In the event that any legal action, arbitration, or judicial proceeding is commenced by either party to enforce or interpret any provision of this Agreement or to recover amounts due hereunder, the prevailing party in such proceeding shall be entitled to recover from the non-prevailing party all reasonable attorney's fees, paralegal fees, court costs, and other litigation expenses actually incurred in connection with such proceeding, in addition to any other relief granted. For purposes of this Section, "prevailing party" shall be determined by the court or arbitrator in accordance with applicable law.`,
      },
    ],
  },
  {
    title: "Section 10 — Indemnification",
    subsections: [
      {
        heading: "Client's Obligation to Indemnify the Company",
        body: `To the fullest extent permitted by applicable law, the Client hereby agrees to defend, indemnify, and hold harmless Tri-Point Landscaping LLC and its members, managers, officers, employees, agents, independent contractors, Subcontractors, successors, and assigns (collectively, the "Indemnified Parties") from and against any and all claims, demands, actions, causes of action, suits, proceedings, losses, damages, liabilities, judgments, settlements, penalties, fines, costs, and expenses (including without limitation reasonable attorney's fees and court costs) arising out of or related to:

(i) The Client's material breach of any representation, warranty, covenant, or obligation under this Agreement;

(ii) Any misrepresentation by the Client regarding the physical condition of the Service Property, subsurface conditions, the location of utilities or infrastructure, or any other material fact upon which the Company reasonably relied in accepting the engagement or performing Services;

(iii) The Client's failure to comply with the Client's obligation to identify, disclose, and cause to be physically marked the location of underground utilities, irrigation systems, invisible pet fencing, drainage infrastructure, or any other subsurface feature prior to ground-disturbing work, as required by Section 1(C) hereof;

(iv) Any bodily injury, property damage, or other harm arising out of or occurring on the Service Property that is attributable to the condition of the Client's property, the Client's negligent acts or omissions, or the acts or omissions of the Client's guests, family members, or other third parties present on the property, where such injury or damage is not directly and proximately caused by the Company's own gross negligence or willful misconduct; and

(v) Any violation by the Client of applicable federal, state, or local laws or regulations in connection with the Service Property or the Client's conduct during the service engagement.

The Client's indemnification obligations under this Section shall survive the termination, expiration, or cancellation of this Agreement and shall not be limited by the Company's insurance coverage or the limitation of liability provisions set forth in Section 4(C).`,
      },
    ],
  },
  {
    title: "Section 11 — Miscellaneous Provisions",
    subsections: [
      {
        heading: "A. Entire Agreement",
        body: `This Agreement, together with any signed Estimate, Proposal, Service Contract, or Work Order issued in connection with a specific service engagement and expressly incorporated herein by reference, constitutes the entire agreement and understanding between the Company and the Client with respect to the subject matter hereof and supersedes and replaces all prior negotiations, representations, warranties, promises, understandings, and agreements between the parties, whether written or oral, relating to the same subject matter. No representations, inducements, promises, or agreements not contained in this Agreement shall be of any force or effect.`,
      },
      {
        heading: "B. Amendments and Modifications",
        body: `No amendment, modification, waiver, or supplementation of any provision of this Agreement shall be valid or binding unless made in writing and duly executed by an authorized representative of the Company. No course of dealing, course of performance, or trade usage shall modify or supplement any provision of this Agreement. Notwithstanding the foregoing, the Company reserves the right to update and revise these Terms and Conditions as provided in Section 13 hereof.`,
      },
      {
        heading: "C. Severability",
        body: `If any provision, clause, sentence, or portion of this Agreement is found to be invalid, void, unenforceable, or contrary to applicable law by a court or tribunal of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and all remaining provisions of this Agreement shall remain in full force and effect and shall be construed so as to give effect to the original intent of the parties to the greatest extent permissible under applicable law.`,
      },
      {
        heading: "D. Waiver",
        body: `No failure or delay by either party in exercising any right, power, or remedy under this Agreement shall operate as a waiver of such right, power, or remedy. No single or partial exercise of any right, power, or remedy shall preclude any other or further exercise of such right, power, or remedy, or the exercise of any other right, power, or remedy. No waiver shall be effective unless made in writing and signed by an authorized representative of the waiving party. A waiver on any particular occasion shall not be construed as a waiver of any subsequent breach or default.`,
      },
      {
        heading: "E. Force Majeure",
        body: `Neither party shall be in default or breach of this Agreement, and neither party shall be liable to the other party, for any delay in or failure of performance to the extent such delay or failure is directly caused by a Force Majeure Event, provided that: (i) the affected party provides reasonably prompt written notice to the other party of the occurrence and anticipated duration of the Force Majeure Event; and (ii) the affected party uses commercially reasonable efforts to mitigate the effects of the Force Majeure Event and to resume performance as promptly as practicable. Force Majeure Events shall not excuse the Client's obligation to pay for Services already rendered prior to the occurrence of such event.`,
      },
      {
        heading: "F. Notices",
        body: `All written notices, demands, requests, or other communications required or permitted under this Agreement shall be in writing and shall be deemed duly delivered upon: (i) personal delivery to the recipient; (ii) transmission by electronic mail to the recipient's email address on file with the Company, with confirmation of receipt; or (iii) deposit in the United States Mail, addressed to the recipient at the address maintained on file with the Company, with first-class postage prepaid. Either party may update its address or email for notices by providing written notice to the other party pursuant to this Section.`,
      },
      {
        heading: "G. No Third-Party Beneficiaries",
        body: `This Agreement is made solely for the benefit of the Company and the Client. Nothing in this Agreement, express or implied, is intended to or shall confer upon any other person or entity any legal or equitable right, benefit, or remedy of any nature whatsoever under or by reason of this Agreement, except that the Company's Subcontractors and the Indemnified Parties described in Section 10 shall be third-party beneficiaries of the indemnification provisions of this Agreement.`,
      },
      {
        heading: "H. Assignment",
        body: `The Client may not assign, transfer, delegate, or subcontract any of its rights or obligations under this Agreement without the prior written consent of the Company. The Company may freely assign this Agreement and any of its rights or obligations hereunder to any affiliate, successor entity, or purchaser of all or substantially all of the Company's business assets, without the Client's consent.`,
      },
    ],
  },
  {
    title: "Section 12 — Contact Information",
    subsections: [
      {
        heading: "Tri-Point Landscaping LLC",
        body: `Washington Township, Macomb County, Michigan\nPrimary Service Areas: Washington Township | Macomb Township | Shelby Township | Romeo\n\nElectronic Mail: tripointlandscaping@gmail.com\nTelephone: (586) 327-8080\nWebsite: www.tripointlandscaping.com\n\nAll written notices, formal requests, billing disputes, warranty claims, and legal correspondence should be directed to the Company at the contact information set forth above. The Company's normal business hours for telephone inquiries are Monday through Friday. Response times for written inquiries are as specified in the applicable section of this Agreement or, where not otherwise specified, within a commercially reasonable period not to exceed five (5) business days.`,
      },
    ],
  },
  {
    title: "Section 13 — Amendments to These Terms",
    subsections: [
      {
        heading: "Right to Revise; Effect of Continued Use",
        body: `Tri-Point Landscaping LLC expressly reserves the right to modify, amend, supplement, or restate these Terms and Conditions of Service at any time, in whole or in part, at its sole and absolute discretion, without prior notice to individual Clients except as may be required by applicable law. Any such modification shall become effective upon publication of the revised Terms and Conditions on the Company's website at www.tripointlandscaping.com/terms-and-conditions, which shall be identified by an updated Effective Date. For material amendments that substantially alter the Client's rights or obligations under this Agreement, the Company shall endeavor, where practicable, to provide notice to existing Clients by electronic mail or through a notice posted on the Website.

The Client's continued use of the Company's website, continued engagement of the Company's services, or failure to exercise available cancellation rights following the publication of any revised Terms and Conditions shall constitute the Client's unequivocal acceptance of and binding agreement to such revised terms. The controlling and current version of this Agreement shall at all times be the version published on the Company's website. It is the sole and independent responsibility of each Client to periodically review these Terms and Conditions to remain apprised of any changes. Clients who do not agree to revised Terms must notify the Company in writing and discontinue use of the Company's services prior to the effective date of the revision.`,
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
