"use client";
import React, { useRef, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Github, Mail, MapPin } from "lucide-react";
import { contactContent, profile } from "@/data";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type FormData = {
  firstName: string;
  lastName: string;
  fromEmail: string;
  message: string;
};
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  throw new Error("Missing EmailJS environment variables");
}
const Contact = () => {
  const radius = 100;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const motionBg = useMotionTemplate`
        radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
        )
    `;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = () => {
    if (form.current) {
      setSending(true);
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
            reset();
            setSending(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSending(false);
            toast.error("Failed to send message, try again later");
          },
        );
    }
  };

  return (
    <div
      id="contact"
      className="mt-10 flex w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgb(139_92_246_/_4%),transparent_70%)] px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="mb-10 text-center lg:hidden">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            {contactContent.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            {contactContent.subheading}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="order-2 flex flex-col justify-between text-center lg:order-1 lg:text-left">
            <div>
              <h2 className="hidden text-4xl font-black tracking-tight text-white md:text-6xl lg:block">
                {contactContent.heading}
              </h2>
              <p className="mx-auto mt-6 hidden max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg lg:mx-0 lg:block">
                {contactContent.subheading}
              </p>
            </div>

            <div className="mt-8 space-y-4 text-left">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-neutral-300 transition-colors hover:text-cyan-300"
              >
                <Mail className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 transition-colors hover:text-cyan-300"
              >
                <Github className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                {profile.github}
              </a>
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                {profile.location}
              </div>
              <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                {contactContent.availability}
              </span>
            </div>
          </div>

          <div
            className="order-1 rounded-3xl bg-gradient-to-br from-cyan-400/50 via-purple-500/30 to-transparent p-px shadow-[0_0_60px_rgba(34,211,238,0.12)] lg:order-2"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              style={{ background: motionBg }}
              className="rounded-3xl bg-zinc-950/95 p-8 text-white lg:p-12"
            >
              {sending ? (
                <div className="flex min-h-[28rem] items-center justify-center">
                  <SyncLoader color="#b6b6b6" />
                </div>
              ) : (
                <form
                  className="w-full"
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  ref={form}
                >
                  <div className="mb-6 flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="flex w-full flex-col space-y-2">
                      <Label className="text-base text-white" htmlFor="firstName">First Name</Label>
                      <Input
                        className="h-12 text-base lg:h-14"
                        id="firstName"
                        placeholder="First Name"
                        type="text"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.firstName && (
                        <span className="text-red-500">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                    <div className="flex w-full flex-col space-y-2">
                      <Label className="text-base text-white" htmlFor="lastName">Last Name</Label>
                      <Input
                        className="h-12 text-base lg:h-14"
                        id="lastName"
                        placeholder="Last Name"
                        type="text"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.lastName && (
                        <span className="text-red-500">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-6 flex w-full flex-col space-y-2">
                    <Label className="text-base text-white" htmlFor="fromEmail">Email Address</Label>
                    <Input
                      className="h-12 text-base lg:h-14"
                      id="fromEmail"
                      placeholder="example@gmail.com"
                      type="email"
                      {...register("fromEmail", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                          message: "Email is not valid",
                        },
                      })}
                    />
                    {errors.fromEmail && (
                      <span className="text-red-500">{errors.fromEmail.message}</span>
                    )}
                  </div>
                  <div className="mb-6 flex w-full flex-col space-y-2">
                    <Label className="text-base text-white" htmlFor="message">Your Message</Label>
                    <motion.div
                      className="rounded-lg p-px transition duration-300 group/input"
                    >
                      <textarea
                        id="message"
                        {...register("message", {
                          required: "Message is required",
                        })}
                        rows={5}
                        placeholder="Enter your message here"
                        className="min-h-[180px] flex w-full rounded-md border-none bg-zinc-800 px-3 py-3 text-base text-white shadow-input placeholder:text-neutral-400 transition duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </motion.div>
                    {errors.message && (
                      <span className="text-red-500">{errors.message.message}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="block h-12 w-full rounded-xl bg-gradient-to-br from-black to-neutral-600 font-medium text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-950 lg:h-14 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-gradient-to-br hover:from-cyan-700 hover:to-purple-800"
                  >
                    Send it &rarr;
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
