import Style from "./banner.module.css";
import { Button } from "../Index";

const Banner = () => {
  return (
    <article className={Style.banner}>
      <h2>Quieres saber quienes somos?</h2>
      <h2>Haz click abajo para conocernos mejor</h2>
      <Button
        text={"CONÓCENOS"}
        onClick={() => (window.location.href = "/aboutUs")}
      />
    </article>
  );
};

export default Banner;
