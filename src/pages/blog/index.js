import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/welcome" className="text-blue-600 hover:text-blue-500">
                Welcome to My Blog
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              An introduction to my blog and what you can expect to find here.
            </p>
            <div className="text-sm text-gray-500">
              Posted on March 19, 2024
            </div>
          </div>
          
          {/* More blog posts will be added here */}
        </div>
      </div>
    </Layout>
  );
} 