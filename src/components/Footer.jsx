import React from 'react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
