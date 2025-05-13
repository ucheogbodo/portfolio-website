import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Personal Statement</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a passionate Computer Science student at Saint Joseph's University, 
            dedicated to exploring the intersection of technology and innovation. 
            My goal is to leverage my technical skills to create meaningful solutions 
            that make a positive impact in the world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Software Engineering</li>
            <li>Data Science</li>
            <li>Open Source Contribution</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Goals</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Graduate with honors from Saint Joseph's University</li>
            <li>Contribute to meaningful open-source projects</li>
            <li>Develop practical solutions to real-world problems</li>
            <li>Build a strong professional network in the tech industry</li>
            <li>Continuously learn and adapt to new technologies</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
} 