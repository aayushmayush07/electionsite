'use client';

import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const { status } = useSession();
  if (status === 'authenticated') redirect('/');

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Card */}
      <div className="w-full max-w-sm rounded-2xl border border-slate-300 bg-white/90 p-8 shadow-lg backdrop-blur">
        {/* Crest / title */}
        <div className="mb-6 flex flex-col items-center text-center">
          <ShieldCheck className="mb-2 h-10 w-10 text-blue-700" />
          <h1 className="text-xl font-semibold tracking-wide text-blue-800">
            Secure Government Portal
          </h1>
          <p className="mt-1 text-sm text-slate-600">Sign in to continue</p>
        </div>

        {/* Google button */}
        <button
          onClick={() => signIn('google')}
          className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          {/* Google “G” icon */}
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M44.5 20H24v8.5h11.8C34.5 34.6 29.9 38 24 38c-9 0-16-7-16-16s7-16 16-16c4.1 0 7.9 1.5 10.7 4.3l6-6C35.1 1.5 29.8 0 24 0 10.8 0 0 10.8 0 24s10.8 24 24 24c13.2 0 23.7-10.2 23.7-24 0-1.6-.2-3.2-.6-4.7z"
              fill="#FFC107"
            />
            <path
              d="M0 37.1l6.9-5C9.5 35.8 16.3 40 24 40c5.9 0 10.5-1.9 14-5.1l-6.5-5.1C29.5 31.1 27 32 24 32c-6.7 0-12.4-4.3-14.4-10.4L0 37.1z"
              fill="#FF3D00"
            />
            <path
              d="M24 8c3.7 0 6.8 1.3 9.3 3.5l7-7C35.5 1.5 29.9 0 24 0 10.8 0 0 10.8 0 24c0 3.7.8 7.2 2.3 10.3l7-5.6C9 24.8 9 24.4 9 24 9 14.3 15.3 8 24 8z"
              fill="#4CAF50"
            />
            <path
              d="M44.5 20H24v8.5h11.8C34.6 37.4 29.3 42 24 42c-9 0-16-7-16-16s7-16 16-16c4.1 0 7.9 1.5 10.7 4.3l6-6C35.1 1.5 29.8 0 24 0 10.8 0 0 10.8 0 24s10.8 24 24 24c13.2 0 23.7-10.2 23.7-24 0-1.6-.2-3.2-.6-4.7z"
              fill="#1976D2"
            />
          </svg>

          Sign in with Google
          <ArrowRight className="h-4 w-4 shrink-0" />
        </button>
      </div>
    </section>
  );
}
