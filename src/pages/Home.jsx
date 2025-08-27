import React, { useState } from 'react';
import { Truck, CheckCircle, Phone, Mail, MapPin, Menu, X, MessageCircle, Upload, FileText, AlertCircle } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    email: '',
    goals: ''
  });
  const [uploadData, setUploadData] = useState({
    name: '',
    email: '',
    mcLetter: null,
    coi: null,
    w9Form: null
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadInputChange = (e) => {
    const { name, value } = e.target;
    setUploadData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e, fileType) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadData(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleUploadSubmit = () => {
    if (!uploadData.name || !uploadData.email) {
      alert('Please fill in your name and email!');
      return;
    }
    
    if (!uploadData.mcLetter || !uploadData.coi || !uploadData.w9Form) {
      alert('Please upload all required documents (MC Letter, COI, and W9 Form)!');
      return;
    }

    alert(`Thank you ${uploadData.name}! Your documents have been uploaded successfully. We'll contact you at ${uploadData.email} soon.`);
    
    setUploadData({
      name: '',
      email: '',
      mcLetter: null,
      coi: null,
      w9Form: null
    });
    setIsUploadModalOpen(false);
  };

  const handleFormSubmit = () => {
    if (!formData.companyName || !formData.phoneNumber || !formData.email) {
      alert('Please fill in all required fields!');
      return;
    }
    alert(`Thank you ${formData.companyName}! We'll contact you at ${formData.phoneNumber} soon.`);
    setFormData({ companyName: '', phoneNumber: '', email: '', goals: '' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '17867861277';
    const message = 'Hi! I\'m interested in your truck dispatch services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-orange-900 text-white px-4 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/lastmile-logo.png" alt="LastMileSignal" className="h-10 w-10 object-contain rounded-full bg-white/10" />
            <span className="text-2xl font-bold">LastMileSignal</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-300 transition duration-300 cursor-pointer">Home</a>
            <a href="#/privacy" className="hover:text-orange-300 transition duration-300 cursor-pointer">Privacy Policy</a>
            <a href="#contact" className="hover:text-orange-300 transition duration-300 cursor-pointer">Contact</a>
          </div>
          <button className="md:hidden hover:bg-orange-800 p-2 rounded transition duration-300" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-800">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="hover:text-orange-300 cursor-pointer">Home</a>
              <a href="#/privacy" className="hover:text-orange-300 cursor-pointer">Privacy Policy</a>
              <a href="#contact" className="hover:text-orange-300 cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flex justify-center items-center h-full">
            <Truck className="h-96 w-96 text-white transform rotate-12" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-pulse">Welcome to the Most Reliable Dispatch Company in North America</h1>
          <p className="text-xl mb-8">We find the best paying loads in the market.</p>
          <p className="text-lg mb-12">Get a dedicated dispatcher assigned for you and don't worry any more about spending time looking for loads or empty miles.</p>
          <button 
            className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-lg text-xl font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-orange-900 text-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                <h2 className="text-4xl font-bold mb-4">53'</h2>
                <h3 className="text-2xl font-bold mb-4">A Bigger Equipment makes you more Money!</h3>
                <button 
                  className="bg-orange-500 hover:bg-orange-400 px-6 py-2 rounded transition duration-300"
                  onClick={() => alert('Learn more about our equipment solutions!')}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
                <div className="relative">
                  <Truck className="h-24 w-24 text-orange-600 mb-4" />
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-2">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-4">Maximize your earning potential with larger equipment capacity. Our dispatch service focuses on finding high-paying loads that match your truck specifications.</p>
                <button 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition duration-300"
                  onClick={() => alert('Contact us for equipment consultation!')}
                >
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 relative">
              <div className="bg-orange-100 p-8 rounded-full inline-block">
                <Truck className="h-32 w-32 text-orange-600" />
              </div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-3 animate-bounce">
                <CheckCircle className="h-8 w-8" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Hit the road on your terms, you're the boss</h2>
              <p className="text-lg text-gray-600 mb-6">Loads, rates and routes are your choice, no force dispatching. We make sure you get the best freight at the best rate and get paid on time. Documentation, prices and fees are disclosed upfront.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center cursor-pointer hover:bg-orange-50 p-2 rounded transition duration-300">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span>No forced dispatching</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-orange-50 p-2 rounded transition duration-300">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Best rates guaranteed</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-orange-50 p-2 rounded transition duration-300">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Transparent pricing</span>
                </li>
              </ul>
              <button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                onClick={() => alert('Ready to start? Let us help you!')}
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Lopez Hauling Inc","Spartan Cargo LLC","National Brothers Inc","Venados Logistics LLC"].map((company, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-2 border-t-4 border-orange-500"
                onClick={() => alert(`Read more about ${company}'s success story!`)}
              >
                <div className="flex items-center mb-3">
                  <Truck className="h-6 w-6 text-orange-600 mr-2" />
                  <h3 className="font-bold text-lg text-orange-900">{company}</h3>
                </div>
                <p className="text-gray-600">"With the challenges of expenses going through the roof these days, having support from a dedicated staff is very important."</p>
                <button className="mt-3 text-orange-600 hover:text-orange-800 font-semibold">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">Getting started is easy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Send Documents", description: "MC Authority, Certificate of Insurance and W-9 Form", action: "Upload Documents" },
              { step: 2, title: "Sign Agreement", description: "Sign a quick and easy dispatch service level agreement.", action: "Sign Agreement" },
              { step: 3, title: "Hit the road", description: "We start dispatching your truck immediately.", action: "Start Driving" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-600 hover:bg-orange-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition duration-300 cursor-pointer transform group-hover:scale-110">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105"
                  onClick={() => {
                    if (item.step === 1) {
                      setIsUploadModalOpen(true);
                    } else {
                      alert(`Step ${item.step}: ${item.title} - Let's get started!`);
                    }
                  }}
                >
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">We get the loads, you drive!</h2>
            <h3 className="text-2xl mb-6">Top dedicated truck dispatch service</h3>
            <p className="text-lg max-w-4xl mx-auto">There are NO contracts. It is difficult to be profitable and that is why we charge only a small Percentage Fee for any premium load we find. Other dispatchers and brokers charge much higher fees and do not care about the service they provide to their drivers, we believe in long term relationships, our main focus is a great truck dispatch and customer service.</p>
            <button 
              className="mt-6 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              onClick={() => alert('Learn more about our no-contract policy!')}
            >
              Learn About Our Policy
            </button>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold">What is truck dispatch service?</h3>
            </div>
            <p className="text-lg mb-6">A truck dispatch services help truck drivers and owner operators who have their own trucking company manage the load booking and back-office processes of running a trucking company. Some dispatchers specialize only in booking loads, while others, like 360 Logistics, offer a wide variety of services such as invoice management and detention requests.</p>
            <p className="text-xl font-semibold text-orange-700 mb-4">LastMileSignal is your freight planning solution.</p>
            <button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition duration-300"
              onClick={() => alert('Discover all our dispatch services!')}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-900">Tell us about your goals and let us help</h2>
            <p className="text-lg text-gray-600">Having some idea of what your company needs or what are your hauling plans and desires will help us provide the best dispatch service solution for your trucking company.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-orange-900 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-900 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-orange-900 mb-2">Tell us about your goals</label>
                <textarea
                  rows={4}
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                  placeholder="Describe your hauling plans and goals..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleFormSubmit}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Complete the form now and start today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-orange-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lastmile-logo.png" alt="LastMileSignal" className="h-10 w-10 object-contain rounded-full bg-white/10" />
                <span className="text-2xl font-bold">LastMileSignal</span>
              </div>
              <p className="text-orange-200">The most reliable dispatch company in North America, helping truck drivers find the best paying loads.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-orange-200 hover:text-white transition duration-300 cursor-pointer">Home</a></li>
                <li><a href="#/privacy" className="text-orange-200 hover:text-white transition duration-300 cursor-pointer">Privacy Policy</a></li>
                <li><a href="#contact" className="text-orange-200 hover:text-white transition duration-300 cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div 
                  className="flex items-center space-x-3 cursor-pointer hover:text-orange-300 transition duration-300"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp: +1 786-786-1277</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5" />
                  <div className="space-y-1">
                    <span>Phone: +1 786-786-1277</span><br />
                    <span>Phone: +1 346-214-1276</span><br />
                    <span>Phone: +1 346-419-9553</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5" />
                  <div className="space-y-1">
                    <span 
                      className="cursor-pointer hover:text-orange-300 transition duration-300"
                      onClick={() => window.open('mailto:info@lastmilesignal.com')}
                    >
                      info@lastmilesignal.com
                    </span>
                    <br />
                    <span 
                      className="cursor-pointer hover:text-orange-300 transition duration-300"
                      onClick={() => window.open('mailto:dispatch@lastmilesignal.com')}
                    >
                      dispatch@lastmilesignal.com
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>8108 Tyrell Hgts Rd, Magnolia, TX 77354, USA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-700 mt-8 pt-8 text-center">
            <p className="text-orange-200">© 2024 LastMileSignal. All rights reserved.</p>
            <button 
              className="mt-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded transition duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </button>
          </div>
        </div>
      </footer>

      <div 
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition duration-300 transform hover:scale-110 z-50"
        onClick={openWhatsApp}
      >
        <MessageCircle className="h-6 w-6" />
      </div>

      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative bg-gradient-to-r from-orange-900 to-orange-700 text-white p-6 rounded-t-lg">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-cover bg-center" style={{
                  backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 200\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'0.1\' d=\'M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,133.3C672,139,768,117,864,112C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\'/%3E%3C/svg%3E")'
                }}></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold flex items-center">
                  <Upload className="mr-3 h-8 w-8" />
                  Upload Documents
                </h2>
                <p className="mt-2 text-orange-100">Please provide your information and upload required documents to get started</p>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-orange-300 transition duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-orange-900 mb-2 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={uploadData.name}
                      onChange={handleUploadInputChange}
                      className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-900 mb-2 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={uploadData.email}
                      onChange={handleUploadInputChange}
                      className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="border-t border-orange-200 pt-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Required Documents
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-orange-900 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                        Upload MC Letter *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload(e, 'mcLetter')}
                          className="hidden"
                          id="mc-letter"
                        />
                        <label
                          htmlFor="mc-letter"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition duration-300"
                        >
                          <Upload className="h-8 w-8 text-orange-400 mb-2" />
                          <span className="text-sm text-orange-600 text-center px-2">
                            {uploadData.mcLetter ? uploadData.mcLetter.name : "Choose File"}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">PDF, DOC, JPG, PNG</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-orange-900 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                        Upload COI *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload(e, 'coi')}
                          className="hidden"
                          id="coi"
                        />
                        <label
                          htmlFor="coi"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition duration-300"
                        >
                          <Upload className="h-8 w-8 text-orange-400 mb-2" />
                          <span className="text-sm text-orange-600 text-center px-2">
                            {uploadData.coi ? uploadData.coi.name : "Choose File"}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">PDF, DOC, JPG, PNG</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-orange-900 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 text-red-500" />
                        Upload W9 Form *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload(e, 'w9Form')}
                          className="hidden"
                          id="w9-form"
                        />
                        <label
                          htmlFor="w9-form"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition duration-300"
                        >
                          <Upload className="h-8 w-8 text-orange-400 mb-2" />
                          <span className="text-sm text-orange-600 text-center px-2">
                            {uploadData.w9Form ? uploadData.w9Form.name : "Choose File"}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">PDF, DOC, JPG, PNG</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">Upload Status:</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className={`flex items-center ${uploadData.mcLetter ? 'text-green-600' : 'text-gray-500'}`}>
                      <CheckCircle className={`h-4 w-4 mr-2 ${uploadData.mcLetter ? 'text-green-600' : 'text-gray-400'}`} />
                      MC Letter
                    </div>
                    <div className={`flex items-center ${uploadData.coi ? 'text-green-600' : 'text-gray-500'}`}>
                      <CheckCircle className={`h-4 w-4 mr-2 ${uploadData.coi ? 'text-green-600' : 'text-gray-400'}`} />
                      COI
                    </div>
                    <div className={`flex items-center ${uploadData.w9Form ? 'text-green-600' : 'text-gray-500'}`}>
                      <CheckCircle className={`h-4 w-4 mr-2 ${uploadData.w9Form ? 'text-green-600' : 'text-gray-400'}`} />
                      W9 Form
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <button
                    onClick={() => setIsUploadModalOpen(false)}
                    className="px-6 py-3 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUploadSubmit}
                    className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105 flex items-center"
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Submit Documents
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-1">Document Requirements:</p>
                  <p>• MC Authority Letter (Motor Carrier Authority)</p>
                  <p>• COI (Certificate of Insurance)</p>
                  <p>• W9 Tax Form</p>
                  <p className="mt-2 text-orange-600">All documents must be clear and readable. Accepted formats: PDF, DOC, DOCX, JPG, PNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
