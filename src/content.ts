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

export const enContent = {
  header: {
    texto:
      "Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh.",
    cita: "Genesis 2:24",
  },
  invitation: {
    title: "We are getting married!",
    invitation:
      "We are pleased to invite you to witness our union and the exchange of our vows of love and commitment.",
  },
  cards: {
    place: {
      title: "7910 S. Vineland road Bakersfield, CA 93307",
      button: "Open in Google Maps",
    },
    time: {
      title: "Saturday 16 de Marzo. 1:00pm",
      button: "Add to Calendar",
    },
  },
  countDown: { title: "Time Left" },
  rsvp: {
    title: "Will you join us? ",
    card: {
      title: "Confirm your attendance. ",
      pastel: {
        title: "Help us calculate the cake.",
        subtitle: "You can do the following:",
      },
      msg: {
        title: "Send us a message",
        subtitle: "You already know our number",
      },
      form: {
        title: "Fill out the form",
        subtitle: "Click the button to confirm your attendance.",
      },
      button: "Confirm here!",
    },
  },
  schedule: {
    title: "CHow will the festivities unfold??",
    schedule: [
      { img: ceremonia, title: "Ceremony", time: "From 1:00 to 2:30pm" },
      { img: recepcion, title: "Reception", time: "Starts at 2:30pm" },
      { img: bienvenida, title: "Welcome", time: "From 3:30 to 3:45pm" },
      { img: dinner, title: "Dinner", time: "From 3:45 to 6:00pm" },
      { img: pastel, title: "Cake", time: "From 6:00 to 6:30pm" },
      { img: fiesta, title: "Social Moment", time: "6:30pm to 8:00pm" },
      { img: despedida, title: "Farewell", time: "8:00 to 8:15pm" },
    ],
  },
  registry: {
    title: "Gifts",
    text:
      "Our preferred wedding gift is monetary, but you are welcome to bring and give whatever God has placed in your heart. In advance, we appreciate you thinking of us and sharing with us the blessings God has bestowed upon you.",
  },
  hotels: { title: "Options for lodging" },
  recommendations: {
    title: "Recommendations",
    subtitle:
      "Thank you for visiting our wedding page. Before we say goodbye, we would like to provide you with some final recommendations.",
    recommendations: [
      {
        icon: HiSun.name,
        text:
          "Our wedding will be outdoors, so you are invited to bring what you need to ensure a comfortable and beautiful experience.",
      },
      {
        icon: GiBowTie.name,
        text:
          "The dress code is elegant, but feel free to come as you like; the most important thing for us is your presence.",
      },
      {
        icon: FaShoePrints.name,
        text:
          "Please note that the ceremony will take place on the grass, so consider your footwear options.",
      },
      {
        icon: CoChild.name,
        text:
          "Lastly, we kindly ask parents to look after their children during our wedding to prevent any dangers or accidents. Our wish is to share our special day with you and for both of us to have a lovely experience, blessed by God. God bless you, and we look forward to seeing you soon!",
      },
    ],
  },
  footer: {
    links: [
      { link: "#detalles", title: "Details" },
      { link: "#rsvp", title: "Confirm" },
      { link: "#schedule", title: "Itinerary" },
      { link: "#registry", title: "Gifts" },
      { link: "#hospedaje", title: "Accommodations" },
      { link: "#recomendaciones", title: "Recommendations" },
    ],
  },
};
