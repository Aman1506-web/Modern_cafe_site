"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-14 pt-6 sm:px-6">
        <SectionWrapper>
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <h1 className="display text-4xl font-extrabold text-brown">
              Visit us or say hello
            </h1>
            <p className="mt-2 text-brown/70">
              We love hosting coffee dates, birthdays, and study jams.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Address</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  Bakehouse Café, 21st Street, Jubilee Hills, Hyderabad
                </p>
              </div>
              <div className="space-y-2">
                <Label>Call us</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  +91 88888 88888
                </p>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  hello@bakehousecafe.com
                </p>
              </div>
              <div className="space-y-2">
                <Label>Opening hours</Label>
                <p className="rounded-2xl bg-amber-50 p-3 text-brown">
                  Daily: 8:00 AM – 11:00 PM
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Label htmlFor="msg">Message</Label>
              <textarea
                id="msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your query or event details..."
                className="h-32 w-full rounded-2xl border border-brown/15 bg-amber-50 p-3 text-sm text-brown outline-none focus:border-brown focus:shadow-soft"
              />
              <Button className="rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90">
                Send message
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
