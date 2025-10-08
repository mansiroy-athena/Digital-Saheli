import React from 'react'
import { Link } from 'react-router-dom'

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      business: "Handmade Jewelry Store",
      location: "New Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Digital Saheli transformed my business completely. I went from having no online presence to selling my jewelry across India through social media. The training was comprehensive and the support was incredible.",
      rating: 5,
      achievement: "300% increase in sales within 6 months"
    },
    {
      id: 2,
      name: "Anita Singh",
      business: "Organic Food Products",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The digital marketing workshop opened my eyes to so many opportunities. I learned how to create engaging content and reach customers I never thought possible. My business is now thriving online.",
      rating: 5,
      achievement: "Established online store with 500+ customers"
    },
    {
      id: 3,
      name: "Meera Patel",
      business: "Fashion Design Studio",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote: "I learned not just digital skills, but also gained a supportive community of women entrepreneurs who continue to inspire me. The networking opportunities have been invaluable for my business growth.",
      rating: 5,
      achievement: "Expanded to 3 new cities"
    },
    {
      id: 4,
      name: "Sunita Devi",
      business: "Home-based Catering",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      quote: "As a rural woman, I never thought I could use technology for my business. Digital Saheli made it simple and accessible. Now I take orders online and have customers from all over the state.",
      rating: 5,
      achievement: "Reached 200+ customers online"
    },
    {
      id: 5,
      name: "Rekha Kumari",
      business: "Handicraft Products",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The e-commerce training was a game-changer for me. I learned how to set up my online store, handle payments, and manage orders. My traditional handicrafts now reach customers worldwide.",
      rating: 5,
      achievement: "International orders from 5 countries"
    },
    {
      id: 6,
      name: "Kavita Joshi",
      business: "Beauty Services",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      quote: "The mobile marketing workshop taught me how to use WhatsApp Business and social media effectively. I now have a steady stream of clients and my business has grown beyond my expectations.",
      rating: 5,
      achievement: "Doubled client base in 4 months"
    }
  ]

  const stats = [
    {
      number: "2,500+",
      label: "Women Trained",
      description: "Successfully completed our programs"
    },
    {
      number: "92%",
      label: "Success Rate",
      description: "Achieved business growth"
    },
    {
      number: "180%",
      label: "Average Income Increase",
      description: "Within 6 months of completion"
    },
    {
      number: "500+",
      label: "Online Businesses Created",
      description: "Through our training programs"
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
            Hear from the amazing women who have transformed their lives and businesses through our digital skills training programs. 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.business}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                  <p className="text-sm text-green-800 font-medium">
                    <span className="font-semibold">Achievement:</span> {testimonial.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Watch our success stories come to life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Video testimonial"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Priya's Success Story</h3>
                <p className="text-sm text-gray-600">From local jewelry maker to online entrepreneur</p>
              </div>
            </div>
            
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Video testimonial"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Community Impact</h3>
                <p className="text-sm text-gray-600">How we're transforming entire communities</p>
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
