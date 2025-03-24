import { Link } from 'react-router-dom';

const HomeWelcomeCardMobile = () => {
  return (
    <div className="relative w-full h-full bg-[url(images/Mobile/erik-brolin-wmZNEGkcsmw-unsplash.jpg)] bg-cover bg-center flex flex-col justify-end rounded-2xl overflow-hidden shadow-lg">
      {/* Semi-transparent overlay with text */}
      <div className="bg-black/30 backdrop-blur-md pt-6 px-6 pb-8 space-y-4">
        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-white drop-shadow-md">Hola</h1>
          <p className="text-lg text-white leading-relaxed drop-shadow-md">
            The mobile one
          </p>
        </div>

        {/* Action Button */}
        <Link to="/404" aria-label="Click me button">
          <button
            className="w-full py-3 px-6 bg-white/20 border border-white rounded-xl
                      active:bg-white/30 transition-colors duration-200
                      focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-md">
            <span className="text-base font-semibold text-white">
              Click me
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeWelcomeCardMobile;
