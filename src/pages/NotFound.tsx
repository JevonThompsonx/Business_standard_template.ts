import { Nav } from "../components";

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-white text-center p-4">
        <h1 className="text-6xl font-extrabold mb-6 text-gray-800">404</h1>
        <p className="text-xl mb-4 text-gray-600">Page Not Found</p>
        <p className="text-md mb-2 text-gray-500">This is just a test site. To work with me, check out my links and feel free to reach out.</p>
        <p className="text-md text-gray-500">
          Email: <a href="mailto:WebDevJev@gmail.com" className="text-blue-500 underline">WebDevJev@gmail.com</a>
        </p>
        <p className="text-md text-gray-500 mt-4">
          Or check out my links here: <a href="https://link-tree-clone-mu.vercel.app/" className="text-blue-500 underline">Link Tree</a>
        </p>
      </div>
    </>
  );
}
