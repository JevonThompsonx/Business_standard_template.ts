interface ButtonProps {
  ButtonText: string;
  Heading: string;
  Link: string;
}
const ProductTemplate = ({ ButtonText, Heading, Link }: ButtonProps) => {
  return (
    <div className="">
      <button>{ButtonText}</button>
      <button>{Link}</button>
      <h3>{Heading}</h3>
    </div>
  )
}

export default ProductTemplate

