const WorkshopSection = () => {
  return (
    <section className="py-16 px-4 w-5/6 mx-auto rounded-lg">
      <div className="mx-auto w-full">
      <h2 className="text-4xl font-light text-center mb-12 text-gray-800">
      Workshop Events
      </h2>
      
      <div className="flex flex-wrap gap-8 justify-center">
      {/* Workshop 1 */}
      <div className="relative flex-1 basis-full sm:basis-[calc(50%-1rem)] min-h-[400px] rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/geert-pieters-AfgJpWQH4lw-unsplash.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-8 rounded-lg">
        <h3 className="text-2xl mb-4 text-white">Morning Flow Masterclass</h3>
        <p className="mb-6 font-light text-white">
        Start your day with energy and intention through our sunrise vinyasa flow session.
        </p>
        <a
        href="/404"
        className="self-start px-6 py-2 hover:bg-white hover:text-black transition-colors rounded text-white"
        >
        Join Session
        </a>
      </div>
      </div>

      {/* Workshop 2 */}
      <div className="relative flex-1 basis-full sm:basis-[calc(50%-1rem)] min-h-[400px] rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/geert-pieters-3RnkZpDqsEI-unsplash.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-8 rounded-lg">
        <h3 className="text-2xl mb-4 text-white">Advanced Asana Workshop</h3>
        <p className="mb-6 font-light text-white">
        Deepen your practice with expert guidance on advanced postures and alignment.
        </p>
        <a
        href="/404"
        className="self-start px-6 py-2 hover:bg-white hover:text-black transition-colors rounded text-white"
        >
        Learn More
        </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;