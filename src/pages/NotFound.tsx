import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui_components/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark to-navy-light flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg">
        <div className="text-9xl animate-pulse">🚫</div>

        <h1 className="text-6xl font-black text-white tracking-tight">
          404 - Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Oops! The page <code className="bg-muted px-2 py-1 rounded font-mono">{location.pathname}</code> doesn't exist or was moved.
        </p>

        <Button asChild className="group inline-flex items-center gap-2 bg-white text-navy-dark hover:bg-navy hover:text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
          <a href="/" className="flex items-center">
            <ArrowLeft className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="group-hover:text-white">🏠</span>
            <span className="ml-2 font-semibold">Back to Home</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
