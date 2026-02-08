"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auth, db } from "@/lib/firebase";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status?: "new" | "contacted" | "closed";
  createdAt?: Timestamp;
  images?: string[]; 
};


export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setLoading(false);

      if (u) {
        const q = query(
          collection(db, "enquiries"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        setEnquiries(
          snapshot.docs.map((d) => ({
            id: d.id,
            ...(d.data() as Omit<Enquiry, "id">),
          }))
        );
      }
    });
  }, []);

  
  async function updateStatus(
    id: string,
    status: "new" | "contacted" | "closed"
  ) {
    await updateDoc(doc(db, "enquiries", id), { status });

    
    setEnquiries((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, status } : e
      )
    );
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Invalid email or password");
    }
  }

  if (loading) {
    return <p className="p-10">Loading...</p>;
  }

  
  if (!user) {
    return (
      <>
        <Header />

        <main className="px-10 py-20 max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-600">{error}</p>}

            <button className="bg-[#6f7f5a] text-white py-3 rounded">
              Login
            </button>
          </form>
        </main>

        <Footer />
      </>
    );
  }

  
  return (
    <>
      <Header />

      <main className="px-10 py-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => signOut(auth)}
            className="text-sm underline"
          >
            Log out
          </button>
        </div>

        {enquiries.length === 0 && <p>No enquiries yet.</p>}

        {enquiries.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Message</th>
                  <th className="border p-2">Images</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((e) => (
                  <tr
                      key={e.id}
                      className={e.status === "new" ? "bg-yellow-50" : ""}
                    >
                      <td className="border p-2">{e.name}</td>
                      <td className="border p-2">{e.email}</td>
                      <td className="border p-2">{e.phone}</td>
                      <td className="border p-2 max-w-xs">
                        <div className="truncate">{e.message}</div>
                      </td>

                      {/* IMAGES */}
                      <td className="border p-2">
                        {e.images && e.images.length > 0 ? (
                          <div className="flex gap-2 flex-wrap">
                            {e.images.map((url, i) => (
                              <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={url}
                                  alt="Enquiry"
                                  className="w-16 h-16 object-cover rounded border hover:opacity-80"
                                />
                              </a>
                            ))}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">No images</span>
                        )}
                      </td>

                      {/* STATUS */}
                      <td className="border p-2 font-medium">
                        {e.status || "new"}
                      </td>

                      {/* ACTIONS */}
                      <td className="border p-2 space-x-2">
                        {e.status !== "contacted" && (
                          <button
                            onClick={() => updateStatus(e.id, "contacted")}
                            className="px-2 py-1 text-sm bg-blue-600 text-white rounded"
                          >
                            Contacted
                          </button>
                        )}

                        {e.status !== "closed" && (
                          <button
                            onClick={() => updateStatus(e.id, "closed")}
                            className="px-2 py-1 text-sm bg-gray-700 text-white rounded"
                          >
                            Closed
                          </button>
                        )}
                      </td>
                    </tr>

                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
