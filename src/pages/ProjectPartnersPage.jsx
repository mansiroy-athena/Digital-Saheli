import React from 'react'

const ProjectPartnersPage = () => {
  const partners = [
    {
      name: "Tech for Good Foundation",
      description: "A non-profit organization dedicated to using technology to solve social challenges and empower communities.",
      logo: "https://via.placeholder.com/200x100/4F46E5/FFFFFF?text=Tech+for+Good",
      website: "https://techforgood.org",
      focus: "Digital Literacy & Education"
    },
    {
      name: "Women in Tech Initiative",
      description: "Supporting women's advancement in technology through mentorship, training, and networking opportunities.",
      logo: "https://via.placeholder.com/200x100/EC4899/FFFFFF?text=Women+in+Tech",
      website: "https://womenintech.org",
      focus: "Gender Equality in Tech"
    },
    {
      name: "Digital Empowerment Network",
      description: "Building digital skills and access to technology for underserved communities across the region.",
      logo: "https://via.placeholder.com/200x100/10B981/FFFFFF?text=Digital+Empowerment",
      website: "https://digitalempowerment.net",
      focus: "Community Development"
    },
    {
      name: "Innovation Hub",
      description: "A collaborative space fostering innovation and entrepreneurship in the digital space.",
      logo: "https://via.placeholder.com/200x100/F59E0B/FFFFFF?text=Innovation+Hub",
      website: "https://innovationhub.com",
      focus: "Innovation & Entrepreneurship"
    },
    {
      name: "Education First Foundation",
      description: "Promoting quality education and digital learning opportunities for all students.",
      logo: "https://via.placeholder.com/200x100/8B5CF6/FFFFFF?text=Education+First",
      website: "https://educationfirst.org",
      focus: "Educational Technology"
    },
    {
      name: "Community Connect",
      description: "Connecting communities through technology and fostering digital inclusion initiatives.",
      logo: "https://via.placeholder.com/200x100/EF4444/FFFFFF?text=Community+Connect",
      website: "https://communityconnect.org",
      focus: "Community Engagement"
    }
  ]

  const sponsors = [
    {
      name: "Microsoft",
      logo: "https://via.placeholder.com/150x75/00BCF2/FFFFFF?text=Microsoft",
      level: "Platinum Sponsor"
    },
    {
      name: "Google",
      logo: "https://via.placeholder.com/150x75/4285F4/FFFFFF?text=Google",
      level: "Gold Sponsor"
    },
    {
      name: "Amazon Web Services",
      logo: "https://via.placeholder.com/150x75/FF9900/FFFFFF?text=AWS",
      level: "Silver Sponsor"
    },
    {
      name: "IBM",
      logo: "https://via.placeholder.com/150x75/052FAD/FFFFFF?text=IBM",
      level: "Bronze Sponsor"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Project Partners</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to collaborate with organizations and sponsors who share our vision 
              of empowering women through digital technology and creating positive change in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organizations working alongside us to create meaningful impact in digital empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-32 h-16 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {partner.focus}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="flex justify-center">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary text-sm"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you to our generous sponsors who make our mission possible
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="w-full h-16 object-contain mb-3"
                  />
                  <p className="text-sm text-gray-500 font-medium">
                    {sponsor.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="section section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in Partnering with Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our network of partners and help us create a more digitally empowered future. 
              Together, we can make a lasting impact in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn"
              >
                Become a Partner
              </a>
              <a
                href="/contact"
                className="btn btn-secondary"
              >
                Sponsor Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectPartnersPage
