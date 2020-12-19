const rNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const news = [
    `📰 **GALAXY NEWS** - Hado mokslininkai sėkmingai išbandė 'Gero Elgesio' implantą ant kalinių, Respublikos Konsulas įtatymu patvirtino leidimą naudoti implantą ant piliečių. *Skaityti daugiau...*`,
    `📰 **GALAXY NEWS** - Hado sistemoje atlikti naujo Laivyno Flagmano Enėjas bandymai. Legatai tvirtina, kad naujas flagmanas atstos Aurėjos laivą. *Skaityti daugiau...*`,
    `📰 **ONN** - Numalšintas Phano vergų sukilimas pareikalavo tūkstančių legijonierių gyvybių - aukų pagerbimas tiesiogiai per ONN. *Skaityti daugiau...*`,
    `📰 **DEIMOS TODAY** - Trys būdai išsirinkti paklusnų vergą. *Skaityti daugiau...*`,
    `📰 **VULCAN SUN** - Kipro Gubernatorius Aurelijus Sula suimtas dėl iššvaistytų lėšū karo su Olimpu metu, laikinas gubernatorius Olivijus Sula suteikė malonę savo tėvui. *Skaityti daugiau...*`,
    `📰 **ONN** - Senato Tribūno rinkimams artėjant - ką reikia žinoti piliečiui?  *Skaityti daugiau...*`,
    `📰 **ONN** - Kaip atpažinti Jotuno agentą?  *Skaityti daugiau...*`,
    `📰 **TRUTH OF AVALON** - Norite skelbti Mitros tiesas galaktikoje? Sužinokite kaip išgelbėti savo sielą. *Skaityti daugiau...*`,
    `📰 **JOTUN PATRIOT** - 10 būdų pakenkti imperializmui. *Skaityti daugiau...*`,
    `📰 **OLYMPUS FREE MEDIA** - TOP 10 uždraustų grupių koncertu kuriuos dar galima pamatyti šiais metais. *Skaityti daugiau...*`,
    `📰 **UNKNOWN SOURCE** - U09TIFNPUyBTT1Mga29yZGluYXTEl3MgWzEzMjQ1NTQ1Mzo5OTQ2NTY1NDMyOjExMzU1NzUyMjM3XSBTT1MgU09T. *Skaityti daugiau...*`,
    `📰 **UNDERGROUND FM** - Slapti šaltiniai: OLIMPAS ruošiasi karui su HADU. *Skaityti daugiau...*`,
    `📰 **CORPORATE NEWS** - Sekite akcijų kainas biržose tik už 3000Cr/Mėn. *Skaityti daugiau...*`,
    `📰 **UNKNOWN SOURCE** - U8SXa21pbmdhaSBudXN0YXR5dG9zICdCQVrEli0yMScga29vcmRpbmF0xJdzIFswMzU0MzU0NTM0ODk5OjU1NTYzMzQzNTg3OTo6OTg3NzIzMjM3NTc2NV0g. *Skaityti daugiau...*`,
    `📰 **NOVI HOMINES** - Naujausias 632 metų riaušių kalendorius jau dabar, tik 9,99Cr. *Skaityti daugiau...*`,
    `📰 **ONN** - Imperatoriaus įsakymas: visi veteranai palikę tarnybą per pastaruosius 10 metų netenka pensijos. *Skaityti daugiau...*`,
    `📰 **OLYMPUS FREE MEDIA** - Atskleista Ponto Magistrato korupcijos schema - Senatas tyli. *Skaityti daugiau...*`,
    `📰 **OLYMPUS FREE MEDIA** - Imperatorius atstatydino laivyno Legatą Amilio Stulio, Egzekucija tiesiogiai per OFM. *Skaityti daugiau...*`,
    `📰 **KALYPSO MEDIA** - Pagrindinės naujienos: Badas Vilkaro teritorijoje, Korporacijų karai, Mažinamos Legijonierių algos, Olimpo 'Legio' nugalėjo Phobo 'Jaučius' ${rNum(10, 20)}:${rNum(0, 10)}, Jotuno šnipų medžioklė tęsiasi . *Skaityti daugiau...*`,
    `📰 **ONN** - Poezijos apie Imperatorių konkursas. Balsuok už nugalėtoją. *Skaityti daugiau...*`,
    `📰 **ONN** - Eos kosmodrome susišaudymas. Įtariami Jotuno šnipai ieškomi. *Skaityti daugiau...*`,
    `📰 **ONN** - Metų filmu, vienbalsiai išrinktas 'Imperatorius' - Biografinė drama. Pagr vaidmenyje - Imperatorius Ostas II. *Skaityti daugiau...*`,
    `📰 **ONN** - 10 patiekalų imperatoriaus Osto II valdymo metinių šventiniam stalui. *Skaityti daugiau...*`,
    `📰 **ONN** - Imperatoriaus įsakymas: gladiatorių kautynės bus vykdomos kiekvieną savaitę visose pagrindinėse planetose. Transliacijos nuo šiol nemokamos. Ave Caesar. *Skaityti daugiau...*`,
    `📰 **TRUTH OF AVALON** - Gražiausių maldų konkursas, balsavimas - 5Cr. *Skaityti daugiau...*`,
    `📰 **JOTUN PATRIOT** - Meninis filmas: 'Šlovė vadui'. Pagr. vaidmenyje - Otto Valerius. *Skaityti daugiau...*`,
    `📰 **VULCAN SUN** - Tiesioginė Senato posedžio transliacija, balsavimas dėl reparacijų Olimpui nutraukimo. *Skaityti daugiau...*`,
    `📰 **PIRATE BAY** - Turintiems informacijos apie krovinius, mar6rutus arba menkai saugomas kosmines bazes premijos nuo Cr5000. *Skaityti daugiau...*`,
    `📰 **CORPORATE NEWS** - OLIMPO BIRŽA - Mare nostrum -1.${rNum(0, 10)}, Gladius Inc +2.${rNum(0, 10)}, Legio Collegium -0.${rNum(0, 10)}. *Skaityti daugiau...*`,
    `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį - ${rNum(91, 99)},${rNum(0, 99)}%`,
    `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį -${rNum(91, 99)},${rNum(0, 99)}%`,
    `☢️ **Ecce Signum Diagnostics** - Diagnostika: įgulos nario #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
    `☢️ **Ecce Signum Diagnostics** - Diagnostika: įgulos nario #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
    `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
    `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
    `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą padidėjo 0,00${rNum(1, 99)}%`,
    `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą sumažėjo 0,00${rNum(1, 99)}%`,
    `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje rasta parazitų, rekomenduojama laikytis higienos ir pamaitinti katiną`,
    `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje užstrigo katinas, konteineris **${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
    `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūkstamos įrangos ir medikamentų kodas: **#AA-${rNum(10000, 99999)}**`,
    `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūksta medicininio alkoholio, įgulos narys - #0-F24AA`,
];

module.exports = {
    news,
}