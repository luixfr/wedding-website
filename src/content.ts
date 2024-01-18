import ceremonia from "./assets/image/ceremonia.svg";
import recepcion from "./assets/image/amor-globos.svg";
import fiesta from "./assets/image/fiesta.svg";
import dinner from "./assets/image/dinner.svg";
import bienvenida from "./assets/image/recepcion.svg";
import pastel from "./assets/image/pastel.svg";
import despedida from "./assets/image/despedida.svg";
import { HiSun, GiBowTie, FaShoePrints, CoChild } from "oh-vue-icons/icons";
export const esContent = {
  header: {
    texto:
      "Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.",
    cita: "Gensis 2:24",
  },
  invitation: {
    title: "Nos Vamos a Casar!",
    invitation:
      "Nos complacemos en ivitarle a nuestra unión, y el intercambio de nuestros votos de amor y compromiso",
  },
  cards: {
    place: {
      title: "7910 S. Vineland road Bakersfield, CA 93307",
      button: "Ven en Google Maps",
    },
    time: {
      title: "Sábado 16 de Marzo. 1:00pm",
      button: "Agregar al Calendario",
    },
  },
  countDown: { title: "Faltan" },
  rsvp: {
    title: "Nos acompanas?",
    card: {
      title: "Confirma tu asistencia",
      pastel: {
        title: "Ayudanos a calcular el pastel",
        subtitle: "Puedes hacer lo siguiente",
      },
      msg: {
        title: "Mandanos un mensaje",
        subtitle: "Ya conoces nuesto numero",
      },
      form: {
        title: "Llena el formulario",
        subtitle: "Haz click en el boton para confimar tu asistencia",
      },
      button: "Confirma aqui!",
    },
  },
  schedule: {
    title: "Como va estar la fiesta?",
    schedule: [
      { img: ceremonia, title: "Ceremonia", time: "De 1:00 a 2:30pm" },
      { img: recepcion, title: "Recepcion", time: "Inicia a las 2:30pm" },
      { img: bienvenida, title: "Bienvenida", time: "De 3:30 a 3:45pm" },
      { img: dinner, title: "Cena", time: "De 3:45 a 6:00pm" },
      { img: pastel, title: "Pastel", time: "De 6:00 a 6:30pm" },
      { img: fiesta, title: "Convivo", time: "6:30pm a 8:00pm" },
      { img: despedida, title: "Despedida", time: "8:00 a 8:15pm" },
    ],
  },
  registry: {
    title: "Regalos",
    text:
      "Nuestra preferencia de regalo de boda es monetario pero están invitados a traer y dar lo que Dios ha puesto en su corazón. De antemano les agradecemos por pensar en nosotros y compartir con nosotros las bendiciones que Dios les ha dado.",
  },
  hotels: { title: "Opciones de Hospedaje" },
  recommendations: {
    title: "Recomnedaciones",
    subtitle:
      "Gracias por visitar nuestra página de boda. Antes de despedirnos quisiéramos darles algunas últimas recomendaciones.",
    recommendations: [
      {
        icon: HiSun.name,
        text:
          "Nuestra boda será al aire libre, por lo cual están invitados a traer lo necesario para que puedan tener una experiencia cómoda y bonita.",
      },
      {
        icon: GiBowTie.name,
        text:
          "La vestimenta será formal pero está invitado a venir como guste lo más importante para nosotros es su asistencia.",
      },
      {
        icon: FaShoePrints.name,
        text:
          "Se les anuncia que la ceremonia se llevará a cabo en el pasto para pensar en la opción de zapatos.",
      },
      {
        icon: CoChild.name,
        text:
          "Finalmente, se les pide a los padres de familia que cuiden de sus niños durante su tiempo en nuestra boda para evitar peligros y accidentes. Nuestro deseo es compartir nuestro día especial con ustedes y que ambos tengamos una experiencia linda y sobre todo con la bendición de Dios. Dios los bendiga y los esperamos pronto!",
      },
    ],
  },
  footer: {
    links: [
      { link: "#detalles", title: "Detalles" },
      { link: "#rsvp", title: "Confirma" },
      { link: "#schedule", title: "Itinerario" },
      { link: "#registry", title: "Regalos" },
      { link: "#hospedaje", title: "Hospedaje" },
      { link: "#recomendaciones", title: "Recomendaciones" },
    ],
  },
};
