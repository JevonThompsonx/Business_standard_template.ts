const HomeWelcomeCardMobile = () => {
  return (
    <div className="w-full h-full bg-[url(images/Mobile/erik-brolin-wmZNEGkcsmw-unsplash.jpg)] bg-cover bg-center flex flex-col items-center justify-evenly rounded-2xl">
      <div className="h-3/5 w-full"></div>
      <div id="text-box" className="h-3/5 md:h-2/5 w-full bg-white/60 flex flex-col justify-evenly ">
        <h1 className="text">hola</h1>
        <p className="text">The mobile one</p>
        <button className="p-2 bg-white text-black h-14 w-32 rounded-2xl border-1 border-black"> Click me </button>
      </div>
    </div>
  )

}

export default HomeWelcomeCardMobile
