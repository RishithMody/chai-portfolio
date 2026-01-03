import photoSf from '@/assets/sf.jpeg';
import photoMountains from '@/assets/ny.jpeg';
import photoNyc from '@/assets/gc.jpeg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Photo {
  src: string;
  caption: string;
  date: string;
}

const photos: Photo[] = [
  {
    src: photoMountains,
    caption: 'NYC',
    date: '07/19',
  },
  {
    src: photoNyc,
    caption: 'Horse Shoe',
    date: '04/24',
  },
  {
    src: photoSf,
    caption: 'sf',
    date: '10/23',
  },
];

const PhotosSection = () => {
  return (
    <section id="snaps" className="py-24 px-6 md:px-12">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative group overflow-hidden aspect-[3/4] rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="photo-caption text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.date}, {photo.caption}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default PhotosSection;
