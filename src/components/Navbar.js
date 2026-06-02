// /src/components/Navbar.js
'use client';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <img src="/favicon.png" alt="Intra Analytics" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link href="/home">Intro</Link></li>
        <li><Link href="/">AutoGen Reports</Link></li>
        {/* <li><Link href="/#features">Features</Link></li> */}
        {/* <li><Link href="/#users">Who It's For</Link></li> */}
        {/* <li><Link href="/#pricing">Pricing</Link></li> */}
        <li><Link href="/blog">Blog</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
