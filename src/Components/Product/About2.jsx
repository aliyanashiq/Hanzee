import React from 'react';

function About2() {
  return (
    <div className="h-[120vh] flex items-center justify-center bg-gray-100 px-6">
      <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl mt-14">
        {/* Services Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🔧 Tire Sales: A wide selection of premium brands for cars, trucks, and SUVs.</li>
            <li>🔩 Tire Installation: Professional mounting and balancing for a perfect fit.</li>
            <li>🛠️ Tire Repair: Quick and reliable solutions for punctures, leaks, and damage.</li>
            <li>📏 Wheel Alignment: Precision alignment for better handling and tire longevity.</li>
          </ul>
        </div>

        {/* Why Choose Us Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🌟 Quality Products: We partner with leading tire manufacturers to provide durable, high-performance options.</li>
            <li>💰 Competitive Pricing: Exceptional service at affordable rates.</li>
            <li>🤝 Customer-Centric Approach: Your needs are our priority, and we go the extra mile to exceed expectations.</li>
            <li>🌍 Sustainability: Environmentally friendly practices, including tire recycling.</li>
          </ul>
        </div>

        {/* Mission Statement Card */}
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At H&A Tire, our mission is to keep you safe and confident on the road. 
            We aim to provide not just tires but peace of mind with every mile you drive.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Visit us today to experience the difference. Let us help you find the perfect tires for your journey!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About2;
