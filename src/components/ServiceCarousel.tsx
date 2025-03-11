import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gynecologyImage from '../sliderimages/DALL·E 2025-03-10 17.21.15 - A modern gynecology clinic where a female patient is having a consultation with a female gynecologist. The doctor, a professional woman in a white coa.webp';
import pediatricImage from '../sliderimages/DALL·E 2025-03-10 17.22.14 - A pediatric clinic where a female pediatrician is consulting with a young child patient. The doctor, a professional woman in a white coat with a steth.webp';
import cardiologyImage from '../sliderimages/DALL·E 2025-03-10 17.23.22 - A cardiology clinic where a female cardiologist is consulting with a patient. The doctor, a professional woman in a white coat with a stethoscope, is .webp';
import neurologyImage from '../sliderimages/DALL·E 2025-03-10 17.23.58 - A neurology clinic where a female neurologist is consulting with a patient. The doctor, a professional woman in a white coat with a stethoscope, is se.webp';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const ServiceCarousel: React.FC = () => {
  const serviceSlides: Slide[] = [
    {
      image: gynecologyImage,
      title: "Expert Gynecology Care",
      subtitle: "Specialized Women's Health Services",
      description: "Our experienced gynecologists provide comprehensive care in a comfortable and professional environment."
    },
    {
      image: pediatricImage,
      title: "Child-Friendly Pediatric Care",
      subtitle: "Caring for Your Little Ones",
      description: "Dedicated pediatric services with a gentle approach to keep your children healthy and happy."
    },
    {
      image: cardiologyImage,
      title: "Advanced Cardiac Care",
      subtitle: "Heart Health Specialists",
      description: "State-of-the-art cardiology services with personalized treatment plans for your heart health."
    },
    {
      image: neurologyImage,
      title: "Comprehensive Neurology Services",
      subtitle: "Expert Neurological Care",
      description: "Specialized neurological treatments with advanced diagnostic and therapeutic approaches."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Medical Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive Healthcare Solutions for Your Well-being
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="service-carousel"
        >
          {serviceSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{slide.title}</h3>
                  <p className="mt-2 text-sm text-blue-600">{slide.subtitle}</p>
                  <p className="mt-3 text-gray-600">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCarousel; 