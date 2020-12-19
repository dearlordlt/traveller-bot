const rNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const news = [
    `📰 **GALAXY NEWS** [631-10-15] - Hado mokslininkai sėkmingai išbandė 'Gero Elgesio' implantą ant kalinių, Respublikos Konsulas įtatymu patvirtino leidimą naudoti implantą ant piliečių. *Skaityti daugiau...*`,
    `📰 **ONN** [631-09-17] - Numalšintas Phano vergų sukilimas pareikalavo tūkstančių legijonierių gyvybių - aukų pagerbimas tiesiogiai per ONN. *Skaityti daugiau...*`,
    `📰 **DEIMOS TODAY** [631-08-24] - Trys būdai išsirinkti paklusnų vergą. *Skaityti daugiau...*`,
    `📰 **VULCAN SUN** [631-09-22] - Kipro Gubernatorius Aurelijus Sula suimtas dėl iššvaistytų lėšū karo su Olimpu metu, laikinas gubernatorius Olivijus Sula suteikė malonę savo tėvui. *Skaityti daugiau...*`,
    `📰 **ONN** [631-10-01] - Senato Tribūno rinkimams artėjant - ką reikia žinoti piliečiui?  *Skaityti daugiau...*`,
    `📰 **ONN** [631-08-17] - Kaip atpažinti Jotuno agentą?  *Skaityti daugiau...*`,
    `📰 **TRUTH OF AVALON** [631-01-15] - Norite skelbti Mitros tiesas galaktikoje? Sužinokite kaip išgelbėti savo sielą. *Skaityti daugiau...*`,
    `📰 **JOTUN PATRIOT** [631-06-12] - 10 būdų pakenkti kapitalizmui. *Skaityti daugiau...*`,
    `📰 **OLYMPUS FREE MEDIA** [631-10-25] - TOP 10 uždraustų grupių koncertu kuriuos dar galima pamatyti šiais metais. *Skaityti daugiau...*`,
    `📰 **UNKNOWN SOURCE** [XXX-XX-XX] - U09TIFNPUyBTT1Mga29yZGluYXTEl3MgWzEzMjQ1NTQ1Mzo5OTQ2NTY1NDMyOjExMzU1NzUyMjM3XSBTT1MgU09T. *Skaityti daugiau...*`,
    `📰 **UNDERGROUND FM** [631-09-12] - Slapti šaltiniai: OLIMPAS ruošiasi karui su HADU. *Skaityti daugiau...*`,
    `📰 **CORPORATE NEWS** [631-06-12] - Sekite akcijų kainas biržose tik už 3000Cr/Mėn. *Skaityti daugiau...*`,
    `📰 **UNKNOWN SOURCE** [XXX-XX-XX] - U8SXa21pbmdhaSBudXN0YXR5dG9zICdCQVrEli0yMScga29vcmRpbmF0xJdzIFswMzU0MzU0NTM0ODk5OjU1NTYzMzQzNTg3OTo6OTg3NzIzMjM3NTc2NV0g. *Skaityti daugiau...*`,
    `📰 **NOVI HOMINES** [631-09-30] - Naujausias 632 metų riaušių kalendorius jau dabar, tik 9,99Cr. *Skaityti daugiau...*`,
    `📰 **ONN** [631-10-01] - Imperatoriaus įsakymas: visi veteranai palikę tarnybą per pastaruosius 10 metų netenka pensijos. *Skaityti daugiau...*`,
    `📰 **OLYMPUS FREE MEDIA** [631-08-16] - Atskleista Ponto Magistrato korupcijos schema - Senatas tyli. *Skaityti daugiau...*`,
    `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį - 97,99%`,
    `☢️ **Ecce Signum Diagnostics** - Diagnostika: Keleivio 0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(2, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
    `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemių, prašom susisiekti su sensorių inžinieriumi`,
    `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą padidėjo 0,00001%`,
    `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje rasta parazitų, rekomenduojama laikytis higienos ir pamaitinti katiną`,
    `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūkstamos įrangos ir medikamentų kodas: **WW8UcZQi**`,
];

module.exports = {
    news,
}