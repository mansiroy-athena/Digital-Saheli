import React from 'react'
import { Link } from 'react-router-dom'
import bombay1 from '../assets/bombay1.jpg'
import bombay2 from '../assets/bombay2.jpg'
import bombay3 from '../assets/bombay3.jpeg'
import link1 from '../assets/link1.jpg'
import link2 from '../assets/link2.jpg'
import link3 from '../assets/link3.jpg'
import seva1 from '../assets/seva1.jpg'
import seva2 from '../assets/seva2.jpg'
import seva3 from '../assets/seva3.jpg'
import seva4 from '../assets/seva4.jpg'
import eventImage1 from '../assets/Image (11).jpg'
import eventImage2 from '../assets/Image (12).jpg'
import eventImage3 from '../assets/Image (13).jpg'
import eventImage4 from '../assets/Image (14).jpg'
import eventImage5 from '../assets/Image (15).jpg'
import eventImage6 from '../assets/Image (16).jpg'
import galleryImage1 from '../assets/Image (17).jpg'
import galleryImage2 from '../assets/Image (18).jpg'
import galleryImage3 from '../assets/Image (19).jpg'
import galleryImage4 from '../assets/Image (20).jpg'
import galleryImage5 from '../assets/Image (21).jpg'
import galleryImage6 from '../assets/Image (22).jpg'
import galleryImage7 from '../assets/Image (23).jpg'
import galleryImage8 from '../assets/Image (24).jpg'
import galleryImage9 from '../assets/Image (25).jpg'
import mayaImage from '../assets/Maya.png'

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Digital Skills Workshop - Basic Level",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, New Delhi",
      description: "Learn the fundamentals of digital marketing, social media management, and online business setup. Perfect for beginners.",
      image: eventImage1,
      type: "Workshop",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "E-commerce Masterclass",
      date: "March 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Digital Hub, Mumbai",
      description: "Advanced training on setting up online stores, payment gateways, and digital payment systems for women entrepreneurs.",
      image: eventImage2,
      type: "Masterclass",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Community Meetup - Success Stories",
      date: "March 8, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Women's Center, Bangalore",
      description: "Hear inspiring success stories from women who have transformed their businesses through our programs.",
      image: eventImage3,
      type: "Meetup",
      status: "Completed"
    },
    {
      id: 4,
      title: "Mobile Marketing Workshop",
      date: "March 29, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Training Center, Chennai",
      description: "Learn how to leverage mobile platforms for business growth, including WhatsApp Business and mobile apps.",
      image: eventImage4,
      type: "Workshop",
      status: "Upcoming"
    },
    {
      id: 5,
      title: "Networking Event - Women Entrepreneurs",
      date: "April 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Hotel Grand Plaza, Hyderabad",
      description: "Connect with fellow women entrepreneurs, share experiences, and build valuable business relationships.",
      image: eventImage5,
      type: "Networking",
      status: "Upcoming"
    },
    {
      id: 6,
      title: "Digital Branding Workshop",
      date: "February 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Creative Hub, Pune",
      description: "Learn how to create a strong digital brand identity and develop effective marketing strategies.",
      image: eventImage6,
      type: "Workshop",
      status: "Completed"
    }
  ]





  return (
    <div className="min-h-screen">


      {/* How Our Journey Started */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              OUR STORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Our Journey Started</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Digital Saheli was born from real stories of transformation. Here are the inspiring journeys 
              that shaped our mission to empower women through digital literacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Maya Aunty Story */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Maya Aunty</h3>
                  <p className="text-primary-600 font-semibold">The First Digital Saheli</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Maya Aunty, a cancer survivor in her 70s from Mumbai, began handcrafting tote bags to raise funds for underprivileged cancer patients. Despite her impactful mission, her sales were limited to friends and family, restricting her reach.
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="text-gray-700 font-medium">
                    "Digital Saheli worked with Maya to build her Instagram presence, create reels telling her story, and connect her to a wider audience. Within months, her online engagement and sales increased significantly, allowing her to support more patients. Maya became the first official "Digital Saheli" and a living testament to the power of digital literacy in driving social impact."
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Maya became the first official "Digital Saheli" and a living testament to the power of digital literacy in driving social impact.
                </p>
              </div>
            </div>

            {/* Shakti Bachat Story */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 border border-secondary-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Shakti Bachat</h3>
                  <p className="text-secondary-600 font-semibold">Community Empowerment with Soni Didi</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Shakti Bachat is a community-driven savings initiative in Maharashtra aimed at empowering women through financial literacy and collective savings.
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-secondary-600">
                  <p className="text-gray-700 font-medium">
                    "Collaborating with Soni Didi, Digital Saheli strengthened this program by introducing digital awareness and entrepreneurship skills. Women in the Shakti Bachat network learned to leverage social media for micro-business ventures, combining financial literacy with digital empowerment to increase their independence and economic resilience.
                    "
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  This initiative combined financial literacy with digital empowerment to increase women's independence and economic resilience.
          </p>
        </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Workshops – Training Women Across India</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Through our comprehensive workshop programs, we've empowered hundreds of women entrepreneurs 
              across India with essential digital skills and marketing knowledge.
            </p>
          </div>

          <div className="space-y-8">
            {/* Seva Sadan Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Seva Sadan</h3>
                  <p className="text-primary-600 font-semibold text-lg">Mumbai</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 - Workshop Scale */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden border border-blue-200">
                  <img 
                    src={seva1} 
                    alt="Workshop participants" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Workshop Scale</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Conducted in-person workshops for 40+ women entrepreneurs.</p>
                  </div>
                </div>

                {/* Card 2 - Focus Areas */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden border border-green-200">
                  <img 
                    src={seva2} 
                    alt="Digital marketing training" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Focus Areas</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Setting up Instagram business accounts, content creation, understanding hashtags, and digital marketing basics.</p>
                  </div>
                </div>

                {/* Card 3 - Participants */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden border border-purple-200">
                  <img 
                    src={seva3} 
                    alt="Women entrepreneurs" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Participant Types</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Participants ranged from home bakers and tutors to self-taught fashion designers.</p>
                  </div>
                </div>

                {/* Card 4 - Outcome */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl overflow-hidden border border-orange-200">
                  <img 
                    src={seva4} 
                    alt="Success and engagement" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Outcome</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Women reported increased confidence in promoting their products online and saw a measurable increase in customer engagement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Foundation Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Links Foundation</h3>
                  <p className="text-secondary-600 font-semibold text-lg">Bangalore</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 - Focus Strategy */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden border border-blue-200">
                  <img 
                    src={link1} 
                    alt="Digital promotion strategies" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Focus Strategy</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Focused on digital promotion strategies tailored for handmade products and services.</p>
                  </div>
                </div>

                {/* Card 2 - Hands-on Sessions */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden border border-green-200">
                  <img 
                    src={link2} 
                    alt="Hands-on training sessions" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Hands-on Sessions</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Designing online catalogs, creating reels, scheduling posts, and optimizing post timing.</p>
                  </div>
                </div>

                {/* Card 3 - Outcome */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden border border-purple-200">
                  <img 
                    src={link3} 
                    alt="Successful business launch" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Outcome</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Participants successfully launched Instagram pages for their businesses, connecting with a wider urban audience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bombay Foundation Workshop */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bombay Foundation</h3>
                  <p className="text-green-600 font-semibold text-lg">Mumbai</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 - Adapted Workshops */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden border border-blue-200">
                  <img 
                    src={bombay1} 
                    alt="Accessible workshops" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Adapted Workshops</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Workshops adapted for hearing-impaired women using Indian Sign Language (ISL) and visual aids.</p>
                  </div>
                </div>

                {/* Card 2 - Training Focus */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden border border-green-200">
                  <img 
                    src={bombay2} 
                    alt="Celebrity collaborations" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Training Focus</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Reel creation, marketing strategy, and storytelling, including celebrity collaborations (Manushi Chillar and Poonam Singh) for exhibitions and sales.</p>
                  </div>
                </div>

                {/* Card 3 - Outcome */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden border border-purple-200">
                  <img 
                    src={bombay3} 
                    alt="Increased footfall" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Outcome</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Footfall at exhibitions increased by 40% post-intervention; women gained skills in content creation and customer engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              EVENT GALLERY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Capturing Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              See the moments that define our workshops, training sessions, and community events across India.
            </p>
          </div>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Large Featured Image */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImage1} 
                  alt="Digital Saheli workshop in action" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Gallery Images */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={galleryImage2} 
                alt="Women learning digital skills" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={galleryImage3} 
                alt="Community engagement" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={galleryImage4} 
                alt="Training session" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={galleryImage5} 
                alt="Success celebration" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={galleryImage6} 
                alt="Workshop participants" 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Gallery Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage7} 
                alt="Gallery image" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage8} 
                alt="Gallery image" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage9} 
                alt="Gallery image" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={seva1} 
                alt="Seva Sadan workshop" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={link1} 
                alt="Links Foundation workshop" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={bombay1} 
                alt="Bombay Foundation workshop" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering Women Through Digital Literacy</h2>
          <p className="text-xl text-gray-600 mb-8">
          Our workshops have reached diverse communities across India, from urban entrepreneurs to hearing-impaired women, 
          proving that digital empowerment knows no boundaries. Every participant leaves with practical skills and renewed confidence.          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Partner with us to organize workshops, training sessions, or community events in your area.
          </p>
          <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default EventsPage




