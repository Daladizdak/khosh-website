"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { db, storage } from "@/lib/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function EnquiryPage() {
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("Kitchen Renovation");
  const [message, setMessage] = useState("");

  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const remaining = 3 - images.length;
    const allowed = files.slice(0, remaining);

    setImages((prev) => [...prev, ...allowed]);
    setPreviews((prev) => [
      ...prev,
      ...allowed.map((f) => URL.createObjectURL(f)),
    ]);

    e.target.value = "";
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    
      if (!consent) {
    alert("You must agree to the privacy policy.");
    setLoading(false);
    return;
  }

    try {
      
      const enquiryRef = await addDoc(collection(db, "enquiries"), {
        name,
        email,
        phone,
        project,
        message,
        status: "new",
        createdAt: serverTimestamp(),
        images: [],
      });

      const imageUrls: string[] = [];

     
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const storageRef = ref(
          storage,
          `enquiries/${enquiryRef.id}/${Date.now()}-${image.name}`
        );

        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      
      if (imageUrls.length > 0) {
        await updateDoc(doc(db, "enquiries", enquiryRef.id), {
          images: imageUrls,
        });
      }

      alert("Your enquiry has been sent successfully.");

     
      setName("");
      setEmail("");
      setPhone("");
      setProject("Kitchen Renovation");
      setMessage("");
      setImages([]);
      setPreviews([]);
    } catch (err) {
      console.error("Enquiry failed:", err);
      alert("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <section className="bg-[#6f7f5a] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Request a Free Quote</h1>
        <p className="max-w-2xl mx-auto text-lg px-6">
          Send your details and images — we’ll review them in our dashboard.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full border rounded-lg px-4 py-3"
            />

            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>Kitchen Renovation</option>
              <option>Bathroom Renovation</option>
              <option>General Construction</option>
              <option>Other</option>
            </select>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              placeholder="Project details"
              className="w-full border rounded-lg px-4 py-3"
            />

            {/* Images */}
            <div>
              <label className="block mb-2 font-medium">
                Upload Images (up to 3)
              </label>

              {images.length < 3 && (
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
              )}

              <div className="flex gap-3 mt-3 flex-wrap">
                {previews.map((src, i) => (
                  <div key={i} className="relative">
                    <img
                      src={src}
                      className="w-28 h-28 object-cover rounded border"
                      alt="Preview"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <label className="text-sm">
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="underline text-[#6f7f5a]"
                >
                  Privacy Policy
                </a>{" "}
                and consent to my data being stored for the purpose of responding to my
                enquiry.
              </label>
            </div>

            <button
              disabled={loading}
              className="w-full bg-[#6f7f5a] text-white py-4 rounded-lg text-lg disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
