import { useState, useEffect } from 'react'
import {
  Shield, Package, Globe, Mail, Phone, MapPin,
  ChevronRight, CheckCircle, Building2, Award,
  FileText, Lock, ExternalLink, Menu, X, ArrowRight,
  Zap, Users, Handshake
} from 'lucide-react'

/* ─────────────────────────────────────────────
   PRIVACY POLICY VIEW
───────────────────────────────────────────── */
function PrivacyPolicy({ setView }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={() => setView('home')}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
      >
        ← Back to Home
      </button>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-3 mb-2">
          <Lock size={28} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        </div>
        <p className="text-slate-500 text-sm mb-8">Last Updated: April 16, 2026 &nbsp;|&nbsp; Effective Date: April 16, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Introduction</h2>
            <p>Services Familiar LLC ("Company," "we," "us," or "our") is a United States-based limited liability company engaged in the distribution and resale of licensed software, digital keys, and related digital entertainment products. We are committed to protecting your privacy and handling your personal information with the utmost care and transparency. This Privacy Policy describes how we collect, use, disclose, and safeguard information obtained through our website and business operations.</p>
            <p className="mt-3">By accessing our website or engaging in a business relationship with us, you acknowledge and agree to the terms set forth in this Privacy Policy. If you do not agree with the practices described herein, please discontinue use of our website and services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Information We Collect</h2>
            <h3 className="font-semibold text-slate-800 mt-4 mb-2">2.1 Information You Provide Directly</h3>
            <p>When you contact us through our inquiry forms, request a quote, or enter into a business agreement, we may collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name and job title</li>
              <li>Business or company name and registration details</li>
              <li>Business email address and telephone number</li>
              <li>Billing and invoice address</li>
              <li>Payment and transaction information (processed via PCI-DSS compliant third-party processors)</li>
              <li>Order history and licensing details</li>
            </ul>
            <h3 className="font-semibold text-slate-800 mt-4 mb-2">2.2 Information Collected Automatically (Cookies & Tracking)</h3>
            <p>When you visit our website, we may automatically collect technical data, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, referring URLs, and time spent on pages</li>
              <li>Session cookies required for site functionality</li>
              <li>Analytics cookies (e.g., Google Analytics) to understand aggregate user behavior</li>
            </ul>
            <p className="mt-2">You may control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Order Processing & Fulfillment:</strong> To process transactions, deliver digital license keys, and manage your account and order history.</li>
              <li><strong>Microsoft CSP & Publisher Compliance:</strong> As a participant in authorized reseller programs (including Microsoft Cloud Solution Provider channels), we are required to maintain accurate records of end-user data to comply with publisher licensing agreements.</li>
              <li><strong>Customer Support:</strong> To respond to inquiries, resolve disputes, and provide after-sales service.</li>
              <li><strong>Communications:</strong> To send order confirmations, invoices, license delivery notifications, and, where permitted, relevant product and service updates.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable US federal and state laws, regulatory requirements, and court orders.</li>
              <li><strong>Security & Fraud Prevention:</strong> To detect, investigate, and prevent fraudulent transactions, unauthorized access, and other illegal activities.</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website's performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Information Sharing & Disclosure</h2>
            <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Software Publishers & Authorized Distributors:</strong> We may share necessary licensing and end-user information with upstream distributors or publishers (e.g., Microsoft, Adobe, or other software vendors) as required to validate licenses, process orders, or fulfill publisher compliance obligations.</li>
              <li><strong>Payment Processors:</strong> Billing details are shared with our PCI-DSS compliant payment processing partners solely to complete transactions.</li>
              <li><strong>Cloud & IT Service Providers:</strong> We engage trusted third-party service providers (hosting, email, CRM) under data processing agreements that restrict their use of your data.</li>
              <li><strong>Legal Authorities:</strong> We may disclose information if required by law, subpoena, or government request, or to protect the rights, property, or safety of our company, clients, or the public.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of company assets, customer information may be transferred as part of that transaction, subject to equivalent privacy protections.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">5. Data Security</h2>
            <p>We implement industry-standard technical and organizational safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>SSL/TLS encryption for all data transmitted through our website</li>
              <li>Secure server infrastructure hosted within SSAE 18 / SOC 2-compliant data centers</li>
              <li>Role-based access controls limiting employee access to personal data</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Retention of payment card data exclusively through certified PCI-DSS third-party processors</li>
            </ul>
            <p className="mt-3">Despite these measures, no method of electronic storage or transmission is 100% secure. We encourage you to use strong passwords and to notify us immediately if you suspect any unauthorized use of your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">6. Data Retention</h2>
            <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this Policy, including for the duration of our business relationship and as required by applicable law (e.g., tax records, licensing records). When data is no longer needed, we securely delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">7. Your Rights & Choices (CCPA / GDPR)</h2>
            <p>We acknowledge the privacy rights available to individuals under applicable law, including the <strong>California Consumer Privacy Act (CCPA)</strong> and the <strong>EU General Data Protection Regulation (GDPR)</strong>. Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information (subject to legal retention obligations)</li>
              <li>Opt out of non-essential communications</li>
              <li>Lodge a complaint with a relevant supervisory authority</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <strong>info@servicesfamiliar.com</strong>. We will respond to verifiable requests within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">8. Third-Party Links</h2>
            <p>Our website may contain links to external websites operated by third parties. This Privacy Policy does not apply to those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">9. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. We will post the revised policy on this page with an updated effective date. Your continued use of our services after any changes constitutes your acceptance of the revised Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">10. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
            <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900">Services Familiar LLC</p>
              <p>30 N Gould St Ste N, Sheridan, WY 82801, USA</p>
              <p>Email: info@servicesfamiliar.com</p>
              <p>Phone: +1 (307) 310-2877</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TERMS OF SERVICE VIEW
───────────────────────────────────────────── */
function TermsOfService({ setView }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button
        onClick={() => setView('home')}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
      >
        ← Back to Home
      </button>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-3 mb-2">
          <FileText size={28} className="text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        </div>
        <p className="text-slate-500 text-sm mb-8">Last Updated: April 16, 2026 &nbsp;|&nbsp; Effective Date: April 16, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">1. Acceptance of Terms</h2>
            <p>These Terms of Service ("Terms") constitute a legally binding agreement between Services Familiar LLC, a limited liability company organized and existing under the laws of the United States ("Company," "we," "us," or "our"), and you, the individual or entity accessing our website or purchasing our products and services ("Client," "you," or "your").</p>
            <p className="mt-3">By accessing our website, placing an order, or otherwise engaging in a business relationship with us, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you must immediately cease use of our website and refrain from placing any orders.</p>
            <p className="mt-3">These Terms apply to all transactions, including the purchase of software licenses, digital keys, subscription activations, and any other digital goods or services offered by the Company.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">2. Eligibility & Business Use</h2>
            <p>Our services are intended for business entities and individuals who are at least 18 years of age and have the legal capacity to enter into binding contracts. By placing an order, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You are authorized to enter into this agreement on behalf of yourself or your organization.</li>
              <li>You will use all software licenses and digital products in compliance with the respective publisher's End User License Agreement (EULA).</li>
              <li>You will not use our products for any unlawful purpose, including but not limited to circumventing geographic restrictions or violating intellectual property laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">3. Digital Goods Policy</h2>
            <h3 className="font-semibold text-slate-800 mt-4 mb-2">3.1 Instant Digital Delivery</h3>
            <p>All products sold by the Company are digital goods, including but not limited to software license keys, activation codes, subscription credentials, and digital gift cards. Upon successful payment verification, digital keys and license codes are delivered electronically — typically via email or through our order portal — and delivery is considered complete and instantaneous.</p>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">3.2 Refund & Return Policy</h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-2">
              <p className="font-semibold text-amber-800 mb-1">⚠️ Important Notice Regarding Refunds</p>
              <p className="text-amber-700">Due to the irreversible nature of digital product delivery, <strong>all sales of digital keys, license codes, and activation codes are final once the product key has been revealed, transmitted, or accessed by the Client.</strong> No refunds, exchanges, or credits will be issued after a digital key has been disclosed to the buyer.</p>
            </div>
            <p className="mt-3">Exceptions to the no-refund policy may be considered solely in the following circumstances, at the Company's sole discretion:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The digital key delivered is demonstrably non-functional and the Company is unable to provide a valid replacement key within a reasonable timeframe.</li>
              <li>A duplicate key was erroneously delivered for the same order.</li>
              <li>The order was not fulfilled within the agreed delivery window through no fault of the Client.</li>
            </ul>
            <p className="mt-3">All refund requests must be submitted in writing to info@servicesfamiliar.com within 48 hours of order completion and must include the original order confirmation number and a detailed description of the issue.</p>

            <h3 className="font-semibold text-slate-800 mt-4 mb-2">3.3 License Compliance</h3>
            <p>The Client is solely responsible for ensuring that all purchased licenses are activated and used in compliance with the applicable publisher EULA, including seat limitations, geographic restrictions, and permitted use cases. The Company shall not be held liable for any license invalidation resulting from Client misuse or violation of publisher terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">4. Pricing, Payment & Taxes</h2>
            <p>All prices are quoted in US Dollars (USD) unless otherwise specified. Prices are subject to change without notice prior to order confirmation. Upon acceptance of an order, the agreed price is binding.</p>
            <p className="mt-3">Payment is due in full at the time of purchase unless a separate payment agreement has been executed in writing. We accept major credit cards, ACH bank transfers, and other payment methods as indicated at checkout. The Company reserves the right to cancel any order if payment is not successfully processed.</p>
            <p className="mt-3">The Client is responsible for all applicable taxes, duties, tariffs, and import fees associated with the purchase, unless the Client provides a valid tax exemption certificate acceptable to the Company.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">5. Disclaimers & Warranties</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-semibold text-blue-900 mb-2">Publisher Warranties — Important Disclosure</p>
              <p className="text-blue-800">The Company acts exclusively as an authorized reseller and distributor of digital products. <strong>All product warranties, quality guarantees, technical support obligations, and service-level commitments applicable to software products are provided solely by the respective software publishers (e.g., Microsoft Corporation, Adobe Inc., or other applicable vendors), and NOT by Services Familiar LLC.</strong></p>
            </div>
            <p className="mt-4">The Company makes no independent warranties, express or implied, regarding:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The fitness of any software product for a particular purpose</li>
              <li>The uninterrupted or error-free operation of any software</li>
              <li>The compatibility of any product with the Client's hardware or software environment</li>
              <li>The accuracy of product descriptions provided by publishers</li>
            </ul>
            <p className="mt-3">THE COMPANY'S WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">6. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL Services Familiar LLC, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, AGENTS, OR SUPPLIERS BE LIABLE FOR ANY:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
              <li>LOSS OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL</li>
              <li>DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA</li>
              <li>DAMAGES RESULTING FROM THIRD-PARTY CONDUCT OR PUBLISHER DECISIONS (E.G., LICENSE REVOCATION)</li>
            </ul>
            <p className="mt-3">IN ALL CASES, THE COMPANY'S AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC ORDER GIVING RISE TO THE CLAIM WITHIN THE IMMEDIATELY PRECEDING THIRTY (30) DAYS.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">7. Intellectual Property</h2>
            <p>All software products, digital keys, and associated materials distributed by the Company remain the intellectual property of their respective publishers and are licensed — not sold — to the end user, subject to each publisher's EULA. The Company retains all rights, title, and interest in its own website content, branding, and proprietary materials.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">8. Governing Law & Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the <strong>United States of America and the State of Wyoming</strong>, without regard to its conflict of law provisions.</p>
            <p className="mt-3">Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof shall first be submitted to good-faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, it shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association (AAA), with arbitration to take place in Wyoming, United States.</p>
            <p className="mt-3">Both parties expressly waive any right to a jury trial in connection with any dispute arising under these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">9. Modifications to Terms</h2>
            <p>The Company reserves the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Your continued use of our services following any changes constitutes your binding acceptance of the updated Terms. We encourage you to review these Terms periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">10. Contact Information</h2>
            <p>For questions, legal notices, or formal inquiries regarding these Terms of Service, please contact:</p>
            <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900">Services Familiar LLC</p>
              <p>30 N Gould St Ste N, Sheridan, WY 82801, USA</p>
              <p>Email: info@servicesfamiliar.com</p>
              <p>Phone: +1 (307) 310-2877</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HOME VIEW
───────────────────────────────────────────── */
function HomeView({ setView }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a5e] via-[#1a3a7a] to-[#0c2251] text-white">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Decorative circle accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-indigo-400 rounded-full opacity-10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 text-sm font-medium tracking-wide">
            <Shield size={14} className="text-blue-300" />
            <span className="text-blue-100">US-Based &amp; Authorized Software Distributor</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mb-6">
            Leading Digital Distribution &amp; Software Solutions.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
            Providing authentic software licensing and digital entertainment products for businesses and consumers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0f2a5e] font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Sales <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Shield size={20} className="text-blue-700" />, label: 'Authorized Reseller' },
            { icon: <Zap size={20} className="text-blue-700" />, label: 'Instant Key Delivery' },
            { icon: <Globe size={20} className="text-blue-700" />, label: 'Global Distribution' },
            { icon: <Award size={20} className="text-blue-700" />, label: 'Compliance-First' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Us ── */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Bridging Software Publishers &amp; Global Markets
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              As a US-based technology distributor, we specialize in bridging the gap between top-tier software publishers and global markets. Our mission is to deliver secure, instant, and official digital keys while maintaining the highest standards of compliance.
            </p>
            <ul className="space-y-3">
              {[
                'Official channel partnerships with leading software publishers',
                'Streamlined, secure, and fully digital fulfillment',
                'Dedicated support for SMB and enterprise clients',
                'Full compliance with US regulations and publisher licensing terms',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl p-10 border border-slate-200">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '10K+', label: 'License Keys Delivered' },
                { value: '99.9%', label: 'Delivery Success Rate' },
                { value: '50+', label: 'Publisher Partnerships' },
                { value: '24/7', label: 'Order Processing' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-center">
                  <div className="text-3xl font-extrabold text-[#0f2a5e] mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Package size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Software Licensing</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Official reseller of productivity software and operating systems for SMBs and enterprise clients. We provide volume licensing, subscription management, and multi-seat deployments through authorized publisher channels.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Microsoft 365', 'Windows OS', 'Enterprise Volume', 'CSP Channel'].map(tag => (
                  <span key={tag} className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#0f2a5e] rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Globe size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Entertainment</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wholesale distribution of digital entertainment products and gift cards for the global community. We source from authorized publishers and provide bulk ordering solutions for platforms and retailers worldwide.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Gift Cards', 'Game Keys', 'Streaming Credits', 'Wholesale B2B'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-50 text-slate-700 font-medium px-3 py-1 rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[#0f2a5e] to-[#1a3a7a] rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full" />
          <div className="relative">
            <Handshake size={40} className="text-blue-300 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our sales team to discuss volume licensing, partnership opportunities, and wholesale pricing for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
              <a
                href="mailto:info@servicesfamiliar.com"
                className="inline-flex items-center gap-3 bg-white text-[#0f2a5e] font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                <Mail size={18} /> info@servicesfamiliar.com
              </a>
              <a
                href="tel:+13073102877"
                className="inline-flex items-center gap-3 text-white border border-white/30 font-medium px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone size={18} /> +1 (307) 310-2877
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────
   MAIN APP
───────────────────────────────────────────── */
export default function App() {
  const [view, setView] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', action: () => { setView('home'); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) } },
    { label: 'About Us', action: () => { setView('home'); setMenuOpen(false); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { label: 'Services', action: () => { setView('home'); setMenuOpen(false); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { label: 'Contact', action: () => { setView('home'); setMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setView('home')}
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#0f2a5e] rounded-lg flex items-center justify-center">
              <Building2 size={16} className="text-white" />
            </div>
            <span className="text-[#0f2a5e] font-bold text-lg tracking-tight leading-none">
              Services Familiar<span className="text-blue-600"> LLC</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={link.action}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0f2a5e] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => { setView('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#0f2a5e] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#1a3a7a] transition-colors"
            >
              Contact Sales <ChevronRight size={14} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={link.action}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-[#0f2a5e] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => { setView('home'); setMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
                className="w-full bg-[#0f2a5e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1a3a7a] transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'privacy' && <PrivacyPolicy setView={setView} />}
        {view === 'terms' && <TermsOfService setView={setView} />}
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a1e3d] text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 size={16} className="text-white" />
                </div>
                <span className="text-white font-bold text-lg">Services Familiar LLC</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                A US-based software distribution company delivering authentic digital licensing solutions to businesses and consumers worldwide.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => { setView('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100) }} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => { setView('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100) }} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => setView('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setView('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Information</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Building2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><span className="text-white font-medium">Services Familiar LLC</span><br />US Entity (Wyoming) — Limited Liability Company</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>30 N Gould St Ste N, Sheridan, WY 82801, USA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-blue-400 shrink-0" />
                  <span>info@servicesfamiliar.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-blue-400 shrink-0" />
                  <span>+1 (307) 310-2877</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Services Familiar LLC. All rights reserved. US Entity.
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setView('privacy')}
                className="flex items-center gap-1.5 px-4 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Lock size={13} /> Privacy Policy
              </button>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => setView('terms')}
                className="flex items-center gap-1.5 px-4 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              >
                <FileText size={13} /> Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
