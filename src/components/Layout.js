import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                Uche's Portfolio
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/blog" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Blog
              </Link>
              <Link href="/about" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                About
              </Link>
              <Link href="/projects" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Projects
              </Link>
              <Link href="/contact" className="px-3 py-2 text-gray-900 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
} 