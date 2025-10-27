import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default async function FooterPage() {
  type TSocialConnect = {
    id: number;
    media: string;
    icon: IconType;
    href: string;
  };
  const connectSocial: TSocialConnect[] = [
    {
      id: 1,
      media: "Github",
      icon: FaGithub,
      href: "https://github.com/ahosanul81",
    },
    {
      id: 2,
      media: "Linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ahosanulislam/",
    },
    { id: 3, media: "Email", icon: FaEnvelope, href: "ahosanul81@gmail.com" },
  ];
  return (
    <section>
      <footer className="bg-[#1F2937] text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-400">
              Md Ahosanul Islam
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Front-End Developer | MERN Stack Enthusiast
            </p>
            <p className="text-gray-500 mt-3 text-sm">
              Building modern, user-friendly web experiences.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-medium text-blue-400 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-blue-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-medium text-blue-400 mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start gap-6">
              {connectSocial &&
                connectSocial?.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                      <Icon size={20} />
                      <span>{social.media}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          <p>© 2025 Md Ahosanul Islam. ALl Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
}
