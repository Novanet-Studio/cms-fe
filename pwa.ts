export default {
  meta: {
    title: "Caracas Multi Sport - Sitio web",
    name: "CCS Multi Sport web",
    author: "Novanet Studio <info@novanet.studio>",
    description:
      "Centro Deportivo que integra los sectores del deporte y la salud. Nuestro objetivo principal es mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de diversas disciplinas deportivas.",
    theme_color: "#fff",
    lang: "es",
  },
  manifest: {
    name: "Caracas Multi Sport - Sitio web",
    short_name: "CCS Multi Sport web app ",
    description:
      "Integramos los sectores del deporte y la salud con el  objetivo principal de mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de diversas disciplinas deportivas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fff",
  },
  icon: { source: "assets/images/favicon.png" },
  workbox: {
    enabled: false,
  }
};
