const names = require('./names');

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
        `medienos kainos ${rNum(1, 2) === 1 ? 'kilo' : 'krito'} ${rNum(1, 20)},${rNum(0, 100)}%`,
        `skelbiama visuotinė mobilizacija`,
        `vergų kainos ${rNum(1, 2) === 1 ? 'kilo' : 'krito'} ${rNum(1, 20)},${rNum(0, 100)}%`,
        `sutriko bankinės sistemos`,
        `vyksta neeilinė senato sesija`,
        `įvesta komendanto valanda`,
        `skelbiamos gladiatorių žaidynės`,
        `įvestas embargo ginklams`,
        `sunkiųjų metalų kainos ${rNum(1, 2) === 1 ? 'kilo' : 'krito'} ${rNum(1, 20)},${rNum(0, 100)}%`,
        `nuo šiol draudžiama vadinti naujagimius vardais prasidedančiais 'D' raide`,
        `šaudmenų kainos ${rNum(1, 2) === 1 ? 'kilo' : 'krito'} ${rNum(1, 20)},${rNum(0, 100)}%`,
        `elektronikos prekių kainos ${rNum(1, 2) === 1 ? 'kilo' : 'krito'} ${rNum(1, 20)},${rNum(0, 100)}%`,
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
    `dėl tarpkorporacinių konfliktų`,
    `dėl sunkios ekonominės situacijos`,
    `dėl piratų antpuolių`,
    `dėl nutraukto serialo 'Legijonierių žmonos' XIX sezono`,
    `dėl Deimo Princo mirties`,
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
        `📰 **VULCAN SUN** - Kipro Magistratas ${names.getName()} suimtas dėl iššvaistytų lėšų karo su Olimpu metu, laikinas gubernatorius Olivijus Sula suteikė malonę savo tėvui. *Skaityti daugiau...*`,
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
        `📰 **OLYMPUS FREE MEDIA** - Imperatorius atstatydino laivyno Legatą - ${names.getName()}, Egzekucija tiesiogiai per OFM. *Skaityti daugiau...*`,
        `📰 **KALYPSO MEDIA** - Pagrindinės naujienos: Badas Vilkaro teritorijoje, Korporacijų karai, Mažinamos Legijonierių algos, Olimpo 'Legio' nugalėjo Phobo 'Jaučius' ${rNum(10, 20)}:${rNum(0, 10)}, Jotuno šnipų medžioklė tęsiasi . *Skaityti daugiau...*`,
        `📰 **ONN** - Poezijos apie Imperatorių konkursas. Balsuok už nugalėtoją. *Skaityti daugiau...*`,
        `📰 **ONN** - Eos kosmodrome susišaudymas. Įtariami Jotuno šnipai ieškomi. *Skaityti daugiau...*`,
        `📰 **ONN** - Metų filmu, vienbalsiai išrinktas 'Imperatorius' - Biografinė drama. Pagr vaidmenyje - Imperatorius Ostas II. *Skaityti daugiau...*`,
        `📰 **ONN** - 10 patiekalų imperatoriaus Osto II valdymo metinių šventiniam stalui. *Skaityti daugiau...*`,
        `📰 **ONN** - Imperatoriaus įsakymas: gladiatorių kautynės bus vykdomos kiekvieną savaitę visose pagrindinėse planetose. Transliacijos nuo šiol nemokamos. Ave Caesar. *Skaityti daugiau...*`,
        `📰 **ONN** - Imperatoriaus įsakymas: nuo šiol draudžiama naujagimius vadinti vardais prasidedančiais 'D' raide, bauda 5000Cr. *Skaityti daugiau...*`,
        `📰 **ONN** - Arkanum sulaikė dar vieną žinomą piratą Olimpo sektoriuje. ${names.getName()} egzekucija tiesiogiai tik per ONN. *Skaityti daugiau...*`,
        `📰 **TRUTH OF AVALON** - Gražiausių maldų konkursas, balsavimas - 5Cr. *Skaityti daugiau...*`,
        `📰 **JOTUN PATRIOT** - Meninis filmas: 'Šlovė vadui'. Pagr. vaidmenyje - Otto Valerius. *Skaityti daugiau...*`,
        `📰 **VULCAN SUN** - Tiesioginė Senato posedžio transliacija, balsavimas dėl reparacijų Olimpui nutraukimo. *Skaityti daugiau...*`,
        `📰 **PIRATE BAY** - Turintiems informacijos apie krovinius, maršrutus arba menkai saugomas kosmines bazes premijos nuo Cr5000. *Skaityti daugiau...*`,
        `📰 **CORPORATE NEWS** - OLIMPO BIRŽA - Mare nostrum ${rNum(0, 1) === 0 ? '-' : '+'}${rNum(0, 2)}.${rNum(0, 10)}, Gladius Inc ${rNum(0, 1) === 0 ? '-' : '+'}${rNum(0, 5)}.${rNum(0, 10)}, Legio Collegium ${rNum(0, 1) === 0 ? '-' : '+'}${rNum(0, 2)}.${rNum(0, 10)}, Metalla Ipsum Inc ${rNum(0, 1) === 0 ? '-' : '+'}${rNum(0, 2)}.${rNum(0, 10)}. Norite daugiau Biržos naujienų? Prenumerata Cr3000 *Skaityti daugiau...*`,
        `📰 **SPORTS 24** - ${where.random()} vykusiose gladiatorių žaidynėse triumfavo ${names.getName()}`,
        `📰 **SPORTS 24** - Vulkano 'Raketos' vs Arėjo 'Liūtai' ${rNum(0, 20)} : ${rNum(0, 20)}, naudingiausias žaidėjas - ${names.getName()}`,
        `📰 **SPORTS 24** - Olimpo 'Legio' vs Minevros 'Medūzos' ${rNum(0, 20)} : ${rNum(0, 20)}, naudingiausias žaidėjas - ${names.getName()}`,
        `📰 **SPORTS 24** - Eos 'Argonautai' vs Zeus 'Jaučiai' ${rNum(0, 20)} : ${rNum(0, 20)}, naudingiausias žaidėjas - ${names.getName()}`,
        `📰 **SPORTS 24** - Romulo 'Remai' vs Remulo 'Romai' ${rNum(0, 20)} : ${rNum(0, 20)}, naudingiausias žaidėjas - ${names.getName()}`,
        `📰 **SPORTS 24** - Naudingiausiu metų žaidėju ištinktas ${names.getName()}, metų gladiatorius: ${names.getName()}, didžiausias sporto nusivylimas: ${names.getName()}`,
        `📰 **OLYMPUS SCIENCE DAILY** - Žmonių klonavimas - amoralus mokslas ar neišvengiama būtinybė? prof. hab. dr. emeritus - ${names.getName()}. *Skaityti daugiau...*`,
        `📰 **OLYMPUS SCIENCE DAILY** - Žmonių neigiančių kitų planetų egzistavimą skaičius siekia ${rNum(10, 20)}%, pasitikrink ar nesi vienas iš jų. *Skaityti daugiau...*`,
        `📰 **OLYMPUS SCIENCE DAILY** - dr. ${names.getName()} atrado naują egzoplanetą Andromedos galaktikoje, planeta pavadinta 'Ostas II'. *Skaityti daugiau...*`,
        `📰 **OLYMPUS SCIENCE DAILY** - dr. ${names.getName()} paskaičiavo, kad paskutinis įmanomas neužimtas elektroninio pašto adresas bus užimtas prieš baigiant rašyti šitą straipsnį. *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - ${names.getName()} ir jo muzika nuo šios draudžiami ir ${where.random()}. *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - ${names.getName()} ir ${names.getName()} kartu su grupe 'Lotynų Rokas' koncertuos ${where.random()}. *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - ${names.getName()} atsisveikinimo turas 'Žvaigždžių Raketos' ${where.random()} ir ${where.random()} jau kitą mėnesį. *Skaityti daugiau...*`,
    ]
};

