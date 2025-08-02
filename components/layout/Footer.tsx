
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Prabesh Dahal. All rights reserved.
        </p>
        <div className="mt-4">
          <Link
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 inline-block"
          >
            View Resume
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
