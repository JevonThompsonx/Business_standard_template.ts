interface ButtonProps {
  ButtonText: string;
  Heading: string;
  Link: string;
}
const ProductTemplate = ({ ButtonText, Heading, Link }: ButtonProps) => {
  return (
    <div className="h-80 w-full flex flex-col items-center rounded-2xl">
      <button>{ButtonText}</button>
      <button>{Link}</button>
      <h3>{Heading}</h3>
    </div>
  )
}

export default ProductTemplate

