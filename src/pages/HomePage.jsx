import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider.jsx'

const HomePage = () => {
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
      title: "Empowering Women Entrepreneurs",
      description: "Join our comprehensive digital skills training programs designed specifically for women from underserved communities.",
      alt: "Women entrepreneurs in training session"
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      title: "Digital Transformation for All",
      description: "Bridging the digital divide through community development programs and sustainable livelihood creation.",
      alt: "Digital skills training workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop",
      title: "Building Strong Communities",
      description: "Creating sustainable livelihoods and fostering economic independence through digital entrepreneurship.",
      alt: "Community development meeting"
    },
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop",
      title: "Success Stories",
      description: "Celebrating the achievements of women who have transformed their lives through our programs.",
      alt: "Successful women entrepreneurs"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="">
        <div className=" ">
          <ImageSlider images={sliderImages} />
        </div>
      </section>

      {/* NGO Mission Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-white bg-opacity-80 rounded-full text-sm font-semibold mb-6 text-gray-600 border border-white border-opacity-30">
            NON-PROFIT ORGANIZATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Saheli
            <span className="text-yellow-300 block">Empowering Women</span>
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            A non-profit organization dedicated to empowering women entrepreneurs from underserved communities through 
            comprehensive digital literacy programs, skill development, and sustainable livelihood creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-center transition-colors">
              View Events
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-center transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">
              OUR MISSION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Through Education</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are committed to bridging the digital divide and empowering women entrepreneurs from underserved communities 
              through comprehensive digital literacy programs, skill development, and sustainable livelihood creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-primary-600">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Literacy Programs</h3>
              <p className="text-gray-600">
                Comprehensive training covering digital marketing, e-commerce, and online business management for sustainable growth and empowerment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-secondary-600">
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Development</h3>
              <p className="text-gray-600">
                Building strong support networks and fostering collaboration among women entrepreneurs for collective growth and empowerment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-green-600">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Empowerment</h3>
              <p className="text-gray-600">
                Creating sustainable livelihood opportunities and fostering economic independence through digital entrepreneurship and skill development.
              </p>
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
              Our NGO has successfully transformed lives and communities across multiple regions, 
              creating measurable impact in women's economic empowerment and digital inclusion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 text-center border border-primary-200">
              <div className="text-5xl font-bold text-primary-600 mb-2">2,500+</div>
              <div className="text-gray-700 font-semibold">Women Trained</div>
              <div className="text-sm text-gray-600 mt-2">Across 15+ districts</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-8 text-center border border-secondary-200">
              <div className="text-5xl font-bold text-secondary-600 mb-2">150+</div>
              <div className="text-gray-700 font-semibold">Training Programs</div>
              <div className="text-sm text-gray-600 mt-2">Community-led initiatives</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center border border-green-200">
              <div className="text-5xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-700 font-semibold">Success Rate</div>
              <div className="text-sm text-gray-600 mt-2">Business growth achieved</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 text-center border border-yellow-200">
              <div className="text-5xl font-bold text-yellow-600 mb-2">25+</div>
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
                    <h4 className="font-semibold text-gray-900">Rural Women Entrepreneurs</h4>
                    <p className="text-gray-600 text-sm">Over 1,200 rural women have successfully established online businesses through our digital literacy programs.</p>
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
              <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Community Training Center</h4>
                <p className="text-sm text-gray-600">State-of-the-art facilities providing comprehensive digital skills training</p>
              </div>
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

