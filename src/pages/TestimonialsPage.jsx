import React from 'react'
import { Link } from 'react-router-dom'

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maya Aunty",
      role: "Cancer Survivor & Tote Bag Maker",
      quote: "Digital Saheli changed my life. I never imagined that I could sell my tote bags beyond my neighborhood. Today, my work reaches hundreds, and I can continue helping cancer patients with confidence and pride."
    },
    {
      id: 2,
      name: "Soni Didi",
      role: "Shakti Bachat Initiative",
      quote: "Navyaa and her team didn't just teach social media—they empowered our women with confidence, creativity, and independence. Digital Saheli added a new dimension to our Shakti Bachat initiative."
    },
    {
      id: 3,
      name: "Chairwoman",
      role: "Bombay Foundation of Deaf Women",
      quote: "The workshops were transformative. For our women, learning through ISL and visual tools made digital marketing accessible. Their enthusiasm and skills today are inspiring."
    },
    {
      id: 4,
      name: "Head",
      role: "All India Foundation for Deaf Women",
      quote: "Partnering with Digital Saheli has enabled us to scale our programs and equip women across 17 chapters with practical digital tools. The impact is tangible—women are now creating and selling with confidence."
    },
    {
      id: 5,
      name: "General Audience",
      role: "Participant Feedback",
      quote: "I never thought I could run my own Instagram page. Now I feel proud of promoting my products online and reaching customers far beyond my city."
    },
    {
      id: 6,
      name: "Workshop Participant",
      role: "General Feedback",
      quote: "The workshops were hands-on, simple, and fun. Digital Saheli gave me not just skills but the courage to start my business journey."
    }
  ]

  const stats = [
    {
      number: "500+",
      label: "Women Trained",
      description: "Successfully completed our programs"
    },
    {
      number: "92%",
      label: "Success Rate",
      description: "Achieved business growth"
    },
    {
      number: "20+",
      label: "Training Programs",
      description: "Community-led initiatives"
    },
    {
      number: "17+",
      label: "Cities Covered",
      description: "Pan-India presence"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 text-gray-600">
            SUCCESS STORIES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Testimonials
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-4xl mx-auto">
            Hear from the amazing women and organizations who have transformed their lives and communities through our digital skills training programs. 
            Their success stories inspire us to continue our mission of empowerment.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">The measurable difference we're making in women's lives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people whose lives we've touched</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-primary-600 font-semibold">{testimonial.role}</p>
                </div>
                
                <div className="mb-4">
                  <svg className="w-8 h-8 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed italic text-lg">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-600">Highlighting our most impactful partnerships</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Maya Aunty Featured */}
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
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-4">
                "Digital Saheli changed my life. I never imagined that I could sell my tote bags beyond my neighborhood. Today, my work reaches hundreds, and I can continue helping cancer patients with confidence and pride."
              </blockquote>
              <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600">
                <p className="text-gray-700 font-medium">
                  <span className="font-semibold">Impact:</span> Maya became the first official "Digital Saheli" and a living testament to the power of digital literacy in driving social impact.
                </p>
              </div>
            </div>

            {/* AIFDW Featured */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 border border-secondary-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AIFDW Partnership</h3>
                  <p className="text-secondary-600 font-semibold">All India Foundation for Deaf Women</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-4">
                "Partnering with Digital Saheli has enabled us to scale our programs and equip women across 17 chapters with practical digital tools. The impact is tangible—women are now creating and selling with confidence."
              </blockquote>
              <div className="bg-white rounded-lg p-4 border-l-4 border-secondary-600">
                <p className="text-gray-700 font-medium">
                  <span className="font-semibold">Impact:</span> Reaching 15,000+ women across 17 chapters with inclusive digital training and entrepreneurship support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join thousands of women who have transformed their lives through our digital skills training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get Started Today
            </Link>
            <Link to="/events" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage