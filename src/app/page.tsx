import Image from "next/image";
import { FeatureCard } from "@/componets/FeatureCard";
import { featuresData } from "@/data/Data";
import { ListImage } from "@/componets/ListImage";

export default function Page() {

  return (
    <>
      <section>
        <div className="bg-fixed bg-center bg-cover h-screen flex items-center justify-center relative  bg-[url('/images/bg_img.jpg')]">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative text-white text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Santa Inés Yatzeche
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Descubre la esencia de nuestro pueblo zapoteca en el corazón de Oaxaca
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/history" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all hover-lift font-medium">
                Conoce Nuestra Historia
              </a>
              <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all hover-lift font-medium">
                Explora la Cultura
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary mb-4">Bienvenidos</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-neutral mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Pueblo Zapoteco</h3>
                <p className="text-gray-600 leading-relaxed">
                  Santa Inés Yatzeche es una comunidad zapoteca ubicada en los Valles
                  Centrales de Oaxaca. Sus habitantes preservan con orgullo sus tradiciones
                  y costumbres ancestrales, así como su lengua materna, el zapoteco.
                </p>
              </div>
              <div className="w-fit m-auto">
                <div className="text-center border-gray-300 rounded-lg p-4 bg-white shadow-2xl rotate-5">
                  <Image src="/images/church.jpg" alt="" width={300} height={200} />
                </div>
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">¿Qué nos hace especiales?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-neutral mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <FeatureCard key={index} icon={feature.emoji} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>

          <div className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Galeria</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-neutral mx-auto"></div>
            </div>
            <ListImage num="3" />
          </div>

        </div>
      </section>
    </>
  );
}
