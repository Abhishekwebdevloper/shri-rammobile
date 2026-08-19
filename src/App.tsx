/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Showcase } from './components/Showcase';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Showcase />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
