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
import axios from "axios";

const center = { lat: 49.84640501614155, lng: 3.28532369816711 };
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
          zoom={15}
          center={center}
          onLoad={onMapLoad}
          options={options}
        >
          <Marker
            position={{ lat: 49.84640501614155, lng: 3.28532369816711 }}
          />
        </GoogleMap>
      </section>
    );
  };

  const transport = {}

  const Send = async () => {
    const send = axios.post('/api/contact', transport)
    .then(res => {
      if (res.status === 200) {
        alert("Succes")
      } else {
        alert("Error")
      }
    })
    
    
  }

  const Form = () => {

    return (
        <article className={style.form}>

            <div className={style.container}>
            <h1>Contactez-nous !</h1>
            <input type="text" placeholder="Nom et prénom" onChange={e => transport.nom = e.target.value}/>
            <input type="tel" placeholder="N° de téléphone" onChange={e => transport.phone = e.target.value}/>
            <input type="email" placeholder="Adresse e-mail" onChange={e => transport.email = e.target.value}/>
            <textarea placeholder="Votre message" onChange={e => transport.msg = e.target.value}/>
            <div onClick={Send}>
            <Button title="Envoyer" />
            </div>
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
