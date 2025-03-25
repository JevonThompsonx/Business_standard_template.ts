interface Instructor {
  id: number;
  firstName: string;
  lastName: string;
  experience: string;
  specialty: string;
  image: string;
}

const InstructorCard = ({ instructor }: { instructor: Instructor }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-center bg-cover sm:h-80 lg:h-96"
      style={{ backgroundImage: `url(${instructor.image})`}}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 flex flex-col justify-end p-6 sm:bg-gradient-to-t sm:from-black/25 sm:via-transparent sm:to-black/50 lg:bg-gradient-to-t lg:from-black/50 lg:via-transparent lg:to-black/50">
        <h3 className="text-xl font-bold text-white mb-2 sm:text-2xl lg:text-2xl"> 
          {instructor.firstName}<br />
          {instructor.lastName}
        </h3>
        <p className="text-gray-200 mb-4 whitespace-pre-line sm:text-lg lg:text-lg"> 
          {instructor.specialty}
        </p>
        <div className="flex gap-2">
          <a href="/404" className="backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-white hover:bg-white/20 transition sm:px-6 sm:py-3 lg:px-6 lg:py-3 lg:text-lg"> 
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

const AllInstructorsLink = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-center bg-cover sm:h-80 lg:h-96"
      style={{ backgroundImage: `url(/images/anna-zhynhel-i37NeYj0JV4-unsplash.jpg)` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-black via-transparent to-black/50 sm:bg-gradient-to-t sm:from-black/25 sm:via-transparent sm:to-black/50 lg:bg-gradient-to-t lg:from-black/50 lg:via-transparent lg:to-black/50">
        <h3 className="text-xl font-bold text-white mb-4 sm:text-2xl lg:text-2xl"> 
          Our<br />Instructors
        </h3>
        <p className="text-gray-200 mb-8 max-w-md sm:text-lg lg:text-lg"> 
          Discover our full team of certified yoga professionals dedicated to your wellness journey
        </p>
        <a href="/404" className="backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full text-white hover:bg-white/20 transition sm:px-8 sm:py-4 lg:px-8 lg:py-4 lg:text-m"> 
          View All Instructors
        </a>
      </div>
    </div>
  );
};

const MeetInstructors = () => {
  const instructors: Instructor[] = [
    {
      id: 1,
      firstName: "Sarah",
      lastName: "Wilson",
      experience: "10+ years experience",
      specialty: "Vinyasa &\nHatha Yoga",
      image: "/images/instructors/annie-spratt--l-eemJU0vE-unsplash.jpg",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Chen",
      experience: "8+ years experience",
      specialty: "Ashtanga &\nPower Yoga",
      image: "/images/instructors/timo-volz-ZlFKIG6dApg-unsplash.jpg",
    },
    {
      id: 3,
      firstName: "Priya",
      lastName: "Sharma",
      experience: "12+ years experience",
      specialty: "Yin &\nRestorative Yoga",
      image: "/images/instructors/bruce-mars-gJtDg6WfMlQ-unsplash.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-5/6 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 lg:text-4xl">
          Meet Our Instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
          <AllInstructorsLink />
        </div>
      </div>
    </section>
  );
};

export default MeetInstructors;
