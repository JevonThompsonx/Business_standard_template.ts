import { Nav, HomeWelcomeCard } from "../components"
export default function Home() {

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center h-screen w-screen bg-white">
        <HomeWelcomeCard />

      </div>
    </>
  );
}
