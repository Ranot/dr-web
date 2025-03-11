import aboutImg1 from '../images/aboutimg1.jpg';
import aboutImg2 from '../images/aboutimg2.jpg';
import banner from '../images/banner.jpg';

const About = () => {
  return (
    <div className="bg-white">
    
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={banner}
          alt="Dr. Anchal Thakur's Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dr. Anchal Thakur</h1>
            <p className="text-xl text-white opacity-90">MBBS | Healthcare Professional</p>
            <p className="text-lg text-white opacity-90 mt-2">Sundernagar, Mandi, Himachal Pradesh</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to My Practice
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing compassionate healthcare with expertise and personalized attention
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={aboutImg2}
                alt="Dr. Anchal Thakur's Practice"
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">Education & Background</h3>
                <div className="mt-4 space-y-4 text-lg text-gray-600">
                  <p>
                    Born and raised in Sundernagar, Mandi, Himachal Pradesh, I am a 26-year-old medical professional committed to serving our community. My roots in this region have given me a deep understanding of the healthcare needs of our local population.
                  </p>
                  <p>
                    I completed my MBBS from the prestigious Dr. Radhakrishnan Government Medical College, Hamirpur, Himachal Pradesh. This comprehensive medical education has equipped me with the knowledge and skills needed to provide excellent patient care.
                  </p>
                  <p>
                    My medical training has given me a strong foundation in general medicine, emergency care, and preventive healthcare. Being a young doctor, I bring fresh perspectives while staying updated with the latest medical advancements to provide the best possible care to my patients.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={aboutImg1}
                alt="Medical Practice Values"
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">My Approach to Healthcare</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-3 text-lg text-gray-600">Patient-Centered Care: Every patient receives personalized attention and treatment plans tailored to their specific needs.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-3 text-lg text-gray-600">Preventive Healthcare: Focus on preventing health issues before they become serious through regular check-ups and health education.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-3 text-lg text-gray-600">Continuous Learning: Staying updated with the latest medical advancements and best practices to provide optimal care.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Professional Philosophy</h3>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              "I believe that quality healthcare is a fundamental right. My mission is to provide comprehensive medical care that not only treats immediate health concerns but also promotes long-term wellness. Every patient deserves to be heard, understood, and treated with the utmost respect and care."
            </p>
            <p>
              "As a young medical professional who grew up in Sundernagar, Mandi, I deeply understand the healthcare needs of our community in Himachal Pradesh. I am committed to making quality healthcare accessible and ensuring that each patient receives the attention and care they deserve."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 