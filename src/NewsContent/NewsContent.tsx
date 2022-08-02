import axios from "axios";
import React, {useEffect, useState} from "react";
import { NewItem } from "./NewItem";
import "./NewsContent.css"
import {CountrySelector} from "./CounrtySelector";
import {getNewsByCountryTC} from "./reducer-news";
import {useDispatch, useSelector} from "react-redux";
import {AnyAction} from "redux";
import {RootState} from "../store";

export const mockNews = [
    {
        title: "1111Horizon Forbidden West – Új előzetesen a nyugati vidékek kihívásai",
        link: "https://www.pcguru.hu/hirek/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai/69101",
        keywords: null,
        creator: null,
        video_url: null,
        description: "qqqqAloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.",
        content: null,
        pubDate: "2022-02-04 07:07:01",
        image_url: "http://www.pcguru.hu/uploads/news/mid/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai-hirek-4acebfe659a8326cb803-mid.jpg",
        source_id: "pcguru",
        country: [
            "hungary"
        ],
        category: [
            "entertainment"
        ],
        language: "hungarian"
    },
    {
        title: "2222Red Bull-kopstuk ziet geen ego bij Verstappen: \"Niemand is groter dan het team\"",
        link: "https://racingnews365.nl/red-bull-manager-ziet-geen-ego-bij-verstappen-niemand-is-groter-dan-het-team",
        keywords: null,
        creator: [
            "Marnik Kok"
        ],
        video_url: null,
        description: "wwwwJonathan Wheatley, sportief directeur van Red Bull, legt uit hoe de belangrijk het is om een goede band te hebben met Max Verstappen en Sergio Perez. Wat nóg belangrijker is, is dat de twee F1-rijders hun plaats binnen het team kennen en zichzelf niet belangrijker gaan zien dan het geheel.",
        content: "Jonathan Wheatley heeft als sportief directeur een zeer belangrijke functie binnen Red Bull Racing. Het managen van het team op het circuit en ervoor zorgen dat het team zich aan de sportieve reglementen houdt zijn de belangrijkste onderdelen van zijn baan, maar ook het contact tussen het personeel is van onschatbare waarde. In The Jack Threlfall Show legt Wheatley uit dat hij elke medewerker net zo waardevol vindt binnen het team, van werkzaamheden in de fabriek tot aan de Formule 1-coureurs. Ook Max Verstappen en Sergio Perez zijn 'gewoon' in dienst van Red Bull. \"Ze werken voor het team\", zo trapt het kopstuk af. \"Ik denk dat het belangrijk is om daar geen onderscheid in te maken.\" \"Niemand is groter dan het team. Onze coureurs begrijpen dat en ik heb denk ik nog nooit, misschien één keer, gewerkt met een coureur die een enorm ego had. Niets maakte voor hem uit. Normaal gesproken, als je het tot de Formule 1 geschopt hebt, dan heb je al veel met teams gewerkt. Dan weet je dat het niet alleen om jou draait en dat ieder persoon iets bijdraagt aan het team.\" Band verbeterd sinds de F1 veiliger is geworden Als teammanager werkt Wheatley logischerwijs vaak nauw samen met de coureurs. \"Zeker door alle interacties met de FIA en alle momenten met de stewards. Ik werk samen met de coureur om een perfecte professionele relatie te krijgen.\" Dit is volgens de Red Bull-manager tegenwoordig heel anders, want vroeger was dit bijna niet mogelijk. \"Toen ik in de Formule 1 terecht kwam, kwamen coureurs best vaak te overlijden. Het was heel lastig om een nauwe band met ze te hebben, want dat wilde je soms niet echt. Je hield altijd wel een beetje afstand. Door al het werk van de FIA en de teams met betrekking tot de veiligheid, is dat gelukkig niet meer het geval.\" \"Ik werk heel erg close met de coureurs. Dat moet wel. De pitstops, het rijden... het is allemaal een belangrijk onderdeel. Plus, ik probeer ze veel te helpen als ze nog wat jonger zijn.\" Wheatley geeft hierbij graag advies aan wat minder ervaren coureurs, zoals eerder bij Alexander Albon of bij Pierre Gasly. \"Ik heb veel ervaring met mensen en coureurs en daar wil je het beste uit halen.\"",
        pubDate: "2022-02-04 07:05:00",
        image_url: null,
        source_id: "racingnews365",
        country: [
            "netherland"
        ],
        category: [
            "sports"
        ],
        language: "dutch"
    },
    {
        title: "3333Horizon Forbidden West111111 – Új előzetesen a nyugati vidékek kihívásai",
        link: "https://www.pcguru.hu/hirek/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai/69101",
        keywords: null,
        creator: null,
        video_url: null,
        description: "eeeeAloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.",
        content: null,
        pubDate: "2022-02-04 07:07:01",
        image_url: "http://www.pcguru.hu/uploads/news/mid/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai-hirek-4acebfe659a8326cb803-mid.jpg",
        source_id: "pcguru",
        country: [
            "hungary"
        ],
        category: [
            "entertainment"
        ],
        language: "hungarian"
    },
    {
        title: "4444Red Bull-kopstuk ziet geen ego bij Verstappen:222222 \"Niemand is groter dan het team\"",
        link: "https://racingnews365.nl/red-bull-manager-ziet-geen-ego-bij-verstappen-niemand-is-groter-dan-het-team",
        keywords: null,
        creator: [
            "Marnik Kok"
        ],
        video_url: null,
        description: "rrrrrJonathan Wheatley, sportief directeur van Red Bull, legt uit hoe de belangrijk het is om een goede band te hebben met Max Verstappen en Sergio Perez. Wat nóg belangrijker is, is dat de twee F1-rijders hun plaats binnen het team kennen en zichzelf niet belangrijker gaan zien dan het geheel.",
        content: "Jonathan Wheatley heeft als sportief directeur een zeer belangrijke functie binnen Red Bull Racing. Het managen van het team op het circuit en ervoor zorgen dat het team zich aan de sportieve reglementen houdt zijn de belangrijkste onderdelen van zijn baan, maar ook het contact tussen het personeel is van onschatbare waarde. In The Jack Threlfall Show legt Wheatley uit dat hij elke medewerker net zo waardevol vindt binnen het team, van werkzaamheden in de fabriek tot aan de Formule 1-coureurs. Ook Max Verstappen en Sergio Perez zijn 'gewoon' in dienst van Red Bull. \"Ze werken voor het team\", zo trapt het kopstuk af. \"Ik denk dat het belangrijk is om daar geen onderscheid in te maken.\" \"Niemand is groter dan het team. Onze coureurs begrijpen dat en ik heb denk ik nog nooit, misschien één keer, gewerkt met een coureur die een enorm ego had. Niets maakte voor hem uit. Normaal gesproken, als je het tot de Formule 1 geschopt hebt, dan heb je al veel met teams gewerkt. Dan weet je dat het niet alleen om jou draait en dat ieder persoon iets bijdraagt aan het team.\" Band verbeterd sinds de F1 veiliger is geworden Als teammanager werkt Wheatley logischerwijs vaak nauw samen met de coureurs. \"Zeker door alle interacties met de FIA en alle momenten met de stewards. Ik werk samen met de coureur om een perfecte professionele relatie te krijgen.\" Dit is volgens de Red Bull-manager tegenwoordig heel anders, want vroeger was dit bijna niet mogelijk. \"Toen ik in de Formule 1 terecht kwam, kwamen coureurs best vaak te overlijden. Het was heel lastig om een nauwe band met ze te hebben, want dat wilde je soms niet echt. Je hield altijd wel een beetje afstand. Door al het werk van de FIA en de teams met betrekking tot de veiligheid, is dat gelukkig niet meer het geval.\" \"Ik werk heel erg close met de coureurs. Dat moet wel. De pitstops, het rijden... het is allemaal een belangrijk onderdeel. Plus, ik probeer ze veel te helpen als ze nog wat jonger zijn.\" Wheatley geeft hierbij graag advies aan wat minder ervaren coureurs, zoals eerder bij Alexander Albon of bij Pierre Gasly. \"Ik heb veel ervaring met mensen en coureurs en daar wil je het beste uit halen.\"",
        pubDate: "2022-02-04 07:05:00",
        image_url: null,
        source_id: "racingnews365",
        country: [
            "netherland"
        ],
        category: [
            "sports"
        ],
        language: "dutch"
    },
]


export const NewsContent = () => {
const dispatch = useDispatch()
   useEffect(()=>{
       // @ts-ignore
       dispatch(getNewsByCountryTC('us'))
   },[])
    console.log(mockNews[0].title, mockNews[0].description,'7777')
    // @ts-ignore
    const news: Array<any> = useSelector<RootState>(state => state.newsPage.news)

    return (

<>
    <CountrySelector />
        <div className="MainContentNews">

            {news.map((p: any) => <NewItem title={p.title} des={p.description} category={p.category} image={p.image_url}/>)}
        </div>
    </>
    )
}