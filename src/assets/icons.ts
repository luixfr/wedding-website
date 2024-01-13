import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneAlt,
  MdPhoneforwardedRound,
  SiGooglestreetview,
  SiGooglecalendar,
  GiCakeSlice,
  MdTextsmsRound,
  IoDocumentText,
  BiArrowRightCircleFill,
} from "oh-vue-icons/icons";
import { App } from "vue";

export default function importIcons(app: App<Element>) {
  addIcons(
    FaFacebookSquare,
    FaLinkedin,
    FaPhoneAlt,
    MdPhoneforwardedRound,
    SiGooglestreetview,
    SiGooglecalendar,
    GiCakeSlice,
    MdTextsmsRound,
    IoDocumentText,
    BiArrowRightCircleFill
  );
  app.component("v-icon", OhVueIcon);
}