const person = [
    `Brutanus Pictor`,
    `Evaco Vollia`,
    `Alexios #0-F24AA`,
    `Felicius Cupitas Albanus "Atsuktuvas"`,
    `Lucijus Flavijus`,
];

const getAccount = () => {
    const part1 = `${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}`;
    const part2 = `${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}`;
    const part3 = `${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}`;
    const part4 = `${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}`;
    const part5 = `${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}${rNum(1, 9)}`;
    return `${part1}-${part2}-${part3}-${part4}-${part5}`;
}

const whatHappened = () => {
    return [
        `FROM: **ISS/ES**: Jūsų kambaryje liko uždarytas katinas, jei nesiimsite veiksmų, katinas sunaikins ${rNum(1, 99)}% Jūsų asmeninių daiktų`,
        `FROM: **GALDIUS Inc**: Išpardavimas: Pasinaudok 5% nuolaidos kodu #DD-${rNum(0, 999) + 1000}`,
        `FROM: **Deimo Princo Advokatas**: Deimo princas paliko jums palikimą - Cr${rNum(0, 999) * rNum(999, 9999)}, perveskite Cr200 į ${getAccount()} saskaitą kad patvirtinti savo asmenybę!`,
        `FROM: **ISS/ES** - Jūsų kajutė ${rNum(25, 99)}% sutvarkyta pagal nustatytus reikalavimus, prašome palaikyti 100% tvarką.`,
        `FROM: **Džiugi naujiena**: Mitros paslaptys prieinamos visiems, perveskite Cr200 į ${getAccount()} saskaitą kad sužinoti daugiau`,
        `FROM: **LEGIO CXIX**: Renka naujus legionierius, pauskite **čia** kad sužinoti daugiau.`,
        `FROM: **Kosminiai Bikiniai ( • )( • )**: Negavome prenumeratos mokęsčio už praeitus metus, perveskite Cr200 į ${getAccount()} saskaitą kad atnaujinti prenumeratą.`,
        `FROM: **Septima LXIX**: Nori pamatyti mano nuotaukas ❤️❤️❤️ Spausk **Čia**.`,
        `FROM: **Bacho Bažnyčia**: Didžiausias alkoholio pasirinkimas Aurėjoje 🥂. Spausk **Čia**.`,
        `FROM: **Fortuna Inc**: Lengvas būdas užsidirbti Cr10000/mėn, darbas iš namų vos 2h per dieną, nori sužinoti daugiau? Spausk **Čia**..`,
        `FROM: **Ecce Signum Systems**: Primninimas: esant uoste nupirkti ${rNum(1, 5)}Kg miltų,  ${rNum(1, 5)}Kg mėsos,  ${rNum(20, 40)}Vnt. kiaušinių  ${rNum(1, 5)}Kg maisto katinui ir daržovių savo nuožiūra. *<SET REMINDER>*`,
        `FROM: **Olympus Imperial Bank**: Pastebėta įtartina transakcija iš Jūsū sąskaitos 'Cr200, Gavėjas - *Deimo Princo Advokatas*'. Jei Jūs neatlikote šio pavedimo, krepkitės į artimiausią mūsų skyrių.`,
        `FROM: **RINKIMAI**: Artėja Olimpo Senato Tribūno rinkimai, nežinai už ką balsuoti? Rinkis 'Olimpo plebsų darbo ir tvarkos sąjungos su teisingumu naujųjų respublikonų-liberalų-demokratų už vieningą tautą liaudies ir žmonių partiją'! Sąrašas #LXIX.`,
        `FROM: **${names.getName()}**: Salvė! 12 metų mokyklos baigimo proga, kviečiame tave į klasiokų susitikimą Eos!`,
        `FROM: **${names.getName()}**: Bacho Socialinių Mokslų Institutas atlieka vartotojų įpročių apklausą, pasirinkite vieną: 1) Aš niekada neskaitau laiškų nuo nepažįstamų žmonių, 2) Aš perskaitau visus laiškus iki galo.`,
        `FROM: **Prefektas: ${names.getName()}** Jūs gavote baudą už greičio viršyjimą ${where.random()}, bauda Cr${rNum(1, 9)}00, susimokėkite arčiausiame uoste.`
    ]
};

