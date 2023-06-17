'use client';
import { About } from './components/about/about';
import Contact from './components/contact/contact';
import { Footer } from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { Products } from './components/products/products';
import { AppWrapper, MainHeadingWrapper, MainSubHeadingWrapper, MainWrapper, SectionsWrappper } from './styled';



export default function Home() {
  return (
    <AppWrapper>
      <Navbar />
      <main>
        <MainWrapper id="home">
          <MainHeadingWrapper>Feli Brands</MainHeadingWrapper>
          <MainSubHeadingWrapper>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </MainSubHeadingWrapper>
        </MainWrapper>
        <SectionsWrappper>
          <Products />
          <About />
          <Contact />
        </SectionsWrappper>
      </main>
      <Footer />
    </AppWrapper>
  );
}
