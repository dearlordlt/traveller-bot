const rNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const network = [
    `📰 **GALAXY NEWS** 🔀`,
    `📰 **ONN** 🔀`,
    `📰 **DEIMOS TODAY** 🔀`,
    `📰 **VULCAN SUN** 🔀`,
    `📰 **OLYMPUS FREE MEDIA** 🔀`,
    `📰 **CORPORATE NEWS** 🔀`,
    `📰 **PIRATE BAY** 🔀`,
];

const where = [
    `Olimpo sistemoje`,
    `Avalone`,
    `Jotune`,
    `Vulkane`,
    `Vestoje`,
    `Ares sistemoje`,
    `Egeroje`,
    `Deime`,
    `Protėjuje`,
    `Irkaloje`,
    `Liutecijoje`,
    `Rėjos sistemoje`,
    `Horoje`,
    `Minevroje`
];

const what = () => {
    return [
        `medienos kainos nukrito ${rNum(1, 20)},${rNum(0, 100)}%`,
        `skelbiama visuotinė mobilizacija`,
        `vergų kainos pakilo ${rNum(1, 20)},${rNum(0, 100)}%`,
        `sutriko bankinės sistemos`,
        `vyksta neeilinė senato sesija`,
        `įvesta komendanto valanda`,
        `skelbiamos gladiatorių žaidynės`,
        `įvestas embargo ginklams`,
        `sunkiųjų metalų kainos krito ${rNum(1, 20)},${rNum(0, 100)}%`,
    ]
};

const why = [
    `dėl įtampos žemesniuose socialiniuose sluoksniuose`,
    `dėl besitęsiančio vergų sukilimo`,
    `dėl padažnėjusių piratų antpuolių`,
    `dėl įtemptos politinės situacijos`,
    `dėl nesibaigiančių sekso skandalų senate`,
    `dėl ultra populistų riaušių`,
    `dėl nežabojamos bedarbystės`,
];

const getRandomNews = () => {
    return `${network.random()} ${where.random()}, ${why.random()}, ${what().random()}. *Skaityti daugiau...*`;
}

const news = () => {
    return [
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
        `📰 **ONN** - Imperatoriaus įsakymas: nuo šiol draudžiama naujagimius vadinti vardais prasidedančiais 'D' raide, bauda 5000Cr. *Skaityti daugiau...*`,
        `📰 **TRUTH OF AVALON** - Gražiausių maldų konkursas, balsavimas - 5Cr. *Skaityti daugiau...*`,
        `📰 **JOTUN PATRIOT** - Meninis filmas: 'Šlovė vadui'. Pagr. vaidmenyje - Otto Valerius. *Skaityti daugiau...*`,
        `📰 **VULCAN SUN** - Tiesioginė Senato posedžio transliacija, balsavimas dėl reparacijų Olimpui nutraukimo. *Skaityti daugiau...*`,
        `📰 **PIRATE BAY** - Turintiems informacijos apie krovinius, maršrutus arba menkai saugomas kosmines bazes premijos nuo Cr5000. *Skaityti daugiau...*`,
        `📰 **CORPORATE NEWS** - OLIMPO BIRŽA - Mare nostrum -1.${rNum(0, 10)}, Gladius Inc +2.${rNum(0, 10)}, Legio Collegium -0.${rNum(0, 10)}. *Skaityti daugiau...*`,
        `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį - ${rNum(91, 99)},${rNum(0, 99)}%`,
        `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį -${rNum(91, 99)},${rNum(0, 99)}%`,
        `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, rekomenduojama nesinaudoti cryo kapsule #${rNum(1, 7)}`,
        `☢️ **Ecce Signum Diagnostics** - Diagnostika: įgulos nario #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
        `☢️ **Ecce Signum Diagnostics** - Diagnostika: įgulos nario #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
        `☢️ **Ecce Signum Diagnostics** - Laivo saugumo diagnostika: abordažo atveju laivo įgula netektų ${rNum(70, 100)}% įgulos narių`,
        `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
        `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
        `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: sensoriai nerasti, priežastis - ant pulto miegantis katinas, prašom susisiekti su sensorių inžinieriumi`,
        `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą padidėjo 0,00${rNum(1, 99)}%`,
        `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą sumažėjo 0,00${rNum(1, 99)}%`,
        `🧰 **Ecce Signum Diagnostics** - Atlikta laivo piloto funkcijų diagnostika, rekomenduojama neatlikinėti sudėtingų manevrų esant dideliam greičiui`,
        `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje rasta parazitų, rekomenduojama laikytis higienos ir pamaitinti katiną`,
        `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje užstrigo katinas, konteineris **${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
        `🧯 **Ecce Signum Diagnostics** - Krovinių skyriaus diagnostika, rekomenduojama patikrinti konteinerį **#${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
        `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūkstamos įrangos ir medikamentų kodas: **#AA-${rNum(10000, 99999)}**`,
        `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūksta medicininio alkoholio, įtariamas įgulos narys - #0-F24AA`,
        `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, rekomenduojama nelaikyti ginklų organų atauginimo kapsulėje`,
    ]
};

const person = [
    `✉️ Brutanus Pictor`,
    `✉️ Evaco Vollia`,
    `✉️ Alexios #0-F24AA`,
    `✉️ Felicius Cupitas Albanus "Atsuktuvas"`,
    `✉️ Lucijus Flavijus`,

];

const whatHappened = () => {
    return [
        `FROM: ISS/ES - Jūsų kambaryje liko uždarytas katinas, jei nesiimsite veiksmų, katinas išgyvens ${rNum(3, 8)} parų ir sunaikins ${rNum(1, 99)}% Jūsų asmeninių daiktų`,
        `FROM: GALDIUS Inc: Išpardavimas: Pasinaudok 5% nuolaidos kodu #DD-${rNum(0, 999) + 1000}`,
        `FROM: Deimo Princas: Deimo princas paliko jums palikimą Cr${rNum(0, 999) * 1000}, perveskite Cr200 į ${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000} saskaitą kad patvirtinti savo asmenybę!`,
        `FROM: ISS/ES - Jūsų kajutė ${rNum(25, 99)}% sutvarkyta pagal nustatytus reikalavimus, prašome palaikyti 100% tvarką.`,
        `FROM: Džiugi naujiena: Mitros paslaptys prieinamos visiems, perveskite Cr200 į ${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000} saskaitą kad sužinoti daugiau`,
        `FROM: LEGIO CXIX: Renka naujus legionierius, pauskite **čia** kad sužinoti daugiau.`,
        `FROM: Kosminiai Bikiniai: Negavome prenumeratos mokęsčio už praeitus metus, perveskite Cr200 į ${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000}-${rNum(0, 999) + 1000} saskaitą kad atnaujinti prenumeratą.`,
    ]
};

const getPersonalAlert = () => {
    return `TO: **${person.random()}** ${whatHappened().random()}`;
}

module.exports = {
    news,
    getRandomNews,
    getPersonalAlert,
}