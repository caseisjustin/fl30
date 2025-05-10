const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
    },
    {
      name: "James L.",
      rating: 5,
      text: "The selection of clothes is not only diverse but also on-point with the latest trends. I'm thrilled to have stumbled upon Shop.co.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold">{item.name}</span>
                <span className="text-green-500 text-xs">✔ Verified</span>
              </div>
              <div className="text-yellow-500 mb-2">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </div>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  