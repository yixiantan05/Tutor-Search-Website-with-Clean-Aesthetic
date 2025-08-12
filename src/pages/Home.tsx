import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon } from 'lucide-react';
const Home = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Parent of 10th grader',
    quote: "Our tutor has been a game-changer for my daughter's confidence in mathematics. Her grades have improved significantly!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    name: 'Michael Chen',
    role: 'Parent of 7th grader',
    quote: 'After struggling with science concepts, my son is now thriving thanks to his tutor. Worth every penny!',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    name: 'Amanda Rodriguez',
    role: 'Parent of 12th grader',
    quote: 'The SAT prep tutoring was exceptional. Our tutor provided targeted strategies that helped my daughter improve her score by over 200 points.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }];
  return <main className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Find the Perfect Tutor for Your Child
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Connect with qualified tutors who can help your child excel
              academically and build confidence in their learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tutor-login" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                Tutor Login
              </Link>
              <Link to="/parent-login" className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors">
                Parent Login
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Student studying with tutor" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Tell us your needs</h3>
              <p className="text-gray-600">
                Share your child's learning goals, schedule preferences, and
                subject requirements.
              </p>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Parent discussing needs" className="mt-4 rounded-md w-full h-40 object-cover" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Match with tutors</h3>
              <p className="text-gray-600">
                We'll connect you with qualified tutors who match your specific
                requirements.
              </p>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Matching with tutors" className="mt-4 rounded-md w-full h-40 object-cover" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start learning</h3>
              <p className="text-gray-600">
                Schedule sessions and watch your child's confidence and
                abilities grow.
              </p>
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Student learning" className="mt-4 rounded-md w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Subjects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Subjects We Cover
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['Mathematics', 'Science', 'English', 'History', 'Languages', 'Physics', 'Chemistry', 'Computer Science'].map(subject => <div key={subject} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <p className="font-medium text-gray-800">{subject}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>)}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
              View all testimonials
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Quick Links */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/free-test-papers" className="text-gray-300 hover:text-white transition-colors">
                    Free Test Papers
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Tutors */}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Tutors</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/tutor-login" className="text-gray-300 hover:text-white transition-colors">
                    Tutor Login
                  </Link>
                </li>
                <li>
                  <Link to="/tutor-application" className="text-gray-300 hover:text-white transition-colors">
                    Apply to be a Tutor
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Tutor Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* For Parents */}
            <div>
              <h3 className="text-lg font-semibold mb-4">For Parents</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/parent-login" className="text-gray-300 hover:text-white transition-colors">
                    Parent Login
                  </Link>
                </li>
                <li>
                  <Link to="/parent-registration" className="text-gray-300 hover:text-white transition-colors">
                    Register as a Parent
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Parent Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MailIcon className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="mailto:contact@tutorfind.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@tutorfind.com
                  </a>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="tel:+18001234567" className="text-gray-300 hover:text-white transition-colors">
                    1-800-123-4567
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">
                  Subscribe to our newsletter
                </h4>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1" />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TutorFind. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>;
};
export default Home;