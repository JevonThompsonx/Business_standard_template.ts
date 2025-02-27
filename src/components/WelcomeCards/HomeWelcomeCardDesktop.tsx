const HomeWelcomeCardDesktop = () => {
  return (
    <div className="w-[90%] mx-auto h-auto aspect-video bg-[url(/images/kaylee-garrett-GaprWyIw66o-unsplash.jpg)] bg-cover bg-center flex flex-col items-center justify-evenly rounded-2xl">
      <div className="h-3/5 w-full"></div>
      <div id="text-box" className="h-3/5 md:h-2/5 w-full bg-white/60 flex flex-col justify-evenly ">
        <h1 className="text">hola</h1>
        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, non!</p>
        <button className="p-2 bg-white text-black h-14 w-32 rounded-2xl border-1 border-black"> Click me </button>
      </div>
    </div>
  )

}

export default HomeWelcomeCardDesktop
