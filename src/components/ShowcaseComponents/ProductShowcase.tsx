import { ProductTemplate } from "./index";

const ProductShowcase = () => {
  // Example data for ComponentAttributeList
  const ComponentAttributeList = [
    { id: 4, ButtonText: "Hi bud", Link: "blahblahlink", Heading: "lorem lorem" },
    { id: 1, ButtonText: "Hi bud", Link: "blahblahlink", Heading: "lorem lorem" },
    { id: 2, ButtonText: "Hi bud", Link: "blahblahlink", Heading: "lorem lorem" },
  ];

  return (
    <div className="welcomeBottom w-[90%] mx-auto h-fit flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
      {ComponentAttributeList.map((product) => (
        <ProductTemplate key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductShowcase;
