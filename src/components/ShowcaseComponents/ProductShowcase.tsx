import { ProductTemplate } from "./index";

const ProductShowcase = () => {
  // Example data for ComponentAttributeList
  const ComponentAttributeList = [
    { id: 4, ButtonText: "Hi bud", Link: "blahblahlink", Heading: "lorem lorem" },
    { id: 1, ButtonText: "Hi bud", Link: "blahblahlink", Heading: "lorem lorem" },
    { id: 2, ButtonText: "Hi bud", Link: "blahblahlink", Heading: "lorem lorem" },
  ];

  return (
    <div className="welcomeBottom w-full h-1/2 bg-amber-800 flex flex-row justify-evenly">
      {ComponentAttributeList.map((product) => (
        <ProductTemplate key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductShowcase;
