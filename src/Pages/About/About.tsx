import { Helmet } from "react-helmet-async";

const About = () => {
    return (
      <div className="bg-white min-h-screen py-12 px-6 sm:px-12 lg:px-24">
    <Helmet> <title>NextGen Cars | About</title></Helmet>
        <div className="max-w-7xl mx-auto bg-gray-50 border border-[#003d1f] rounded-xl shadow-2xl overflow-hidden">
          <div>
            <img
              src="https://i.ibb.co.com/qY5gFMNw/Black-and-Orange-Modern-Car-Sale-Banner.png"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
  
          <div className="p-8 sm:p-16">
            <h2 className="text-2xl font-title font-extrabold text--[#003d1f] mb-8 text-center">
              Who We Are
            </h2>
            <p className="text-lg font-body text-[#003d1f] leading-relaxed text-center mb-16 max-w-3xl mx-auto">
              NextGen Cars is your premier destination for cutting-edge automotive
              technology. We redefine driving with our innovative and eco-friendly
              vehicles, designed to meet the needs of modern lifestyles.
            </p>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <img
                    src="https://img.freepik.com/premium-photo/person-sketching-new-product-design-concept-digital-tablet-with-stylus_1310094-53790.jpg?ga=GA1.1.1728162004.1712419385&semt=ais_hybrid_sidr"
                    alt="Innovation"
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-title font-semibold mt-6">Innovation at Core</h3>
                <p className="font-body  mt-3 max-w-xs">
                  Driving the future with state-of-the-art automotive technology
                  that prioritizes performance and safety.
                </p>
              </div>
  
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <img
                    src="https://img.freepik.com/premium-photo/young-modern-happy-couple-buying-new-car-city-dealership-talking-with-salesman_283617-7763.jpg?ga=GA1.1.1728162004.1712419385&semt=ais_hybrid_sidr"
                    alt="Customer Focus"
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-title font-semibold mt-6">Customer Centric</h3>
                <p className="text-gray-600 font-body mt-3 max-w-xs">
                  Providing unparalleled service and quality to ensure customer
                  satisfaction with every vehicle purchase.
                </p>
              </div>
  
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <img
                    src="https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?ga=GA1.1.1728162004.1712419385&semt=ais_hybrid_sidr"
                    alt="Sustainability"
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-title font-semibold mt-6">Sustainability</h3>
                <p className="text-gray-600 font-body mt-3 max-w-xs">
                  Promoting eco-friendly practices and vehicles to create a greener,
                  more sustainable future.
                </p>
              </div>
            </div>
  
            <div className="mt-28">
              <h2 className="text-4xl font-title font-extrabold text-gray-800 text-center mb-8">
                Our Mission
              </h2>
              <p className="text-xl font-body leading-relaxed text-center max-w-5xl mx-auto">
                To revolutionize transportation by offering advanced, sustainable,
                and reliable vehicles that enhance driving experiences and reduce
                environmental impact.
              </p>
            </div>
  
            <div className="mt-24">
              <h2 className="text-4xl font-title font-extrabold text-gray-800 text-center mb-8">
                Why Choose Us?
              </h2>
              <div className="flex  flex-col sm:flex-row justify-center items-center sm:space-x-16">
                <div className="text-center sm:w-1/3 mb-12 sm:mb-0">
                  <h3 className="text-2xl font-title font-semibold">Unmatched Quality</h3>
                  <p className="text-gray-600 font-body mt-3">
                    Vehicles engineered to the highest standards, ensuring reliability
                    and durability.
                  </p>
                </div>
                <div className="text-center sm:w-1/3 mb-12 sm:mb-0">
                  <h3 className="text-2xl font-title font-semibold">Affordable Excellence</h3>
                  <p className="text-gray-600 font-body mt-3">
                    Combining affordability with cutting-edge features to make
                    excellence accessible.
                  </p>
                </div>
                <div className="text-center sm:w-1/3">
                  <h3 className="text-2xl font-title font-semibold">Expert Support</h3>
                  <p className="text-gray-600 mt-3 font-body">
                    A dedicated team to guide and assist you every step of the way,
                    from selection to maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;