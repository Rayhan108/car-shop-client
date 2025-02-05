import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

//banner image data
const Banner = () => {
  const banners = [
    {
      id: 1,

      image:
        "https://i.ibb.co.com/qY5gFMNw/Black-and-Orange-Modern-Car-Sale-Banner.png",
    },
    {
      id: 2,

      image: "https://i.ibb.co.com/jPgJHG4M/Screenshot-2025-02-03-030352.png",
    },
    {
      id: 3,

      image:
        "https://i.ibb.co.com/nqCTRvyF/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-1.png",
    },
  
    {
      id: 4,

      image:
        "https://i.ibb.co.com/HDYFDyk3/Black-and-White-Car-Sale-Discount-Banner.png",
    },
   

    {
      id: 5,

      image:
        "https://i.ibb.co.com/v6vCFy7L/Red-and-White-Modern-Car-Sale-Promotion-Banner.png",
    },
    {
      id: 6,

      image:
        "https://i.ibb.co.com/cKf1Td4s/White-and-Pink-Modern-Auto-Parts-Sale-Banner.png",
    },
    {
      id: 7,

      image:
        "https://i.ibb.co.com/tPZZcTd3/Yellow-and-Black-Dark-and-Dynamic-Car-Sales-and-Promos-Business-Banner.png",
    },
    {
      id: 8,

      image:
        "https://i.ibb.co.com/MxQTMP7R/Yellow-and-White-Modern-Car-Sale-Banner.png",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className=" h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={banner.image}
                
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
