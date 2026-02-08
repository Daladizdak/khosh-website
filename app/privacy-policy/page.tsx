import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p>
          KHOSH Construction LTD is committed to protecting your privacy. This
          policy explains how we collect, use, and protect your personal data in
          accordance with the UK GDPR.
        </p>

        <h2 className="text-2xl font-semibold">What data we collect</h2>
        <ul className="list-disc ml-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Project details and images you provide</li>
        </ul>

        <h2 className="text-2xl font-semibold">Why we collect your data</h2>
        <p>
          We collect your data solely to respond to enquiries, provide quotes,
          and communicate regarding your construction project.
        </p>

        <h2 className="text-2xl font-semibold">How your data is stored</h2>
        <p>
          Your data is stored securely using Google Firebase services. Access is
          restricted to authorised administrators only.
        </p>

        <h2 className="text-2xl font-semibold">Data retention</h2>
        <p>
          Enquiry data is retained for up to 12 months unless further
          communication is required, after which it may be deleted.
        </p>

        <h2 className="text-2xl font-semibold">Your rights</h2>
        <p>
          You have the right to request access to your data, request correction,
          or request deletion of your personal data.
        </p>

        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>
          For any privacy-related requests, please contact:
          <br />
          <strong>aminnkhoshkhoo@yahoo.co.uk</strong>
        </p>
      </main>

      <Footer />
    </>
  );
}
