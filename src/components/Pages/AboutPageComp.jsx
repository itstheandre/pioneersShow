import React from "react"
import { useWrapper } from "../../Context/WrapperContext"
import {
  AboutPageHero,
  AboutBody,
  AboutContent,
} from "../../styled/S_AboutPage"
import { AboutPageBG } from "../../utils/image-loader"
import { UpperCased, MainHeroTitle, AboutBodyText } from "../../styled/Titles"

const AboutPageComp = () => {
  const { ref } = useWrapper()
  const data = useWrapper()
  console.log(data)
  return (
    <>
      <AboutPageHero ref={ref} img={AboutPageBG}>
        <UpperCased>About</UpperCased>
        <MainHeroTitle>
          Do you know what you want to do when you “grow up”?
        </MainHeroTitle>
      </AboutPageHero>
      <AboutBody>
        <AboutContent>
          <AboutBodyText>
            This question haunts millions people all over the world, no matter
            what country, education or even age. Figuring out a purpose is hard
            for a lot of people, so follow along the interviews and conversation
            to figure out how these people did exactly that - or are still
            doing.
          </AboutBodyText>
          <AboutBodyText>
            The Pioneers Show is a podcast that displays real conversations with
            innovators, entrepreneurs, makers, and thinkers about how to develop
            the best life one can have. Learn about different career paths,
            different industries, technologies, and try to take some of the
            blurry information that there is out there about these topics.
          </AboutBodyText>
          <AboutBodyText>
            Every week we try to bring fresh different perspectives on how to
            build your dream career.{" "}
          </AboutBodyText>
          <AboutBodyText>
            Entrepreneurship, Intrapreneurship, Innovation are just one type of
            path that you can try.
          </AboutBodyText>
        </AboutContent>
      </AboutBody>
    </>
  )
}

export default AboutPageComp

//   <p>
