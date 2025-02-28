const HomeWelcomeCardMobile = () => {
  return (
    <div className="relative w-full h-full bg-[url(images/Mobile/erik-brolin-wmZNEGkcsmw-unsplash.jpg)] bg-cover bg-center flex flex-col justify-end rounded-2xl overflow-hidden">
      {/* Semi-transparent overlay with text */}
      <div className="bg-black/10 backdrop-blur-sm pt-4 px-5 pb-6 space-y-3.5">
        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Hola</h1>
          <p className="text-base text-white leading-snug">
            The mobile one
          </p>
        </div>

        {/* Action Button */}
        <button
          aria-label="Click me button"
          className="w-full py-2.5 px-5 bg-white/10 border border-white rounded-xl
                    active:bg-white/20 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
          <span className="text-sm font-semibold text-white">
            Click me
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomeWelcomeCardMobile
