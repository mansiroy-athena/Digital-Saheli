import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider.jsx'
import image1 from '../assets/Image (1).jpg'
import image2 from '../assets/Image (2).jpg'
import image3 from '../assets/Image (3).jpg'
import image4 from '../assets/Image (4).jpg'
import image5 from '../assets/Image (5).jpg'
import image6 from '../assets/Image (6).jpg'
import image7 from '../assets/Image (7).jpg'
import image8 from '../assets/Image (8).jpg'
import image9 from '../assets/Image (9).jpg'
import image10 from '../assets/Image (10).jpg'
import image11 from '../assets/Image (11).jpg'
import image12 from '../assets/Image (12).jpg'
import image13 from '../assets/Image (13).jpg'
import image14 from '../assets/Image (14).jpg'
import image15 from '../assets/Image (15).jpg'
import image16 from '../assets/Image (16).jpg'
import image17 from '../assets/Image (17).jpg'
import image18 from '../assets/Image (18).jpg'
import image19 from '../assets/Image (19).jpg'
import image20 from '../assets/Image (20).jpg'
import image21 from '../assets/Image (21).jpg'
import image22 from '../assets/Image (22).jpg'
import image23 from '../assets/Image (23).jpg'
import image24 from '../assets/Image (24).jpg'
import image25 from '../assets/Image (25).jpg'
import video1 from '../assets/video (1).mp4'
import video2 from '../assets/video (2).mp4'
import video3 from '../assets/video (3).mp4'
import video4 from '../assets/video (4).mp4'
import screenRec1 from '../assets/ScreenRec (1).mp4'
import screenRec2 from '../assets/ScreenRec (2).mp4'
import screenRec3 from '../assets/ScreenRec (3).mp4'
import screenRec4 from '../assets/ScreenRec (4).mp4'

