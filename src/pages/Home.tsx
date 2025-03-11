import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import bannerImage from '../images/banner-c.jpg';
import serviceBanner from '../images/servicebanner.jpg';
import doctorImage from '../images/dranchal.jpg';
import groupImage from '../images/grpimage.jpg';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCarousel from '../components/ServiceCarousel';

const Home = () => {
  const { user } = useAuth();
  
  const heroSlides = [
    {
      image: bannerImage,
      title: user ? `Welcome back, ${user.name}!` : "Your Health, Our Priority",
      subtitle: "Experience World-Class Healthcare",
      description: "Welcome to a new standard of medical care. Our state-of-the-art facility combines expertise with compassion to provide you with exceptional healthcare services."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Patients Treated" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Emergency Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote: "Dr. Anchal provided exceptional care during my treatment. Her expertise and compassionate approach made all the difference in my recovery journey."
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "The personalized attention and detailed care plans have helped me maintain better health. Highly recommend their preventive care programs."
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      quote: "The entire staff is professional and caring. They take time to listen and explain everything clearly. Best healthcare experience I've had."
    }
  ];

  return (
    <div className="relative">
      <div className="relative">
        <HeroCarousel slides={heroSlides} />
      </div>
      
      {user && (
        <div className="bg-white shadow-lg mx-auto max-w-7xl mt-8 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.role === 'admin' ? 'Admin Dashboard' : 'Your Health Dashboard'}
                </h2>
                <p className="mt-1 text-gray-600">
                  {user.role === 'admin' 
                    ? 'Manage your healthcare practice'
                    : 'Track your healthcare journey'}
                </p>
              </div>
              {user.role === 'admin' ? (
                <Link
                  to="/admin/dashboard"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Book Appointment
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
      
      <ServiceCarousel />

    
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience healthcare that puts you first
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src={doctorImage} 
                  alt="Expert Doctor" 
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Expert Care</h3>
                <p className="mt-2 text-base text-gray-500">
                  Modern medical expertise with a compassionate approach to patient care.
                </p>
              </div>
            </div>

          
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src={serviceBanner} 
                  alt="Modern Facilities" 
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Personalized Attention</h3>
                <p className="mt-2 text-base text-gray-500">
                  Individual care plans tailored to your specific health needs.
                </p>
              </div>
            </div>

          
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src={groupImage} 
                  alt="Medical Team" 
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Preventive Care</h3>
                <p className="mt-2 text-base text-gray-500">
                  Focus on preventing health issues through regular check-ups and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Patient Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What our patients say about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive healthcare for your well-being
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "General Medicine",
                description: "Complete medical care with a focus on preventive health",
                image: serviceBanner
              },
              {
                title: "Health Check-ups",
                description: "Regular assessments to maintain optimal health",
                image: groupImage
              },
              {
                title: "Consultations",
                description: "One-on-one medical consultations with detailed care plans",
                image: doctorImage
              }
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-blue-600 dark:bg-blue-800 purple:bg-purple-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {user ? 'Ready for Your Next Appointment?' : 'Ready to Get Started?'}
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {user 
                ? 'Schedule your next consultation and continue your healthcare journey'
                : 'Schedule your consultation today and take the first step towards better health'}
            </p>
            <div className="mt-8">
              {user ? (
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300"
                >
                  Book Next Appointment
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300"
                >
                  Sign In to Get Started
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 