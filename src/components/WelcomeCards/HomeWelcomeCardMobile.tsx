const HomeWelcomeCardMobile = () => {
  return (
    <div className="relative w-full h-full bg-[url(images/Mobile/erik-brolin-wmZNEGkcsmw-unsplash.jpg)] bg-cover bg-center flex flex-col justify-end rounded-2xl overflow-hidden">
      {/* Semi-transparent overlay with text */}
      <div className="bg-white/40 backdrop-blur-sm pt-4 px-5 pb-6 space-y-3.5">
        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Hola</h1>
          <p className="text-base text-gray-700 leading-snug">
            The mobile one
          </p>
        </div>

        {/* Action Button */}
        <button
          aria-label="Click me button"
          className="w-full py-2.5 px-5 bg-black/10 border border-gray-900 rounded-xl
                    active:bg-black/20 transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
          <span className="text-sm font-semibold text-gray-900">
            Click me
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomeWelcomeCardMobile
