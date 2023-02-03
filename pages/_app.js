import "@/styles/globals.css";
import Slider from "@/components/Slider";

export default function App({ Component, pageProps }) {
  return (
    <Slider>
      <Component {...pageProps} />
    </Slider>
  );
}