const HomePage = () => {
  const videoRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    )

    // Observe all video elements
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video)
      }
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video)
        }
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el)
    }
  }
  const sliderImages = [
    {
      url: image1,
      title: "Why Social Media Marketing is Crucial for Small Businesses",
      description: "Social media platforms like Instagram, Facebook, and LinkedIn offer small businesses affordable, targeted marketing. They help build brand visibility, engage customers, promote products, and measure results — enabling quick growth and broader reach without high costs."
    },
    {
      url: image2,
      title: "Relevance to Women Empowerment",
      description: "Social media empowers women by offering flexible work options, digital skill development, and visibility for their ventures. It promotes financial independence, confidence, and equal participation in the digital economy.",
      alt: "Digital skills training workshop"
    },
    {
      url: image23,
      title: "Building Strong Communities",
      description: "Digital marketing drives small business growth, formalization, and job creation. Empowering women entrepreneurs online strengthens communities, expands markets, and contributes significantly to national GDP.",
      alt: "Community development meeting"
    }
  ]

  return (
    <div className="min-h-screen">


      {/* Hero Section with 3:1 Layout */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-8 relative overflow-hidden min-h-screen flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 bg-opacity-20 rounded-full animate-rotate"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Main Title - Full Width */}
          <div className="animate-slide-in-down text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
              Digital Saheli
            </h1>
            <div className="animate-fade-in-up delay-200">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 block tracking-wide">
                Empowering Women
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content - 1 column (50%) */}
            <div className="space-y-8">

          {/* Story Content */}
              <div className="space-y-6">
            <div className="animate-fade-in-up delay-300">
                  <p className="text-lg md:text-xl text-white text-opacity-95 leading-relaxed font-light">
                I'm <span className="font-semibold text-yellow-300">Navyaa</span>, and my journey so far has been shaped by curiosity—curiosity about how people think, choose, and act, and how the stories we tell influence those choices. I analyze media, design, marketing, and performance, not just as creative tools but as forces that guide human behavior. Storytelling, for me, is more than expression—it is structure, influence, and connection.
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-500">
                  <p className="text-lg md:text-xl text-white text-opacity-95 leading-relaxed font-light">
                This passion for connecting ideas to impact led me to launch <span className="font-semibold text-yellow-300">Digital Saheli</span>, an initiative that equips women entrepreneurs from underserved communities with essential digital skills. Through workshops on social media marketing and branding, I help women build not just stronger businesses, but also stronger identities as entrepreneurs. Seeing them grow their presence online and translate it into real opportunities has been one of the most rewarding parts of my journey.
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
              <div className="animate-fade-in-up delay-700">
                <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/events" 
                className="group bg-white text-primary-600 hover:bg-gray-50 px-10 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-primary-200 min-w-[180px]"
              >
                <span className="flex items-center justify-center gap-2">
                  View Events
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 px-10 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[180px]"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Involved
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
              </Link>
                </div>
              </div>
            </div>

            {/* Image Section - 1 column (50%) */}
            <div className="animate-fade-in-up delay-400">
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={image7} 
                    alt="Digital Saheli empowering women entrepreneurs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="">
        <div className="">

          {/* 2x2 Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Top Row - Video 1 */}
            <div className="bg-white  overflow-hidden shadow-lg">
              <video 
                ref={addToRefs}
                className="w-full h-64 object-cover"
                muted
                loop
                playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Top Row - Video 2 */}
            <div className="bg-white overflow-hidden shadow-lg">
              <video 
                ref={addToRefs}
                className="w-full h-64 object-cover"
                muted
                loop
                playsInline
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Bottom Row - Video 3 */}
            <div className="bg-white  overflow-hidden shadow-lg">
              <video 
                ref={addToRefs}
                className="w-full h-64 object-cover"
                muted
                loop
                playsInline
              >
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Bottom Row - Video 4 */}
            <div className="bg-white  overflow-hidden shadow-lg">
              <video 
                ref={addToRefs}
                className="w-full h-64 object-cover"
                muted
                loop
                playsInline
              >
                <source src={video4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Slider Section */}
      <section className="">
        <div className=" ">
          <ImageSlider images={sliderImages} />
        </div>
      </section>



          {/* Image Gallery Section */}
          <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              GALLERY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Moments from Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Capturing the inspiring moments, workshops, and success stories from our Digital Saheli community.
            </p>
          </div>

          {/* Main Gallery Grid */}
          <div className="space-y-8">
            {/* Top Section - 1:1 Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Large Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image11} 
                  alt="Digital Saheli workshop" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Right Side - 4 Images (2x2) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image12} 
                    alt="Women entrepreneurs" 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image13} 
                    alt="Training session" 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image14} 
                    alt="Community meeting" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image15} 
                    alt="Digital skills workshop" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Middle Section - 8 Images with Infinite Sliding */}
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-horizontal">
                {/* First Set of Images */}
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image16} 
                      alt="Success celebration" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image17} 
                      alt="Women empowerment" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image18} 
                      alt="Digital literacy" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image19} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image20} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image21} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image22} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image23} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Duplicate Set for Infinite Effect */}
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image16} 
                      alt="Success celebration" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image17} 
                      alt="Women empowerment" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                  <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image18} 
                      alt="Digital literacy" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8 mx-3">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image19} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image20} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image21} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                  <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image22} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 w-1/8">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={image23} 
                      alt="Gallery image" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - 1:1 Layout (Reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - 4 Images (2x2) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image20} 
                    alt="Gallery image" 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image21} 
                    alt="Gallery image" 
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image22} 
                    alt="Gallery image" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image23} 
                    alt="Gallery image" 
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right Side - Large Image */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image24} 
                  alt="Gallery image" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* 5-Year Goals Section */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-sm font-semibold mb-4">
              5-YEAR GOALS (2025–2030)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision for the Future</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic goals to expand our impact across India through partnerships and scalable programs.
            </p>
          </div>

          {/* Compact Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goal 1 */}
            <div className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Excellence</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Train <span className="font-bold text-primary-600">5,000 women</span> across India in social media marketing and digital entrepreneurship, including inclusive modules for differently-abled participants.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="group bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 border border-secondary-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Entrepreneurial Growth</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enable <span className="font-bold text-secondary-600">3,000 women</span> to launch or scale homegrown ventures online, targeting sustainable income generation and market reach.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Building</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build a network of <span className="font-bold text-green-600">10,000 women entrepreneurs</span> for peer learning, mentorship, and collaborative growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Geographic Expansion</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expand Digital Saheli to <span className="font-bold text-yellow-600">10 states</span> through partnerships with 50 NGOs and community organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 5 - Full Width */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Impact</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop a train-the-trainer model and mobile toolkits to scale programs and ensure long-term impact across communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Making a Difference</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Digital Saheli has successfully transformed lives and communities across multiple regions, creating measurable impact in women's economic empowerment and digital inclusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center border border-primary-200">
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Women Trained</div>
              <div className="text-sm text-gray-600 mt-2">Across 3 partner orgs</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-8 text-center border border-secondary-200">
              <div className="text-5xl font-bold text-secondary-600 mb-2">20+</div>
              <div className="text-gray-700 font-semibold">Training Programs</div>
              <div className="text-sm text-gray-600 mt-2">Community-led initiatives</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center border border-green-200">
              <div className="text-5xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-700 font-semibold">Success Rate</div>
              <div className="text-sm text-gray-600 mt-2">Business growth achieved</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 text-center border border-yellow-200">
              <div className="text-5xl font-bold text-yellow-600 mb-2">17+</div>
              <div className="text-gray-700 font-semibold">Cities Covered</div>
              <div className="text-sm text-gray-600 mt-2">Pan-India presence</div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Women Entrepreneurs</h4>
                    <p className="text-gray-600 text-sm">Over 1,200 women have successfully established online businesses through our digital literacy programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Economic Growth</h4>
                    <p className="text-gray-600 text-sm">Average income increase of 180% among program participants within 6 months of completion.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Impact</h4>
                    <p className="text-gray-600 text-sm">Created 500+ self-help groups and cooperatives fostering collective growth and support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={image23}
                alt="Women entrepreneurs in training program"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
             
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <div className="inline-block px-6 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-6">
              GET INVOLVED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of our mission to empower women entrepreneurs through digital literacy and community development.
              Together, we can create lasting change and build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Involved
              </Link>
              <Link to="/events" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Events
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Volunteer:</strong> Join our community programs |
                <strong> Donate:</strong> Support our mission |
                <strong> Partner:</strong> Collaborate with us
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

