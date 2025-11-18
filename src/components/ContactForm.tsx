"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ValidationError {
  field: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setValidationErrors([]);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (data.details && Array.isArray(data.details)) {
          setValidationErrors(data.details);
        }
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear validation error for this field
    setValidationErrors((prev) =>
      prev.filter((err) => err.field !== e.target.name)
    );
  };

  const getFieldError = (fieldName: string) => {
    return validationErrors.find((err) => err.field === fieldName)?.message;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {status === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle
            className="text-green-600 flex-shrink-0 mt-0.5"
            size={20}
          />
          <div>
            <h3 className="font-semibold text-green-900">
              Message sent successfully!
            </h3>
            <p className="text-green-700 text-sm">
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle
            className="text-red-600 flex-shrink-0 mt-0.5"
            size={20}
          />
          <div>
            <h3 className="font-semibold text-red-900">
              Failed to send message
            </h3>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
            getFieldError("name") ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your name"
        />
        {getFieldError("name") && (
          <p className="mt-1 text-sm text-red-600">{getFieldError("name")}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
            getFieldError("email") ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="your.email@example.com"
        />
        {getFieldError("email") && (
          <p className="mt-1 text-sm text-red-600">{getFieldError("email")}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
            getFieldError("subject") ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="What is this about?"
        />
        {getFieldError("subject") && (
          <p className="mt-1 text-sm text-red-600">
            {getFieldError("subject")}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none ${
            getFieldError("message") ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your message..."
        />
        {getFieldError("message") && (
          <p className="mt-1 text-sm text-red-600">
            {getFieldError("message")}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
          status === "loading"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
        }`}>
        {status === "loading" ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
