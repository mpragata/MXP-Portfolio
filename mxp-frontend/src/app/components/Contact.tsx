"use client";

import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await axios.post("/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err?.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full text-white bg-black hover:bg-gray-500 hover:text-white py-2 rounded font-medium disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2 text-center">
            Message sent successfully!
          </p>
        )}
        {status === "error" && <p className="text-red-600 mt-2">{errorMsg}</p>}
      </form>
    </section>
  );
}
