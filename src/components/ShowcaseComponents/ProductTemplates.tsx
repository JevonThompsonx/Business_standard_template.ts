import { useState } from "react";
interface ButtonProps {
  ButtonText: string;
  Heading: string;
  Link: string;
  imageLink: string;
}

const ProductTemplate = ({
  ButtonText,
  Heading,
  Link,
  imageLink,
}: ButtonProps) => {
  return (
    <div
      className="h-80 w-full flex flex-col items-center rounded-2xl justify-evenly grow-2 bg-cover bg-center"
      style={{ backgroundImage: `url(/images/${imageLink})` }}
    >
      <div className="grow-1" />
      <div
        id="buttonHome"
        className="flex flex-row justify-evenly shrink w-full"
      >
        <button
          type="button"
          className="w-fit py-2.5 px-5 bg-white border border-white rounded-xl
              text-black hover:bg-white/90 active:bg-white/80
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          {ButtonText}
        </button>
        <a
          className="w-12 h-12 bg-white border border-white rounded-full
              text-black hover:bg-white/90 active:bg-white/80
              transition-colors duration-200 shadow hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
              flex items-center justify-center"
          href={Link}
        >
          <svg
            className="w-6 h-6 text-black transform rotate-[-45deg]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            role="graphics-symbol"
          >
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>{" "}
      </div>
      <div id="emptyspace" className="grow-8" />
      <div className="grow-1" />
      <h3 className="grow-2 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
        {Heading}
      </h3>
    </div>
  );
};

interface ButtonProps {
  ButtonText: string;
  Heading: string;
  Link: string;
}

const ProductTemplateWithEmail: React.FC<ButtonProps> = ({
  ButtonText,
  Heading,
  Link,
  imageLink,
}) => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
    if (isValid) {
      alert(`Subscribed with email: ${email}`);
    }
  };

  return (
    <div
      className="h-80 w-full flex flex-col items-center rounded-2xl bg-cover bg-center justify-evenly grow-2"
      style={{ backgroundImage: `url(/images/${imageLink})` }}
    >
      {/* Empty space at the top */}
      <div className="grow-1" />

      {/* Buttons */}
      <div
        id="buttonHome"
        className="flex flex-row justify-evenly shrink w-full"
      >
        <button
          type="button"
          className="w-fit py-2.5 px-5 bg-white border border-white rounded-xl
              text-black hover:bg-white/90 active:bg-white/80
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          {ButtonText}
        </button>

        <a
          className="w-12 h-12 bg-white border border-white rounded-full
              text-black hover:bg-white/90 active:bg-white/80
              transition-colors duration-200 shadow hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
              flex items-center justify-center"
          href={Link}
        >
          <svg
            className="w-6 h-6 text-black transform rotate-[-45deg]" // Rotate the SVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            role="graphics-symbol"
          >
            <path
              fill="currentColor"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </div>

      {/* Empty space in the middle */}
      <div id="emptyspace" className="grow-8" />

      {/* Email Input Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-4"
      >
        <h3 className="grow-2 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
          {Heading}
        </h3>
        <div className="w-full max-w-xs flex flex-col gap-2 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              setIsValid(true); // Reset validation on input change
            }}
            className={`w-5/6 px-4 py-2 rounded-lg border ${
              isValid ? "border-white" : "border-red-500"
            } bg-white/20 text-white placeholder-white/70
                      focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent`}
          />

          {!isValid && (
            <p className="text-red-500 text-sm">
              {" "}
              {/* Red text */}
              Please enter a valid email address.
            </p>
          )}
          <button
            type="submit"
            className="w-5/6 py-2.5 px-5 bg-white border border-white rounded-xl
                      text-black hover:bg-white/90 active:bg-white/80
                      transition-colors duration-200
                      focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </div>
      </form>

      {/* Empty space at the bottom */}
      <div className="grow-1" />
    </div>
  );
};
export { ProductTemplate, ProductTemplateWithEmail };
