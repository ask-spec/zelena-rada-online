import Layout from "@/components/Layout";

const ObchodnePodmienky = () => {
  return (
    <Layout title="Obchodné podmienky | Záhradkári Consulting" description="Obchodné podmienky pre služby Záhradkári Consulting. Pravidlá pre konzultácie, platby a používanie našich služieb.">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Obchodné podmienky
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Platné od: 1. marec 2024
              </p>
              
              <p>
                Tieto obchodné podmienky upravujú vzťahy medzi spoločnosťou Zahradkari Consulting s.r.o. 
                a užívateľmi našich služieb. Používaním našich služieb súhlasíte s týmito podmienkami.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Základné informácie</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.1 Poskytovateľ služieb</h3>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Zahradkari Consulting s.r.o.</strong></p>
                <p>IČO: 54 893 221, DIČ: 2121748391</p>
                <p>Sídlo: Račianska 153, 831 54 Bratislava, Slovensko</p>
                <p>Zapísaná v OR OS Bratislava I, oddiel: Sro, vložka č. 123456/B</p>
                <p>E-mail: info@zahradkari.xyz, Tel: +421 905 812 334</p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1.2 Definície</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Služby:</strong> Záhradkárske konzultácie, webináre, materiály a poradenstvo</li>
                <li><strong>Klient:</strong> Fyzická alebo právnická osoba využívajúca naše služby</li>
                <li><strong>Zmluva:</strong> Dohoda o poskytovaní služieb medzi nami a klientom</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Služby</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Druhy služieb</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Bezplatné konzultácie:</strong> Prvá 30-minútová konzultácia zdarma</li>
                <li><strong>Platené konzultácie:</strong> Individuálne, video a skupinové konzultácie</li>
                <li><strong>Webináre:</strong> Live a nahrané vzdelávacie podujatia</li>
                <li><strong>Materiály:</strong> PDF checklisty, príručky a návody</li>
                <li><strong>Mesačné balíčky:</strong> Kombinované služby s pravidelnou podporou</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Poskytovanie služieb</h3>
              <p>
                Služby poskytujeme online prostredníctvom videohovorov, telefónu, e-mailu 
                a našej webstránky. Konzultácie sa uskutočňujú v dohodnutom termíne.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Objednávanie a zmluva</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Proces objednávania</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Vyplnenie kontaktného formulára alebo telefonický kontakt</li>
                <li>Potvrdenie objednávky e-mailom s detailmi služby</li>
                <li>Uhradenie ceny služby (ak sa vyžaduje)</li>
                <li>Poskytnutie služby v dohodnutom termíne</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Vznik zmluvy</h3>
              <p>
                Zmluva vzniká potvrdením objednávky z našej strany. Pre platené služby 
                je podmienkou vznik zmluvy aj uhradenie dohodnutej ceny.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Ceny a platby</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Ceny</h3>
              <p>
                Aktuálne ceny služieb sú uvedené na našej webstránke v sekcii Cenník. 
                Ceny sú uvedené vrátane DPH.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Platobné podmienky</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Jednorázové služby: Platba vopred pred poskytnutím služby</li>
                <li>Mesačné balíčky: Platba vždy k 1. dňu mesiaca</li>
                <li>Akceptované platby: Bankový prevod, platobné karty, online platby</li>
                <li>Splatnosť: Okamžite, najneskôr do 3 dní od vystavenej faktúry</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 Zmena cien</h3>
              <p>
                Vyhradzujeme si právo zmeniť ceny s 30-dňovým predstihom. 
                Existujúce zmluvy zostávajú v pôvodných cenách do ich skončenia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Storno a vrátenie</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Storno zo strany klienta</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Viac ako 24h vopred:</strong> Bezplatné storno alebo presun termínu</li>
                <li><strong>Menej ako 24h:</strong> Storno poplatok 50% z ceny služby</li>
                <li><strong>Neúčasť bez ohlásenia:</strong> Plná cena služby</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Storno zo strany poskytovateľa</h3>
              <p>
                V prípade, že nemôžeme službu poskytnúť z našej strany, vrátime 
                100% zaplatenej sumy alebo dohodneme náhradný termín.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Mesačné balíčky</h3>
              <p>
                Mesačné balíčky môžete zrušiť kedykoľvek s účinnosťou od nasledujúceho mesiaca. 
                Čiastočné vrátenie za aktuálny mesiac nie je možné.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Povinnosti a zodpovednosť</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.1 Naše povinnosti</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Poskytovať služby odborne a včas</li>
                <li>Chrániť dôverné informácie klientov</li>
                <li>Dodržiavať dohodnuté termíny</li>
                <li>Poskytovať aktuálne a overené informácie</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.2 Povinnosti klienta</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uhradiť dohodnutú cenu služby</li>
                <li>Poskytnúť presné a úplné informácie</li>
                <li>Dodržiavať dohodnuté termíny</li>
                <li>Používať služby v súlade s ich účelom</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6.3 Obmedzenie zodpovednosti</h3>
              <p>
                Naša zodpovednosť za škody je obmedzená na výšku zaplatenej ceny za konkrétnu službu. 
                Nezodpovedáme za nepriame škody, ušlý zisk alebo následné škody.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Duševné vlastníctvo</h2>
              <p>
                Všetky materiály, webináre a obsah, ktorý poskytujeme, sú chránené autorskými právami. 
                Klient má právo používať tieto materiály len pre osobnú potrebu a nesmie ich 
                ďalej distribuovať bez nášho písomného súhlasu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Ochrana údajov</h2>
              <p>
                Spracovanie osobných údajov sa riadi naším Vyhlásením o ochrane údajov (GDPR), 
                ktoré je dostupné na našej webstránke.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Riešenie sporov</h2>
              <p>
                Snažíme sa riešiť všetky spory mimosúdne. V prípade súdneho sporu 
                je príslušný súd podľa sídla našej spoločnosti. Vzťahy sa riadia 
                právom Slovenskej republiky.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Záverečné ustanovenia</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.1 Zmeny podmienok</h3>
              <p>
                Tieto obchodné podmienky môžeme zmeniť s 30-dňovým predstihom. 
                O zmenách budeme klientov informovať e-mailom.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.2 Platnosť</h3>
              <p>
                Ak je niektoré ustanovenie týchto podmienok neplatné, ostatné ustanovenia 
                zostávajú v platnosti. Neplatné ustanovenie sa nahradí ustanovením platným 
                s podobným účelom.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.3 Kontakt</h3>
              <p>
                Pre otázky k obchodným podmienkam nás kontaktujte na info@zahradkari.xyz 
                alebo +421 905 812 334.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ObchodnePodmienky;