import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">🚧 Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            I'm currently working on some exciting projects. Check back soon to see my work!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Full-stack applications and websites</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">AI/ML Projects</h3>
              <p className="text-gray-600">Machine learning and AI applications</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 