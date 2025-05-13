// pages/index.js
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Hi, I'm Uche 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I'm a Computer Science student at Saint Joseph's University in Philadelphia.
          This is my personal site to share blogs, my resume, and projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">📝 Latest Blog Posts</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">🧪 Featured Projects</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}