import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider.jsx'

const HomePage = () => {
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
      title: "Why Social Media Marketing is Crucial for Small Businesses",
      description: "Social media platforms like Instagram, Facebook, and LinkedIn offer small businesses affordable, targeted marketing. They help build brand visibility, engage customers, promote products, and measure results — enabling quick growth and broader reach without high costs."
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      title: "Relevance to Women Empowerment",
      description: "Social media empowers women by offering flexible work options, digital skill development, and visibility for their ventures. It promotes financial independence, confidence, and equal participation in the digital economy.",
      alt: "Digital skills training workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop",
      title: "Building Strong Communities",
      description: "Digital marketing drives small business growth, formalization, and job creation. Empowering women entrepreneurs online strengthens communities, expands markets, and contributes significantly to national GDP.",
      alt: "Community development meeting"
    }
  ]

  return (
    <div className="min-h-screen">


      {/* NGO Mission Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 bg-opacity-20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Title */}
          <div className="animate-slide-in-down">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Digital Saheli
            </h1>
            <div className="animate-fade-in-up delay-200">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 block mb-8 tracking-wide">
                Empowering Women
              </span>
            </div>
          </div>

          {/* Story Content */}
          <div className="max-w-5xl mx-auto space-y-6">
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
          <div className="animate-fade-in-up delay-700 mt-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
      </section>

      {/* Hero Slider Section */}
      <section className="">
        <div className=" ">
          <ImageSlider images={sliderImages} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">
              OUR MANTRA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering through social media literacy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are committed to bridging the digital divide and empowering women entrepreneurs from underserved communities
              through comprehensive digital literacy programs, skill development, and sustainable livelihood creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-primary-600">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION</h3>
              <p className="text-gray-600">
              Empower underserved women and girls with digital literacy and social media marketing skills, enabling them to become confident entrepreneurs, creators, and financially independent contributors in a digital-first economy.              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-secondary-600">
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">VISION</h3>
              <p className="text-gray-600">
              To create a digitally empowered ecosystem where women across urban and rural India can leverage technology to build sustainable businesses, tell their stories, and achieve financial freedom—unlocking the potential of women-led micro-entrepreneurship to transform communities and the economy.              </p>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
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

