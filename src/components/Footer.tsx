const Footer = () => {
  return (
    <footer className="bg-navy-dark py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate text-sm">
          &copy; {new Date().getFullYear()} Kappala Sai Mohith.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
