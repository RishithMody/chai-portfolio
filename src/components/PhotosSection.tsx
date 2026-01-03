import photoSf from '@/assets/sf.jpeg';
import photoMountains from '@/assets/ny.jpeg';
import photoNyc from '@/assets/gc.jpeg';
import photoPr from '@/assets/pr.jpeg';
import photofg from '@/assets/fg.jpeg';
import photogc2 from '@/assets/gc2.jpeg';

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
  {
    src: photoPr,
    caption: 'prescott, Az',
    date: '07/25',
  },
  {
    src: photofg,
    caption: 'flagstaff, Az',
    date: '09/24',
  },
  {
    src: photogc2,
    caption: 'grand canyon, Az',
    date: '09/24',
  }

];

const PhotosSection = () => {
  return (
    <section id="snaps" className="py-24 px-6 md:px-12">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden aspect-[3/4] rounded-xl flex-shrink-0 w-[280px] md:w-[320px]"
          >
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
        ))}
      </div>
    </section>
  );
};

export default PhotosSection;
