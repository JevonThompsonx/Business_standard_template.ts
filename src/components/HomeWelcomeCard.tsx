const HomeWelcomeCard = () => {
  return (
    <div className="w-full aspect-video mx-6 bg-[url(/images/kaylee-garrett-GaprWyIw66o-unsplash.jpg)] bg-cover bg-center flex flex-col items-center justify-evenly">
      <div className="h-3/5 w-full"></div>
      <div id="text-box" className="h-2/5 w-full bg-white/60 flex flex-col">
        <h1 className="text-2xl">Hola</h1>
        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, non!</p>
        <button className="p-2 bg-white text-black h-14 w-32 rounded-2xl border-1 border-black"> Click me </button>
      </div>
    </div>
  )

}

export default HomeWelcomeCard
