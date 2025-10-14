import React from 'react'
import partnerImage1 from '../assets/Image (1).jpg'
import partnerImage2 from '../assets/Image (2).jpg'
import partnerImage3 from '../assets/Image (3).jpg'
import partnerImage4 from '../assets/Image (4).jpg'
import partnerImage5 from '../assets/Image (5).jpg'
import partnerImage6 from '../assets/Image (6).jpg'
import partnerImage7 from '../assets/Image (7).jpg'
import partnerImage8 from '../assets/Image (8).jpg'
import partnerImage9 from '../assets/Image (9).jpg'
import partnerImage10 from '../assets/Image (10).jpg'
import screenRec1 from '../assets/ScreenRec (1).mp4'

const ProjectPartnersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-semibold mb-4">
              SKILLING PARTNER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All India Foundation for <span className="text-primary-600">Deaf Women</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Empowering women with hearing impairments through digital literacy and entrepreneurship across India
            </p>
          </div>
        </div>
      </section>

      {/* About AIFDW Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Heading + First Two Paragraphs + Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-6">
            {/* Left Side - Heading + First Two Paragraphs */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About AIFDW</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in <strong>1995</strong>, the All India Foundation for Deaf Women (AIFDW) is a pioneering non-profit organization dedicated to empowering women with hearing impairments across India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the past decades, AIFDW has positively impacted the lives of <strong>over 15,000 women</strong> across <strong>17 chapters nationwide</strong>, focusing on skills development, entrepreneurship, education, and social inclusion.
              </p>
            </div>

            {/* Right Side - ScreenRec Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={screenRec1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Bottom Section - Remaining Two Paragraphs */}
          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              AIFDW works with women from diverse socio-economic backgrounds, including those from marginalized communities such as Scheduled Tribes (ST), Scheduled Castes (SC), Other Backward Classes (OBC), and urban slum populations. Many of these women face limited access to formal education, employment, and livelihood opportunities due to systemic barriers and social stigma. This has historically restricted their economic independence and participation in society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through its initiatives, AIFDW equips women with vocational skills, entrepreneurship training, and social support networks. The collaboration with Digital Saheli focuses on bridging the digital literacy gap and enabling women to leverage social media for small business growth, storytelling, and income generation.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">15,000+</div>
                <p className="text-gray-700 font-medium">Women Impacted</p>
              </div>
              <div className="bg-secondary-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-secondary-600 mb-2">17</div>
                <p className="text-gray-700 font-medium">Chapters Nationwide</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">1995</div>
                <p className="text-gray-700 font-medium">Founded</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">28+</div>
                <p className="text-gray-700 font-medium">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Cards Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Part 1: Building Your Presence on Social Media</h3>
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/nzBRb7LG_RY"
                  title="Digital Skills Training"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hi, I’m Navyaa, and welcome to this series for women entrepreneurs, made in collaboration with the All India Foundation of Deaf Women. In this video, we’ll explore how to set up your business account on Instagram. I’ll share tips on increasing your reach and making engaging posts. Stay tuned for templates and strategies to boost your online presence.   </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Part 2: Crafting the Perfect Instagram Bio</h3>
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/cRiVxe2WShs"
                  title="Success Stories"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your Instagram bio is the first thing people notice about your profile. In this video, I’ll show you how to edit and optimize your bio. We’ll explore what makes a bio clear, catchy, and professional. I’ll also demonstrate how to write your bio using the microphone option.
              </p>
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Part 3: Why Switch to a Business or Creator Account?</h3>
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/5VQah7zj6Pw"
                  title="Community Impact"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Switching to a business or creator account unlocks powerful tools on Instagram. You’ll gain access to analytics, insights, and the option to create ads. Adding your address, a shopping link, and category tabs makes your profile more professional. These features help you reach more customers and grow your brand.              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Part 4: Different Types of Instagram Posts and How to Use Them</h3>
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/XiMoIYznsHA"
                  title="Partnership Journey"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instagram isn’t just about posting pictures anymore—it’s about using the right format at the right time. In this video, I’ll explain the four main types of posts—Regular Posts, Reels, Stories, and Highlights—and how each one can help you grow your audience. I’ll share practical tips on when to use them, what works best for engagement, and how you can make your content stand out.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Saheli Partnership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Saheli Partnership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our collaboration focuses on bridging the digital literacy gap and enabling women to leverage social media for business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Inclusive Training Modules</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Developing inclusive training modules featuring sign-language augmented videos and tutorials, tailored specifically for hearing-impaired women.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Social Media Marketing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Conducting workshops on social media marketing, including Instagram strategy, reel creation, digital catalog design, post timing, and hashtag optimization.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Entrepreneurship Capacity</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building capacity for entrepreneurship, enabling women to set up homegrown ventures online and reach wider audiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Community Networks</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Fostering community networks across 17 chapters for peer learning, mentorship, and collaborative growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Shared Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we're creating meaningful change for women with hearing impairments across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Immediate Impact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Immediate Impact</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                This collaboration ensures that women with hearing impairments gain digital skills and entrepreneurial confidence, enabling financial independence and amplifying their voices in society.
              </p>
            </div>

            {/* Long-term Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Long-term Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Digital Saheli's partnership with AIFDW is backed by a shared vision of inclusive empowerment, scalable training, and sustainable economic impact, aiming to reach thousands of women across India over the next five years.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto mb-6">
                Be part of creating inclusive digital empowerment for women across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Partner with Us
                </a>
                <a
                  href="/events"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ProjectPartnersPage