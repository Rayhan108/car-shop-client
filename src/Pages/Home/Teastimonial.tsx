import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Satisfied Customer",
    image:
      "https://img.freepik.com/free-photo/handsome-man-making-ok-sign_1368-6336.jpg?ga=GA1.1.1728162004.1712419385&semt=ais_hybrid_sidr.me/api/portraits/men/10.jpg",
    message:
      "NextGen Cars has completely transformed my driving experience. The cars are top-notch, and the customer service is impeccable!",
  },
  {
    name: "Jane Smith",
    role: "Loyal Client",
    image:
      "https://img.freepik.com/premium-photo/portrait-happy-smiling-cheerful-young-support-phone-operator_78203-931.jpg?ga=GA1.1.1728162004.1712419385&semt=ais_hybrid_sidr",
    message:
      "From the moment I stepped into the showroom, I was blown away by their professionalism and range of cars. Highly recommend!",
  },
  {
    name: "Mike Johnson",
    role: "Car Enthusiast",
    image:
      "https://img.freepik.com/free-photo/handsome-satisfied-bearded-man-show-okay-sign_176420-17944.jpg?ga=GA1.1.1728162004.1712419385&semt=ais_hybrid_sidrpg",
    message:
      "The best car showroom in town. They offer amazing deals and the latest models. I wouldn’t go anywhere else!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-12 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl md:py-6  font-extrabold font-title text-center mb-12">
      What Our Customers Say
      </h2>
      <motion.div
        className="max-w-4xl mx-auto"
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 shadow-xl rounded-2xl border-[#003d1f] border-2">
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-40 mb-3 h-40 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <AvatarImage className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg "
                src={testimonials[currentIndex].image}
                alt="User Avatar"
              />
            </Avatar>
            <CardTitle className="text-2xl font-title font-bold text-gray-800">
              {testimonials[currentIndex].name}
            </CardTitle>
            <p className="text-[#003d1f] font-body text-lg">
              {testimonials[currentIndex].role}
            </p>
          </CardHeader>
          <CardContent className="text-center  mt-6">
            <p className=" font-body text-lg leading-relaxed">
              "{testimonials[currentIndex].message}"
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Testimonial;
