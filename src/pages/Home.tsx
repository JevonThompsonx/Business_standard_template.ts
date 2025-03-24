import { Nav, ReactiveWelcomeCard, ProductShowcase, TestimonialCarousel, FAQSection, InstructorSection, WorkshopSection, Footer } from "../components"
export default function Home() {

  return (
    <>
      <div className="flex flex-col items-center min-h-fit w-screen bg-white overflow-auto space-y-8 md:space-y-10">

        <Nav />
        <ReactiveWelcomeCard />
        <ProductShowcase />
        <InstructorSection />
        <WorkshopSection />
        <TestimonialCarousel />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
