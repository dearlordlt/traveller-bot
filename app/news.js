const rNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const news = [
    `📰 **GALAXY NEWS** [631-10-15] - Hado mokslininkai sėkmingai išbandė 'Gero Elgesio' implantą ant kalinių, Respublikos Konsulas įtatymu patvirtino leidimą naudoti implantą ant piliečių. *Skaityti daugiau...*`,
    `📰 **GALAXY NEWS** [631-08-02] - Hado sistemoje atlikti naujo Laivyno Flagmano Enėjas bandymai. Legatai tvirtina, kad naujas flagmanas atstos Aurėjos laivą. *Skaityti daugiau...*`,
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
    `📰 **OLYMPUS FREE MEDIA** [631-10-17] - Imperatorius atstatydino laivyno Legatą Amilio Stulio, Egzekucija tiesiogiai per OFM. *Skaityti daugiau...*`,
    `📰 **KALYPSO MEDIA** [631-11-19] - Pagrindinės naujienos: Badas Vilkaro teritorijoje, Korporacijų karai, Mažinamos Legijonierių algos, Olimpo 'Legio' nugalėjo Phobo 'Jaučius' ${rNum(10, 20)}:${rNum(0, 10)}, Jotuno šnipų medžioklė tęsiasi . *Skaityti daugiau...*`,
    `📰 **ONN** [631-09-01] - Poezijos apie Imperatorių konkursas. Balsuok už nugalėtoją. *Skaityti daugiau...*`,
    `📰 **ONN** [631-11-02] - Eos kosmodrome susišaudymas. Įtariami Jotuno šnipai ieškomi. *Skaityti daugiau...*`,
    `📰 **ONN** [631-11-09] - Metų filmu, vienbalsiai išrinktas 'Imperatorius' - Biografinė drama. Pagr vaidmenyje - Imperatorius Ostas II. *Skaityti daugiau...*`,
    `📰 **ONN** [631-10-03] - 10 patiekalų imperatoriaus Osto II valdymo metinių šventiniam stalui. *Skaityti daugiau...*`,
    `📰 **ONN** [631-09-15] - Imperatoriaus įsakymas: gladiatorių kautynės bus vykdomos kiekvieną savaitę visose pagrindinėse planetose. Transliacijos nuo šiol nemokamos. Ave Caesar. *Skaityti daugiau...*`,
    `📰 **TRUTH OF AVALON** [631-03-27] - Gražiausių maldų konkursas, balsavimas - 5Cr. *Skaityti daugiau...*`,
    `📰 **JOTUN PATRIOT** [631-05-05] - Meninis filmas: 'Šlovė vadui'. Pagr. vaidmenyje - Otto Valerius. *Skaityti daugiau...*`,
    `📰 **VULCAN SUN** [631-07-19] - Tiesioginė Senato posedžio transliacija, balsavimas dėl reparacijų Olimpui nutraukimo. *Skaityti daugiau...*`,
    `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį - ${rNum(90, 99)},99%`,
    `⚠️ **Ecce Signum Diagnostics** - Atlikta Gyvybės palaikymo sistemų diagnostika, tikimybė isgyventi sekantį skrydį -${rNum(90, 99)},99%`,
    `☢️ **Ecce Signum Diagnostics** - Diagnostika: Keleivio #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
    `☢️ **Ecce Signum Diagnostics** - Diagnostika: Keleivio #0-F24AA alkoholio atsargos pavojuje (Liko ${rNum(0, 100)} alkoholio vienetų), rekomendacija - pasipildyti atsargas`,
    `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
    `📵 **Ecce Signum Diagnostics** - Laivo sensorių diagnostika: neveikia ${rNum(0, 10)} posistemė/s, prašom susisiekti su sensorių inžinieriumi`,
    `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą padidėjo 0,00001%`,
    `🧰 **Ecce Signum Diagnostics** - Atlikta laivo valdymo kalibracija, tikimybė atlikti manevrą sumažėjo 0,00001%`,
    `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje rasta parazitų, rekomenduojama laikytis higienos ir pamaitinti katiną`,
    `🧯 **Ecce Signum Diagnostics** - Krovinių skyriuje užstrigo katinas, konteineris **${rNum(10000, 20000)}**. Skubiai kviečiama įgula`,
    `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūkstamos įrangos ir medikamentų kodas: **WW8UcZQi**`,
    `🔧 **Ecce Signum Diagnostics** - Atlikta medicinos skyriaus diagnostika, trūksta medicininio alkoholio, įtariamas keleivis #0-F24AA`,
];

module.exports = {
    news,
}