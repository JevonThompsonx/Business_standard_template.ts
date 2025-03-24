const WorkshopSection = () => {
  return (
    <section className="py-16 px-4 bg-white w-5/6 mx-auto">
      <div className="mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-12 text-black">
          Workshop Events
        </h2>
        
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Workshop 1 */}
          <div className="relative flex-1 basis-full sm:basis-[calc(50%-1rem)] min-h-[400px] rounded-lg overflow-hidden shadow-lg">
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
                href="/events/morning-flow"
                className="self-start border px-6 py-2 hover:bg-current hover:text-black transition-colors rounded text-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white"
                >
                Join Session
                </a>
              </div>
              </div>

              {/* Workshop 2 */}
              <div className="relative flex-1 basis-full sm:basis-[calc(50%-1rem)] min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url(/images/geert-pieters-3RnkZpDqsEI-unsplash.jpg)' }}
              />
              <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-8 rounded-lg">
                <h3 className="text-2xl mb-4 text-white dark:text-black">Advanced Asana Workshop</h3>
                <p className="mb-6 font-light text-white dark:text-black">
                Deepen your practice with expert guidance on advanced postures and alignment.
                </p>
                <a
                href="/events/advanced-asana"
                className="self-start border px-6 py-2 hover:bg-current hover:text-black transition-colors rounded text-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white"
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