import Image from "next/image";
import { CategoryWrapper } from "../../styled";
import { CategoryDescription, CategoryHeading, CategoryImageWrapper } from "./styled";

export const Category = ({name, image, price, description }: any) => {
  return (
    <CategoryWrapper>
      <CategoryImageWrapper>
        <Image
          src={image}
          alt="Product Picture"
          style={{
            width: '100%',
            height: '30vh',
          }}
        />
      </CategoryImageWrapper>
      <CategoryHeading>
        {name}
      </CategoryHeading>
        <CategoryDescription color="black">
        {price}
      </CategoryDescription>
     <CategoryDescription color="black">
        {description}
      </CategoryDescription>
    </CategoryWrapper>
  );
}
