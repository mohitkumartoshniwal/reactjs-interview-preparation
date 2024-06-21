import Carousel from "./components/Carousel";

const images = [
  "https://picsum.photos/seed/1/800/500",
  "https://picsum.photos/seed/2/800/500",
  "https://picsum.photos/seed/3/800/500",
  "https://picsum.photos/seed/4/800/500",
  "https://picsum.photos/seed/5/800/500",
];

const DELAY = 2000;

export default function App() {
  return <Carousel images={images} delay={DELAY} />;
}
