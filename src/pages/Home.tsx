import { Nav, ReactiveWelcomeCard, ProductShowcase } from "../components"
export default function Home() {

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center min-h-fit w-screen bg-white overflow-auto">
        <ReactiveWelcomeCard />
        <ProductShowcase />
      </div>
    </>
  );
}
