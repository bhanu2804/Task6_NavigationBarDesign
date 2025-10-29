import { useState } from 'react';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const pageContent = {
    home: {
      title: 'Welcome to DesignHub',
      description: 'Create amazing digital experiences with modern design principles.',
    },
    about: {
      title: 'About Us',
      description: 'We are a team of passionate designers and developers committed to excellence.',
    },
    services: {
      title: 'Our Services',
      description: 'We offer web design, branding, UI/UX design, and digital strategy services.',
    },
    portfolio: {
      title: 'Our Portfolio',
      description: 'Explore our collection of successful projects and case studies.',
    },
    contact: {
      title: 'Get In Touch',
      description: 'Let\'s discuss how we can help bring your vision to life.',
    },
  };

  const currentContent = pageContent[activePage as keyof typeof pageContent];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activePage={activePage} onPageChange={setActivePage} />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl">
          <h1 className="text-gray-900 mb-4">{currentContent.title}</h1>
          <p className="text-gray-600">{currentContent.description}</p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4"></div>
                <h3 className="text-gray-900 mb-2">Feature {i}</h3>
                <p className="text-gray-600 text-sm">
                  Discover powerful tools and features designed to enhance your workflow.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
