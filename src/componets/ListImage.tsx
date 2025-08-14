import Image from "next/image";

export const ListImage = ({ num }: { num: string }) => {
  const images = [
    { href: '/', title: 'Dia de muertos', src: "/images/articles/1.jpg" },
    { href: '/', title: 'Carnaval', src: "/images/articles/1.jpg" },
    { href: '/', title: 'Fiesta patronal', src: "/images/articles/1.jpg" },
    { href: '/', title: 'Posadas', src: "/images/articles/1.jpg" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-auto object-cover object-center"
            src={image.src}
            alt={image.title}
          />
        </div>
      ))}
    </div>
  )
}
