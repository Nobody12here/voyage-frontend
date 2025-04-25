import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              className="w-full h-[400px]"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107129.77009446056!2d-93.7892!3d32.5159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862b75cc6384c237%3A0x6bf97b8977d1226f!2sBossier%20City%2C%20LA!5e0!3m2!1sen!2sus!4v1652438995571!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
          <div className="p-4 bg-[#0F2B5B] text-white">
            <h3 className="text-lg font-medium">Discover popular destinations</h3>
            <p className="text-gray-300 text-sm">Explore our curated selection of amazing places to visit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;