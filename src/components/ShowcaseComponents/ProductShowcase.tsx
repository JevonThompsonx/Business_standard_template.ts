import { ProductTemplate, ProductTemplateWithEmail } from "./index";

const ProductShowcase = () => {
  // Example data for ComponentAttributeList
  const ComponentAttributeList = [
    {
      id: 4,
      ButtonText: "Lorem",
      Link: "blahblahlink",
      Heading: "lorem lorem",
      imageLink: "kike-vega-F2qh3yjz6Jk-unsplash.jpg",
    },
    {
      id: 1,
      ButtonText: "Lorem",
      Link: "blahblahlink",
      Heading: "lorem lorem",
      imageLink: "klara-kulikova-6MxPH_N4huE-unsplash.jpg",
    },
  ];

  const ComponentAttributeListForEmailComponent = [
    {
      id: 4,
      ButtonText: "Lorem",
      Link: "blahblahlink",
      Heading: "lorem lorem",
      imageLink: "william-farlow-IevaZPwq0mw-unsplash.jpg",
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
