import { Intro } from "./components/intro";
import { OurCoffees } from "./components/OurCoffees";
import { HomeContainer } from "./styles.ts";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />

      <OurCoffees />
    </HomeContainer>
  );
}