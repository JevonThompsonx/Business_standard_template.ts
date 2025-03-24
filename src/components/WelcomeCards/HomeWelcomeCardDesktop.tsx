const HomeWelcomeCardDesktop = () => {
  return (
    <div className="w-full h-full bg-[url(/images/Desktop/mor-shani-FIxc0thOzEQ-unsplash.jpg)] bg-cover bg-center flex flex-row items-center rounded-2xl shadow-lg">
      <div id="text-box" className="h-full w-2/5 bg-black/50 flex flex-col justify-end items-start p-8 font-semibold text-white rounded-l-2xl space-y-4">
        <button className="w-4/5 py-3 px-6 bg-white/20 border border-white rounded-xl
                    hover:bg-white/30 active:bg-black/30 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"> Unwind </button>
        <h1 className="font-bold text-3xl text-white tracking-tight leading-tight">Lorem, ipsum dolor.</h1>
        <p className="text-lg pb-4 text-white/90 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ipsam doloribus enim sit dicta quisquam neque blanditiis </p>
      </div>
      <div className="h-full w-3/5"> </div>
    </div>
  )
}

export default HomeWelcomeCardDesktop
