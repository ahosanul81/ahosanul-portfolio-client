"use client";
import { sendMail } from "@/services/sendMail/sendMail";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
type inputs = {
  name: string;
  email: string;
  phone: number;
  message: string;
};
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<inputs>();

  const onSubmit: SubmitHandler<inputs> = async (clientMessage) => {
    console.log("Form Data:", clientMessage);
    const mail = await sendMail(clientMessage);
    console.log(mail);
    reset();
  };
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="e.g John Doe"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">
            Email<span className="text-xs">(Required)</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="e.g johndoe@mail.com"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Phone</label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">
            Message<span className="text-xs">(Required)</span>
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Write message..."
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none h-24"
          ></textarea>
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message as string}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
        >
          {isSubmitting ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
}
