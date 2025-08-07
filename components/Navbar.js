'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Menu } from 'lucide-react';           // optional icon
import { useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">
          Politician
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>

        {/* Links */}
        <ul
          className={`${open ? 'block' : 'hidden'
            } lg:flex gap-6 items-center text-sm`}
        >
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/vision">Vision & Mission</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          {/* Auth button */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-3 py-1 rounded bg-gray-200"
            >
              Sign out
            </button>
          ) : (

            <Link
              href="/login"
              className="px-3 py-1 rounded bg-blue-600 text-white">
              Sign in
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}


