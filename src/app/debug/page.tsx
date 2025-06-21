'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DebugPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-secondary">
      <h1 className="text-4xl font-bold mb-8 text-white">Debug Page</h1>
      
      <div className="bg-background p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-accent">Current Path Info</h2>
        <p className="text-white mb-4">Current pathname: <span className="font-mono bg-black bg-opacity-30 px-2 py-1 rounded">{pathname}</span></p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8 text-accent">Navigation Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/" className="btn-primary text-center">
            Go to Home
          </Link>
          <Link href="/about" className="btn-primary text-center">
            Go to About
          </Link>
          <Link href="/solutions" className="btn-primary text-center">
            Go to Solutions
          </Link>
          <Link href="/contact" className="btn-primary text-center">
            Go to Contact
          </Link>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 mt-8 text-accent">Browser Info</h2>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg">
          <p className="text-white mb-2">This information helps diagnose routing issues:</p>
          <div id="browser-info" className="text-white text-opacity-80 font-mono text-sm">
            JavaScript is required to see browser info.
          </div>
        </div>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('browser-info').innerHTML = 
              'User Agent: ' + navigator.userAgent + '<br>' +
              'Window Location: ' + window.location.href;
          `
        }} />
      </div>
    </div>
  );
} 