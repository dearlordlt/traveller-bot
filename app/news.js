const names = require('./names');

const rNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bandName = () => {
    const first = [
        'Kosmoso',
        'Vilties',
        'Ugniniai',
        'Tylos',
        'Žvaigždės',
        'Blasterio',
        'Smagus',
        'Purpuro',
        'Kietas',
        'Pykčio',
        'Pirmas',
        'Riaušių',
        'Tikras'
    ];

    const last = [
        'Omletas',
        'Laivynas',
        'Legijonas',
        'Įniršis',
        'Metalas',
        'Lazeris',
        'Sprogmuo',
        'Valdovas',
        'Miražas',
        'Imperatorius',
        'Ribojimas'
    ];

    return `${first.random()} ${last.random()}`
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
        `atšauktas grupės ${bandName()} turas`,
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
    `dėl ${bandName()} koncerto`,
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
        `📰 **NOVI HOMINES** - Naujausias 633 metų riaušių kalendorius jau dabar, tik 9,99Cr. *Skaityti daugiau...*`,
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
        `📰 **ONN** - Labiausiai ieškomas nusikaltėlis visatoje - **Barnabas Ursulus**. *Skaityti daugiau...*`,
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
        `📰 **OLYMPUS SCIENCE DAILY** - dr. ${names.getName()} paskaičiavo, kad žmonės kurių vardas prasideda D raide rečiau yra sėkmingi su kauliukų metimais *Skaityti daugiau...*`,
        `📰 **OLYMPUS SCIENCE DAILY** - dr. ${names.getName()} nustatė, kad populiariausias kosminių laivų pavadinimas yra 'Unnamed Ship' *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - grupės ${bandName()} vokalistas - ${names.getName()} ir jo muzika nuo šiol draudžiami ir ${where.random()}. *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - ${names.getName()} ir ${names.getName()} kartu su grupe ${bandName()} koncertuos ${where.random()}. *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - ${names.getName()} atsisveikinimo turas 'Žvaigždžių Raketos' ${where.random()} ir ${where.random()} jau kitą mėnesį. *Skaityti daugiau...*`,
        `📰 **DEIMOS TODAY** - Virgo sistemoje, po ginkluoto pasipriešinimo, Deimo spec. pajėgos sulaikė du imperijos šnipus: Primus Pilus Krato Enėją ir Centurijoną Tuliju Septą. Likę šnipai sunaikinti kovos metu. Abu nuteisti karo tribunolo ir sušaudyti vietoje. *Skaityti daugiau...*`,
        `📰 **DEIMOS TODAY** - Virgo sistemoje, po ginkluoto pasipriešinimo, Deimo spec. pajėgos sulaikė du imperijos šnipus: Primus Pilus Krato Enėją ir Centurijoną Tuliju Septą. Likę šnipai pabėgo. Abu nuteisti karo tribunolo ir sušaudyti vietoje. *Skaityti daugiau...*`,
        `📰 **DEIMOS TODAY** - Virgo sistemoje, po ginkluoto pasipriešinimo, Deimo spec. pajėgos sulaikė du imperijos šnipus: Primus Pilus Krato Enėją ir Centurijoną Tuliju Septą. Likė šnipai slapstosi Virgo sistemoję. Abu nuteisti karo tribunolo ir sušaudyti vietoje. *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - grupė ${bandName()} su daina ${bandName()} papuolė į Aurėjos TOP10 *Skaityti daugiau...*`,
        `📰 **ENTERTAINMENT NOW** - grupė ${bandName()} su daina ${bandName()} papuolė į Aurėjos TOP10 *Skaityti daugiau...*`,
        `📰 **DEIMOS TODAY** - Naujos 'Tornado III' klasės kariniai laivai pradės patruliuoti sektorius kuriuose bus pastebėti pirtai jau neužilgo  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Kriaušių sidras neegzistuoja  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Skrydžio metu netenkama 30% skonio receptorių  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Egzistuoja tik du žmonės kurie buvo įvertinti nobelio premija daugiau nei vienoje disciplinoje - Marie Curie ir Ostas II *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Senovės Egipte, faraonas Pepe II savo vergams liepė išsitepti medumi, kad jo nepultu vabzdžiai  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Piktų vergai perkelti iš Kaledonijos į Protėją IV tiki kad Loch Neso pabaisa persikelė kartu su jais.  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Comic Sans šriftas pirmą kartą panaudotas komiksuose.  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Olimpo Imperatoriškasis Institutas jau daugiau nei 500 metų negali atsakyti kodėl egzodo metu buvo pasirinkta į Aurėja atvėžti uodus ir erkes.  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Gaisrinio hidranto patentas buvo prarastas gaisro metu  *Skaityti daugiau...*`,
        `📰 **GALAKTIKOS FAKTAI** - Dauguma nusikaltimų ir "bugų" padaroma pirmadieniais  *Skaityti daugiau...*`,
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

const whatHappened = (shipName) => {
    return [
        `FROM: **${shipName}**: Jūsų kambaryje liko uždarytas katinas, jei nesiimsite veiksmų, katinas sunaikins ${rNum(1, 99)}% Jūsų asmeninių daiktų`,
        `FROM: **GALDIUS Inc**: Išpardavimas: Pasinaudok 5% nuolaidos kodu #DD-${rNum(0, 999) + 1000}`,
        `FROM: **Deimo Princo Advokatas**: Deimo princas paliko jums palikimą - Cr${rNum(0, 999) * rNum(999, 9999)}, perveskite Cr200 į ${getAccount()} saskaitą kad patvirtinti savo asmenybę!`,
        `FROM: **${shipName}** - Jūsų kajutė ${rNum(25, 99)}% sutvarkyta pagal nustatytus reikalavimus, prašome palaikyti 100% tvarką.`,
        `FROM: **Džiugi naujiena**: Mitros paslaptys prieinamos visiems, perveskite Cr200 į ${getAccount()} saskaitą kad sužinoti daugiau`,
        `FROM: **LEGIO CXIX**: Renka naujus legionierius, spauskite **čia** kad sužinoti daugiau.`,
        `FROM: **Kosminiai Bikiniai ( • )( • )**: Negavome prenumeratos mokęsčio už praeitus metus, perveskite Cr200 į ${getAccount()} saskaitą kad atnaujinti prenumeratą.`,
        `FROM: **Septima LXIX**: Nori pamatyti mano nuotaukas ❤️❤️❤️ Spausk **Čia**.`,
        `FROM: **Bacho Bažnyčia**: Didžiausias alkoholio pasirinkimas Aurėjoje 🥂. Spausk **Čia**.`,
        `FROM: **Fortuna Inc**: Lengvas būdas užsidirbti Cr10000/mėn, darbas iš namų vos 2h per dieną, nori sužinoti daugiau? Spausk **Čia**..`,
        `FROM: **${shipName} Systems**: Primninimas: esant uoste nupirkti ${rNum(1, 5)}Kg miltų,  ${rNum(1, 5)}Kg mėsos,  ${rNum(20, 40)}Vnt. kiaušinių  ${rNum(1, 5)}Kg maisto katinui ir daržovių savo nuožiūra. *<SET REMINDER>*`,
        `FROM: **Olympus Imperial Bank**: Pastebėta įtartina transakcija iš Jūsū sąskaitos 'Cr200, Gavėjas - *Deimo Princo Advokatas*'. Jei Jūs neatlikote šio pavedimo, krepkitės į artimiausią mūsų skyrių.`,
        `FROM: **RINKIMAI**: Artėja Olimpo Senato Tribūno rinkimai, nežinai už ką balsuoti? Rinkis 'Olimpo plebsų darbo ir tvarkos sąjungos su teisingumu naujųjų respublikonų-liberalų-demokratų už vieningą tautą liaudies ir žmonių partiją'! Sąrašas #LXIX.`,
        `FROM: **${names.getName()}**: Salvė! 12 metų mokyklos baigimo proga, kviečiame tave į klasiokų susitikimą Eos!`,
        `FROM: **${names.getName()}**: Bacho Socialinių Mokslų Institutas atlieka vartotojų įpročių apklausą, pasirinkite vieną: 1) Aš niekada neskaitau laiškų nuo nepažįstamų žmonių, 2) Aš perskaitau visus laiškus iki galo.`,
        `FROM: **Prefektas: ${names.getName()}** Jūs gavote baudą už greičio viršyjimą ${where.random()}, bauda Cr${rNum(1, 9)}00, susimokėkite arčiausiame uoste.`,
        `FROM: **${shipName}** - Jūsų sunaudojamos laivo maisto ir vandens atsargos siekia ${rNum(20, 30)}%, siūloma kreptis į laivo mediką.`,
        `FROM: **n00bkiller69** - Noob!!!`,
        `FROM: **UNKNOWN** - Maistas ...`,
    ]
};

const getPersonalAlert = (shipName) => {
    return `TO: 📧 **${person.random()}** ${whatHappened(shipName).random()}`;
}

const shipEvents = (shipName) => {
    return [
        /* `⚠️ ** Ecce Signum Diagnostics ** - Visos sistemos sugadintos, gyvybės palaikymas atjungtas, 7 neidentifikuoti asmenys artėja prie kapitono tiltelio. Susinaikinimas po 3 ... 2 ... 1 ...`,
        `⚠️ ** Ecce Signum Diagnostics ** - .. neatpažintas objektas (#PHB-5010530315) sunaikino RSS - Tornado, RSS Ciklonas sugadintas. NO nekeičia kurso, gynybos sistemos užrakintos, rekomenduojama evakuacija.`,
        `⚠️ ** Ecce Signum ** - Paskutinė žinutė prieš susinaikinimą: TO:**Ecce Signum įgula**, Salve broliai! Manes laukia paskutinis mūšis. Po savęs palieku savo draugams ir broliams savo paskutinį palikimą - jį rasite {koordinatės}. Jums ten patekti padės mano draugas? Ardanas. Suraskite ji Virgo bazėje. Pasirūpinkite Tara ir Cezariu. Semper Fi ir iki susimatymo Eliziejaus Laukuose!`,
        `⚠️ **${shipName} Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį - ${rNum(91, 99)},${rNum(0, 99)}%`, */
        `⚠️ **${shipName} Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, rekomenduojama nesinaudoti cryo kapsule #${rNum(1, 7)}`,
        `☢️ **${shipName} Diagnostics** - Diagnostika: įgulos nario #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
        `☢️ **${shipName} Diagnostics** - Laivo saugumo diagnostika: abordažo atveju laivo įgula netektų ${rNum(70, 100)}% įgulos narių`,
        `📵 **${shipName} Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
        `📵 **${shipName} Diagnostics** - Laivo sensorių diagnostika: sensoriai nerasti, priežastis - ant pulto miegantis katinas, prašom susisiekti su sensorių inžinieriumi`,
        `🧰 **${shipName} Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą padidėjo 0,00${rNum(1, 99)}%`,
        `🧰 **${shipName} Diagnostics** - Atlikta laivo piloto funkcijų diagnostika, rekomenduojama neatlikinėti sudėtingų manevrų esant dideliam greičiui`,
        `🧯 **${shipName} Diagnostics** - Krovinių skyriuje rasta parazitų, rekomenduojama laikytis higienos ir pamaitinti katiną`,
        `🧯 **${shipName} Diagnostics** - Krovinių skyriuje užstrigo katinas, konteineris #**${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
        `🧯 **${shipName} Diagnostics** - Krovinių skyriaus diagnostika, rekomenduojama patikrinti konteinerį **#${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
        `🔧 **${shipName} Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūkstamos įrangos ir medikamentų kodas: **#AA-${rNum(10000, 99999)}**`,
        `🔧 **${shipName} Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūksta medicininio alkoholio, įtariamas įgulos narys - #0-F24AA`,
        `🔧 **${shipName} Diagnostics** - Atlikta medicinos skyriaus diagnostika, rekomenduojama nelaikyti ginklų organų atauginimo kapsulėje`,
        `🔋 **${shipName} Diagnostics** - Atlikta Reaktoriaus diagnostika: radiacinis fonas pasikeitė ${rNum(0, 1) === 0 ? '-' : '+'}${rNum(0, 2)}.${rNum(0, 10)}%.`,
        `🔋 **${shipName} Diagnostics** - Atlikta Reaktoriaus diagnostika: tiesioginio pataikymo į reaktorių atveju, tikimybė išgyventi lygi 0.0000${rNum(1, 999)}%`,
        `🔫 **${shipName} Diagnostics** - Atlikta bokštelių diagnostika: Kairiarankiams rekomenduojama naudoti dešinį bokštelį.`,
        `🔥 **${shipName}** - 📧 TO:**${person.random()}**, **priminimas**: susitvarkyti betvarkę virtuvėje, nesusitvarkius bus atjungta šilto vandens duše privilegija`,
        `🔥 **${shipName}** - 📧 TO:**${person.random()}**, **priminimas**: Jūsų siunta nuo *Žurnalas Kosminiai Bikiniai - naujausias numeris* randasi konteineryje #**${rNum(10000, 20000)}**`,
        `🔥 **${shipName}** - 📧 TO:**${person.random()}**, **priminimas**: Jūsų kambario kodas *kambarys123* nebegalioja, prašome pasikeisti prie artimiausio terminalo.`,
        `🔥 **${shipName}** - 📧 TO:**${person.random()}**, **priminimas**: Jūsų 'SPAM' aplankas užima ${rNum(20, 60)}% viso laivo turimų laikmenų, prašome skubiai išsitrinti nereikalingas žinutes.`,
        `🔥 **${shipName}** - 📧 TO:**${person.random()}**, **priminimas**: Ventiliacijos šachtoje #${rNum(100, 999)} rastas Jūsų batas, įtariamas katinas arba ${person.random()}.`,
    ];
}

/**
 * TODO:
 * random band names
 * random song names
 */

module.exports = {
    news,
    getRandomNews,
    getPersonalAlert,
    shipEvents,
}
