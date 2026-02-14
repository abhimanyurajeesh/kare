"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#006B6B] to-[#1A365D] text-white py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/kare-logo.jpg"
                alt="KARE Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <span className="text-xl font-bold">KARE</span>
                <p className="text-xs text-gray-300">Kerala United Against Rare Diseases</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A comprehensive care programme initiated by the Government of Kerala 
              to support individuals affected by rare diseases.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="https://dhs.kerala.gov.in" className="hover:text-white transition-colors">
                  Directorate of Health Services, Kerala
                </Link>
              </li>
              <li>
                <Link href="https://kerala.gov.in" className="hover:text-white transition-colors">
                  Government of Kerala
                </Link>
              </li>
              <li>
                <Link href="https://health.kerala.gov.in" className="hover:text-white transition-colors">
                  Health Department, Kerala
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Bank Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Donate</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p><span className="text-gray-400">Bank:</span> State Bank of India</p>
              <p><span className="text-gray-400">A/C:</span> 39229924684</p>
              <p><span className="text-gray-400">IFSC:</span> SBIN0070028</p>
            </div>
            <div className="pt-2">
              <Image
                src="/Kerala-sarkar-Emblem.png"
                alt="Government of Kerala"
                width={100}
                height={70}
                className="object-contain opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} KARE - Kerala United Against Rare Diseases. 
            Government of Kerala Initiative.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            All donations directly support treatment and care for children with rare diseases in Kerala.
          </p>
        </div>
      </div>
    </footer>
  );
}
