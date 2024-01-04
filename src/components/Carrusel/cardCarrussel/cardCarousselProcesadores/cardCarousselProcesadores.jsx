import Style from "./cardCarousselProcesadores.module.css";

export default function CardCarrouselProcesadores({
  components,
  interval = 5000,
}) {

  return (
    <div className={Style.section}>
      <div className={Style.tittle}>
        <span className={Style.line_section} />
        <h2>Procesadores destacados: </h2>
      </div>
      <section className={Style.carrousel}>

      </section>
    </div>
  );
}