import React from 'react';
import { categories, hygiene_categories } from '../../data/categories';
import { SectionWrapper } from '../../styled';
import { Category } from '../category/category';
import { CategoriesWrapper, MainHeadingWrapper } from './styled';

export const Products= () => {
  return (
    <SectionWrapper id="products" backgroundColor="#F7F7F7">
        <MainHeadingWrapper>Organic Products</MainHeadingWrapper>
      <CategoriesWrapper>
        {categories.map((category, i) => {
          return (
            <Category
              key={i}
              name={category?.name}
              image={category?.image}
              price={category?.price}
              description={category?.description}
            />
          );
        })}
      </CategoriesWrapper>
        <MainHeadingWrapper>Hygiene Products</MainHeadingWrapper>
      <CategoriesWrapper>
        {hygiene_categories.map((category, i) => {
          return (
            <Category
              key={i}
              name={category?.name}
              image={category?.image}
              price={category?.price}
              description={category?.description}
            />
          );
        })}
      </CategoriesWrapper>
    </SectionWrapper>
  );
};


