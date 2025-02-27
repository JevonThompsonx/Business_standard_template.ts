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
    <div className="w-full h-full bg-[url(/images/Desktop/mor-shani-FIxc0thOzEQ-unsplash.jpg)] bg-cover bg-center flex flex-row items-center justify-evenly rounded-2xl">
      <div id="text-box" className="h-full w-2/5 bg-white/20 flex flex-col justify-evenly items-start pl-6">
        <button className="p-1 bg-transparent font-bold text-black h-10 w-36 rounded-2xl border-1 border-black"> Unwind </button>
        <h1 className="">Lorem, ipsum dolor.</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium ipsam doloribus enim sit dicta quisquam neque blanditiis </p>
      </div>
      <div className="h-full w-3/5"></div>
    </div>
  )

}

export default HomeWelcomeCardDesktop
