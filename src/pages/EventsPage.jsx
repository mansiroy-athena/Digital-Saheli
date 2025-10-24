import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
import saktiImage from '../assets/Sakti.png'

import tutorial1 from '../assets/Tutorial 1_Intro to social media marketing.mp4'
import tutorial2 from '../assets/Tutorial 2_Captions & hashtags.mp4'

const EventsPage = () => {
  const location = useLocation()

  useEffect(() => {
    // If there's a hash in the URL (e.g. /events#seva-sadan), scroll to that element.
    if (location && location.hash) {
      const id = location.hash.replace('#', '')
      // Try immediate find first, otherwise fallback after a small delay to allow rendering
      const scrollToId = () => {
        const el = document.getElementById(id)
        if (el) {
          // focusable element ensures keyboard users can tab to it
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          try {
            el.focus({ preventScroll: true })
          } catch (e) {}
        }
      }

      scrollToId()
      // a small retry in case element wasn't in DOM yet
      const t = setTimeout(scrollToId, 120)
      return () => clearTimeout(t)
    } else {
      // if no hash, optionally scroll to top
      // window.scrollTo(0, 0)
    }
  }, [location])
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
      <section className="py-10 bg-white">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Maya Aunty</h3>
              
              <div className="mb-6">
                <img 
                  src={mayaImage} 
                  alt="Maya Aunty" 
                  className="w-full h-84 object-cover rounded-xl shadow-lg"
                />
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shakti Bachat</h3>
              
              <div className="mb-6">
                <img 
                  src={saktiImage} 
                  alt="Shakti Bachat" 
                  className="w-full h-84 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Shakti Bachat is a community-driven savings initiative in Maharashtra aimed at empowering women through financial literacy and collective savings.
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-secondary-600">
                  <p className="text-gray-700 font-medium">
                    "Collaborating with Soni Didi, Digital Saheli strengthened this program by introducing digital awareness and entrepreneurship skills. Women in the Shakti Bachat network learned to leverage social media for micro-business ventures, combining financial literacy with digital empowerment to increase their independence and economic resilience."
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
      <section className="py-10 bg-gray-50">
        <div className="">
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

          <div className="space-y-4">
            {/* Seva Sadan Workshop */}
            <div id="seva-sadan" tabIndex={-1} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
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
                    <p className="text-gray-700 text-sm leading-relaxed">Women reported increased confidence in promoting their products online and saw a significant increase in customer engagement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Foundation Workshop */}
            <div id="links-foundation" tabIndex={-1} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
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
                    <p className="text-gray-700 text-sm leading-relaxed">Focused on digital strategies tailored for handmade products and services created by migrant worker-cum-entrepreneurs.</p>
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
                    <p className="text-gray-700 text-sm leading-relaxed">Participants launched Instagram pages for their businesses, connecting with a wider urban audience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bombay Foundation Workshop */}
            <div id="bombay-foundation" tabIndex={-1} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bombay Foundation of Deaf Women</h3>
                  <p className="text-green-600 font-semibold text-lg">Mumbai</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                    <p className="text-gray-700 text-sm leading-relaxed"> Provided guidance on identification of target audiences, product positioning, and engagement metrics measurements. Also, tutorials on creating Instagram profiles to analyzing viewership patterns and crafting brand narratives.</p>
                  </div>
                </div>
                {/* Card 3 - Supporting Exhibition Participation */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden border border-purple-200">
                  <img 
                    src={bombay3} 
                    alt="Increased footfall" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Supporting Exhibition Participation</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Provided support in leading exhibitions like Indian Merchant Chamber’s Ladies’ Wing Women Entrepreneurs’ Exhibition 2025. Created promotional reels for promoting our stall in real time on social media, and supporting the entire crew with stall set-up and highlighting product placement.</p>
                  </div>
                </div>
                {/* Card 4 - Outcome */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl overflow-hidden border border-purple-200">
                  <img 
                    src={bombay3} 
                    alt="Increased footfall" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Outcome</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Footfall at exhibitions increased post-intervention. Women entrepreneurs gained skills in content creation and customer engagement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Saheli Online Workshops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Digital Saheli Online Workshops</h3>
                  <p className="text-purple-600 font-semibold text-lg">Zoom Platform</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <p className="text-gray-700 leading-relaxed">
                    Several online workshops via zoom have been conducted by Navyaa and Digital Saheli. Tutorials on social media marketing focusing on the Instagram platform have been the major theme of these workshops. Constructive inputs and suggestions are provided regarding how to make reels gain more traction, filmography and use of aesthetics to capture audience attention, and finally the importance of the length of reels is explained.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <video 
                      className="w-full h-84 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={tutorial1} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <video 
                      className="w-full h-84 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={tutorial2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <video 
                      className="w-full h-84 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src='https://fkhjgxuxq1fvnjxa.public.blob.vercel-storage.com/navya%20portfolio/Zoom%201.mp4' type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <video 
                      className="w-full h-84 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src='https://fkhjgxuxq1fvnjxa.public.blob.vercel-storage.com/navya%20portfolio/Zoom%203.mp4' type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
            
          </div>


        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              EVENT GALLERY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Seva Sadan Workshop & Link Foundation Workshop</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              See the moments that define our workshops, training sessions, and community events across India.
            </p>
          </div>

          {/* Top Section - 3:1 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Left Side - Big Image (3 columns) */}
            <div className="lg:col-span-3">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImage1} 
                  alt="Digital Saheli workshop in action" 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Side - Two Images (1 column) */}
            <div className="lg:col-span-1 space-y-2">
              {/* Top Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImage2} 
                  alt="Women learning digital skills" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Bottom Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImage3} 
                  alt="Community engagement" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Middle Section - One Row 5 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage4} 
                alt="Training session" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage5} 
                alt="Success celebration" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage6} 
                alt="Workshop participants" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage7} 
                alt="Gallery image" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src={galleryImage8} 
                alt="Gallery image" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bottom Section - 1:3 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Side - Two Images (1 column) */}
            <div className="lg:col-span-1 space-y-4">
              {/* Top Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={galleryImage9} 
                  alt="Gallery image" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Bottom Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={seva1} 
                  alt="Seva Sadan workshop" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Side - One Big Image (3 columns) */}
            <div className="lg:col-span-3">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={link1} 
                  alt="Links Foundation workshop" 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Collaborate with us to organize workshops, training sessions, or community events in your area.
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




