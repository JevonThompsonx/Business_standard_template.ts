const HomeWelcomeCardDesktop = () => {
  return (
    <div className="w-[90%] mx-auto h-auto aspect-video bg-[url(/images/Desktop/klara-kulikova-6MxPH_N4huE-unsplash.jpg)] bg-cover bg-center flex flex-row items-center justify-evenly rounded-2xl">
      <div id="text-box" className="h-full w-2/5 bg-white/60 flex flex-col justify-evenly ">
        <h1 className="text">hola</h1>
        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, non!</p>
        <button className="p-2 bg-white text-black h-14 w-32 rounded-2xl border-1 border-black"> Click me </button>
      </div>
      <div className="h-full w-3/5"></div>
    </div>
  )

}

export default HomeWelcomeCardDesktop