const getPersonalAlert = () => {
    return `TO: 📧 **${person.random()}** ${whatHappened().random()}`;
}

const shipEvents = () => {
    return [
        `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį - ${rNum(91, 99)},${rNum(0, 99)}%`,
        `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, rekomenduojama nesinaudoti cryo kapsule #${rNum(1, 7)}`,
        `☢️ **Ecce Signum Diagnostics** - Diagnostika: įgulos nario #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
        `☢️ **Ecce Signum Diagnostics** - Laivo saugumo diagnostika: abordažo atveju laivo įgula netektų ${rNum(70, 100)}% įgulos narių`,
        `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
        `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: sensoriai nerasti, priežastis - ant pulto miegantis katinas, prašom susisiekti su sensorių inžinieriumi`,
        `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą padidėjo 0,00${rNum(1, 99)}%`,
        `🧰 **Ecce Signum Diagnostics** - Atlikta laivo piloto funkcijų diagnostika, rekomenduojama neatlikinėti sudėtingų manevrų esant dideliam greičiui`,
        `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje rasta parazitų, rekomenduojama laikytis higienos ir pamaitinti katiną`,
        `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje užstrigo katinas, konteineris #**${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
        `🧯 **Ecce Signum Diagnostics** - Krovinių skyriaus diagnostika, rekomenduojama patikrinti konteinerį **#${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
        `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūkstamos įrangos ir medikamentų kodas: **#AA-${rNum(10000, 99999)}**`,
        `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūksta medicininio alkoholio, įtariamas įgulos narys - #0-F24AA`,
        `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, rekomenduojama nelaikyti ginklų organų atauginimo kapsulėje`,
        `🔋 **Ecce Signum Diagnostics** - Atlikta Reaktoriaus diagnostika: radiacinis fonas pasikeitė ${rNum(0, 1) === 0 ? '-' : '+'}${rNum(0, 2)}.${rNum(0, 10)}%.`,
        `🔋 **Ecce Signum Diagnostics** - Atlikta Reaktoriaus diagnostika: tiesioginio pataikymo į reaktorių atveju, tikimybė išgyventi lygi 0.0000${rNum(1, 999)}%`,
        `🔫 **Ecce Signum Diagnostics** - Atlikta bokštelių diagnostika: Kairiarankiams rekomenduojama naudoti dešinį bokštelį.`,
        `🔥 **Ecce Signum** - 📧 TO:**${person.random()}**, **priminimas**: susitvarkyti betvarkę virtuvėje, nesusitvarkius bus atjungta šilto vandens duše privilegija`,
        `🔥 **Ecce Signum** - 📧 TO:**${person.random()}**, **priminimas**: Jūsų siunta nuo *Žurnalas Kosminiai Bikiniai - naujausias numeris* randasi konteineryje #**${rNum(10000, 20000)}**`,
        `🔥 **Ecce Signum** - 📧 TO:**${person.random()}**, **priminimas**: Jūsų kambario kodas *kambarys123* nebegalioja, prašome pasikeisti prie artimiausio terminalo.`,
        `🔥 **Ecce Signum** - 📧 TO:**${person.random()}**, **priminimas**: Jūsų 'SPAM' aplankas užima ${rNum(20, 60)} viso laivo turimų laikmenų, prašome skubiai išsitrinti nereikalingas žinutes.`,
        `🔥 **Ecce Signum** - 📧 TO:**${person.random()}**, **priminimas**: Ventiliacijos šachtoje #${rNum(100, 999)} rastas Jūsų batas, įtariamas katinas arba ${person.random()}.`,
    ]
}

module.exports = {
    news,
    getRandomNews,
    getPersonalAlert,
    shipEvents,
}