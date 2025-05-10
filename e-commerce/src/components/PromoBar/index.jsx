const PromoBar = () => {
    return (
      <div className="bg-black text-white text-sm text-center py-2 px-4 flex justify-center items-center relative">
        <span>
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline font-semibold">
            Sign Up Now
          </a>
        </span>
        <button className="absolute right-4 text-white text-lg">&times;</button>
      </div>
    );
  };
  
  export default PromoBar;
  