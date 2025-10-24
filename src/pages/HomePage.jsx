import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider.jsx'
import image1 from '../assets/Image (1).jpg'
import image2 from '../assets/Image (2).jpg'
import image7 from '../assets/Image (7).jpg'
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
import maya from '../assets/Maya.png'
import sakti from '../assets/Sakti.png'
import video1 from '../assets/video (1).mp4'
import video2 from '../assets/video (2).mp4'
import video3 from '../assets/video (3).mp4'
import video4 from '../assets/video (4).mp4'
import seva3 from '../assets/seva3.jpg'
import link3 from '../assets/link3.jpg'

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

  // Quick link cards (5 cards)
  const cardItems = [
    { title: 'Maya Aunty', url: '/events', image: maya, external: false },
    { title: 'Shakti Bachat', url: '/events', image: sakti, external: false },
    { title: 'Seva Sadan', url: '/events#seva-sadan', image: seva3, external: false },
    { title: 'Links Foundation', url: '/events#links-foundation', image: link3, external: false },
    { title: 'Bombay Foundation', url: '/events#bombay-foundation', image: image12, external: false }
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

          {/* Main Title - Left with Right-side Social/Events Panel (refined) */}
          <div className="animate-slide-in-down mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Left: Title & Tagline */}
              <div className="flex-1 text-left max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none">
                  Digital Saheli
                </h1>
                <div className="animate-fade-in-up delay-200 mb-8">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 block tracking-wide">
                    Empowering Women
                  </span>
                </div>

                {/* Buttons below title */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-yellow-300 text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-yellow-200 transition-all duration-300"
                  >
                    Get Involved
                  </Link>
                  <Link
                    to="/events"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                  >
                    View Events
                  </Link>
                </div>
              </div>

              {/* Right: Four horizontal tabs */}
              <div className="lg:w-[600px]">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.youtube.com/@Navyya-v8b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31.1 31.1 0 000 12a31.1 31.1 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31.1 31.1 0 0024 12a31.1 31.1 0 00-.5-5.8zM10 15V9l5 3-5 3z" />
                      </svg>
                      <span className="font-semibold text-white">YouTube</span>
                    </div>
                    <p className="text-sm text-gray-300">Watch our latest training videos and success stories</p>
                  </a>

                  <a
                    href="https://www.instagram.com/digitalsahelibynavyaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
                        <path d="M17.5 6.5h.01" strokeWidth="1.5" />
                      </svg>
                      <span className="font-semibold text-white">Instagram</span>
                    </div>
                    <p className="text-sm text-gray-300">Follow our daily updates and community stories</p>
                  </a>

                  <a
                    href="https://www.aifdw.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      <span className="font-semibold text-white">AIFDW</span>
                    </div>
                    <p className="text-sm text-gray-300">Explore our collaboration for inclusive growth</p>
                  </a>

                  <Link
                    to="/events"
                    className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold text-white">Events</span>
                    </div>
                    <p className="text-sm text-gray-300">Join our upcoming workshops and trainings</p>
                  </Link>
                </div>
              </div>
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
                    This passion for connecting ideas to impact led me to launch <a href="https://www.instagram.com/digitalsahelibynavyaa/" className="font-semibold text-yellow-300 hover:text-yellow-200 transition-colors duration-300 underline">Digital Saheli</a>, an initiative that equips women entrepreneurs from underserved communities with essential digital skills. Through workshops on social media marketing and branding, I help women build not just stronger businesses, but also stronger identities as entrepreneurs. Seeing them grow their presence online and translate it into real opportunities has been one of the most rewarding parts of my journey.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Seva Sadan Workshop & Link Foundation Workshop</h2>
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

          {/* Quick Explore Cards (5 clickable image cards) */}
          <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Explore</h3>
                <p className="text-gray-600">Quick links to important pages and resources</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {cardItems.map((card, idx) => {
                  const CardInner = (
                    <div className="relative overflow-hidden rounded-lg shadow-lg group h-40">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">{card.title}</span>
                      </div>
                    </div>
                  )

                  // External links (third-party) should open in a new tab.
                  if (card.external) {
                    return (
                      <a key={idx} href={card.url} target="_blank" rel="noopener noreferrer" aria-label={card.title}>
                        {CardInner}
                      </a>
                    )
                  }

                  // If the URL contains a hash (fragment), use a plain anchor so the browser navigates to the fragment (e.g. /events#seva-sadan).
                  if (card.url.includes('#')) {
                    return (
                      <a key={idx} href={card.url} aria-label={card.title}>
                        {CardInner}
                      </a>
                    )
                  }

                  // Default internal navigation via react-router Link
                  return (
                    <Link key={idx} to={card.url} aria-label={card.title}>
                      {CardInner}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>


          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AIFDW Collaboration</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Digital Saheli collaborated with the All India Foundation of Deaf Women (AIFDW) and their affiliated training centres across 17 cities in India. The aim of this collaboration is to strengthen the digital presence, so they could better enable income generation activities for the 3,700 hearing-impaired women supported by their network.                </p>
                <p className="text-gray-700 leading-relaxed">
                  Several in-person and online workshops have been conducted to inform about social media marketing through practical learning modules, covering everything from creating Instagram profiles to analyzing viewership patterns and crafting brand narratives.                </p>
                <p className="text-gray-700 leading-relaxed">
                  Navyaa helped participants think like business owners — guiding them to identify their target audiences, position their products, and measure engagement metrics. She worked with the AIFDW members to integrate sign language into the modules, ensuring that participants could fully engage and benefit from the sessions.                </p>
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
              Be a Digital Saheli
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

