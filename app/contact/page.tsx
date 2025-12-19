"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@qantuslab.com",
    href: "mailto:hello@qantuslab.com",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add document to Firestore 'contacts' collection
      await addDoc(collection(db, 'contacts'), {
        name: formState.name,
        email: formState.email,
        company: formState.company || null,
        message: formState.message,
        timestamp: serverTimestamp(),
        status: 'new', // For tracking if message has been read/responded to
      });

      setIsSubmitted(true);
      setFormState({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business with AI? Let&apos;s start a
            conversation. Fill out the form below and we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              {contactInfo.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.title}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium">{item.value}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We&apos;ll get
                        back to you within 24 hours.
                      </p>
                      <Button
                        className="mt-6"
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium"
                          >
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or ask any questions..."
                          rows={6}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
