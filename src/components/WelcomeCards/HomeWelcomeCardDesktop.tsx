const HomeWelcomeCardDesktop = () => {
  return (
    // At some point I'm prob gonna change the image and adjust how the text is showing but this is good for now
    // to do: 
    // [] Choose which image I'll be using  
    //    [] Something that fits the color scheme 
    //      [] decide color scheme
    // [] Choose how the text will appear 
    //    [] font 
    //    [] transparency with image
    <div className="w-full h-full bg-[url(/images/Desktop/mor-shani-FIxc0thOzEQ-unsplash.jpg)] bg-cover bg-center flex flex-row items-center rounded-2xl">
      <div id="text-box" className="h-full w-2/5 bg-black/40 flex flex-col justify-end items-start pl-6 font-semibold text-white rounded-l-2xl">
        <button className="w-4/5 py-2.5 px-5 bg-white/10 border border-white rounded-xl
                    active:bg-black/20 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"> Unwind </button>
        <h1 className="font-bold text-white tracking-tight
                         leading-[1.2]">Lorem, ipsum dolor.</h1>
        <p className="text-lg pb-2 text-white/90 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ipsam doloribus enim sit dicta quisquam neque blanditiis </p>
      </div>
      <div className="h-full w-3/5"></div>
    </div>
  )

}

export default HomeWelcomeCardDesktop
