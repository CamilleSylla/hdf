import Agrs from "./Args/Args";

const content = [
    {
        title : "Des techniciens qualifiés",
        content : "Nos techniciens sont à l’écoute de vos besoins, et vous aide à déterminer la solution adéquate pour optimiser votre logement et améliorer sa performanceénergétique.",
        img : "/technicien.svg"
    },
    {
        title : "Une entreprise locale près, de chez vous",
        content : "Nous sommes une entreprise locale, et à taille humaine afin d’être disponible rapidement et au plus près de chez vous",
        img : "/local.svg"
    },
    {
        title : "Des entreprise partenaire de qualités",
        content : "HDF a des partenaires locaux de qualités et qualifiés choisi pour vous. Nous vérifions leurs qualification, assurances et qualité de travail.",
        img : "/quality.svg"
    },
]

export default function WhyUS () {

    return (
        <>
        {content.map((el, i) => {
            return (
                <Agrs key={i} title={el.title} index={i} imgSrc={el.img} desc={el.content}/>
            )
        })}
        </>
    )
}