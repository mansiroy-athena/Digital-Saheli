import React from 'react'
import { Link } from 'react-router-dom'

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Digital Skills Workshop - Basic Level",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, New Delhi",
      description: "Learn the fundamentals of digital marketing, social media management, and online business setup. Perfect for beginners.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      type: "Workshop",
      status: "Completed"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-green-100 text-green-800'
      case 'Completed':
        return 'bg-gray-100 text-gray-800'
      case 'Cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop':
        return 'bg-primary-100 text-primary-800'
      case 'Masterclass':
        return 'bg-secondary-100 text-secondary-800'
      case 'Meetup':
        return 'bg-green-100 text-green-800'
      case 'Networking':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 text-gray-600">
            UPCOMING EVENTS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Events
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-4xl mx-auto">
            Participate in our workshops, masterclasses, and community events designed to empower women entrepreneurs 
            with essential digital skills and networking opportunities.
          </p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
              All Events
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-primary-50 rounded-full text-sm font-medium">
              Upcoming
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-primary-50 rounded-full text-sm font-medium">
              Completed
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-primary-50 rounded-full text-sm font-medium">
              Workshops
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 hover:bg-primary-50 rounded-full text-sm font-medium">
              Masterclasses
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  
                  <div className="flex gap-2">
                    {event.status === 'Upcoming' ? (
                      <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Register Now
                      </button>
                    ) : (
                      <button className="flex-1 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
                        Event Completed
                      </button>
                    )}
                    <button className="px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg text-sm font-semibold transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events, workshops, and community programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
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
