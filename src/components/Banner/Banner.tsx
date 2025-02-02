import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Special Offer!",
      description: "Get 20% off on all car accessories this week.",
      image: "https://i.ibb.co.com/qY5gFMNw/Black-and-Orange-Modern-Car-Sale-Banner.png",
     
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Check out the latest car models in our showroom.",
      image: "https://i.ibb.co.com/jPgJHG4M/Screenshot-2025-02-03-030352.png",
    },
    {
      id: 3,
      title: "Trade-In Deals",
      description: "Upgrade your car with amazing trade-in offers.",
      image: "https://i.ibb.co.com/nqCTRvyF/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-1.png",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Carousel    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className=" h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
          
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Banner;