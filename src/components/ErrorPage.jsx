import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-700 max-h-screen text-white justify-center font-mono text-lg">
      <h1>Uh-Oh! This route does not exist.</h1>
      <Link to="/" className="hover:text-violet-600 items-center border p-4">
        Go to Home Page here!
      </Link>
    </div>
  );
};

export default ErrorPage;
