import photoSf from '@/assets/photo-sf.jpg';
import photoMountains from '@/assets/photo-mountains.jpg';
import photoNyc from '@/assets/photo-nyc.jpg';

interface Photo {
  src: string;
  caption: string;
  date: string;
}

const photos: Photo[] = [
  {
    src: photoMountains,
    caption: 'leh, india',
    date: '05/23',
  },
  {
    src: photoNyc,
    caption: 'new york',
    date: '05/25',
  },
  {
    src: photoSf,
    caption: 'golden gate',
    date: '12/23',
  },
];

const PhotosSection = () => {
  return (
    <section id="snaps" className="py-24">
      <div className="grid md:grid-cols-3 gap-0">
        {photos.map((photo, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-[50vh] object-cover transition-transform duration-700 group-hover:scale-105"
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
