import Section from "../../template/section/Section";
import SectionWidth from "../../template/sectionWidth/SectionWidth";
import style from "./contact.module.scss";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import MapStyle from "../contact/MapStyle";
import { useCallback, useRef, useState } from "react";
import Button from "../../template/button/Button";

const center = {
  lat: 48.01065361417526,
  lng: 0.18221582879658224,
};
const apiKey =
  process.env.GMAP_API || "AIzaSyDbCf9rd6UXkL_DGwsb-5b_IN7i7Y3bULo";
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const options = {
  styles: MapStyle,
};

export default function Contact() {
  const [map, setMap] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const Map = () => {
    if (loadError) return "error";
    if (!isLoaded) return "loading";

    return (
      <section className={style.map}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          onLoad={onMapLoad}
          options={options}
        >
          <Marker
            position={{ lat: 48.01065361417526, lng: 0.18221582879658224 }}
          />
        </GoogleMap>
      </section>
    );
  };

  const Form = () => {

    return (
        <article className={style.form}>

            <div className={style.container}>
            <h1>Contactez-nous !</h1>
            <input type="text" placeholder="Nom et prénom"/>
            <input type="tel" placeholder="N° de téléphone"/>
            <input type="email" placeholder="Adresse e-mail"/>
            <textarea placeholder="Votre message"/>
            <Button title="Envoyer" />
            </div>

        </article>

    )
  }

  return (
    <Section>
        <div className={style.wrapper}>
          <Map />
          <Form/>
          {/* <About /> */}
        </div>
    </Section>
  );
}
