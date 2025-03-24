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
              style={{ backgroundImage: 'url(/instructor1.jpg)' }}
            />
            <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-8 rounded-lg">
              <h3 className="text-2xl mb-4 text-white">Morning Flow Masterclass</h3>
              <p className="mb-6 font-light text-white">
                Start your day with energy and intention through our sunrise vinyasa flow session.
              </p>
              <a
                href="/events/morning-flow"
                className="self-start border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors rounded"
              >
                Join Session
              </a>
            </div>
          </div>

          {/* Workshop 2 */}
          <div className="relative flex-1 basis-full sm:basis-[calc(50%-1rem)] min-h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: 'url(/instructor2.jpg)' }}
            />
            <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end p-8 rounded-lg">
              <h3 className="text-2xl mb-4 text-white">Advanced Asana Workshop</h3>
              <p className="mb-6 font-light text-white">
                Deepen your practice with expert guidance on advanced postures and alignment.
              </p>
              <a
                href="/events/advanced-asana"
                className="self-start border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors rounded"
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