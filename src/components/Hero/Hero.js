import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FiMail } from "react-icons/fi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
  HeroButton
} from "./HeroStyles";

const Hero = () => {
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };
  const variants = {
    hover: {
      h: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6
      }
    }
  };

  const { ref, inView } = useInView({
    rootMargin: "-100px"
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <HeroSection>
      <HeroImage className='pattern' src='./images/hero-pattern-bg-lg.png' />
      <HeroImage className='guy' src='./images/hero-guy-1.png' />
      <CharacterContainer>
        <ImageCharacter
          className='one'
          src='./images/image-1.png'
          variants={variants}
          whileHover='hover'
          drag
          dragConstraints={dragConstraints}
        />
        <ImageCharacter
          className='two'
          src='./images/image-2.png'
          variants={variants}
          whileHover='hover'
          drag
          dragConstraints={dragConstraints}
        />
        <ImageCharacter
          className='three'
          src='./images/image-3.png'
          variants={variants}
          whileHover='hover'
          drag
          dragConstraints={dragConstraints}
        />
      </CharacterContainer>
      <HeroContent>
        <Heading>We are Design Dynamics</Heading>
        <HeroText>We are a creative agency that focuses on design, development, branding, and beautiful animations.</HeroText>
        <ButtonContainer ref={ref}>
          <ButtonWrapper>
            <HeroButton className={inView ? "" : "corner"}>
              {inView ? <>Chat with us</> : <FiMail color='white' size='2.2rem' />}
            </HeroButton>
          </ButtonWrapper>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
