import { ProductTemplate, ProductTemplateWithEmail } from "./index";

const ProductShowcase = () => {
  // Example data for ComponentAttributeList
  const ComponentAttributeList = [
    {
      id: 4,
      ButtonText: "Hi bud",
      Link: "blahblahlink",
      Heading: "lorem lorem",
      
    },
    {
      id: 1,
      ButtonText: "Hi bud",
      Link: "blahblahlink",
      Heading: "lorem lorem",
    },
  ];

  const ComponentAttributeListForEmailComponent = [
    {
      id: 4,
      ButtonText: "Hi bud",
      Link: "blahblahlink",
      Heading: "lorem lorem",
    },
  ];
  return (
    <div
      className="
    welcomeBottom
    w-[90%]
    mx-auto
    h-fit
    flex
    flex-col
    justify-evenly
    space-y-2
    lg:grid
    lg:grid-rows-1
    lg:grid-cols-3
    lg:gap-2
  "
    >
      {ComponentAttributeList.map((product) => (
        <ProductTemplate key={product.id} {...product} />
      ))}
      {ComponentAttributeListForEmailComponent.map((product) => (
        <ProductTemplateWithEmail key={product.id} {...product} />
      ))}{" "}
    </div>
  );
};

export default ProductShowcase;
