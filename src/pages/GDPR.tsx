import Layout from "@/components/Layout";

const GDPR = () => {
  return (
    <Layout title="GDPR - Ochrana osobných údajov | Záhradkári Consulting" description="Informácie o ochrane osobných údajov v súlade s GDPR. Transparentné spracovanie údajov v Záhradkári Consulting.">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Ochrana osobných údajov (GDPR)
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Posledná aktualizácia: 1. marec 2024
              </p>
              
              <p>
                Zahradkari Consulting s.r.o. rešpektuje vaše súkromie a záväzuje sa chrániť 
                vaše osobné údaje. Toto vyhlásenie o ochrane údajov vysvetľuje, ako zbierame, 
                používame a chránime vaše informácie v súlade s Nariadením o ochrane údajov (GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Prevádzkovateľ údajov</h2>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Zahradkari Consulting s.r.o.</strong></p>
                <p>IČO: 54 893 221</p>
                <p>DIČ: 2121748391</p>
                <p>Sídlo: Račianska 153, 831 54 Bratislava, Slovensko</p>
                <p>E-mail: info@zahradkari.xyz</p>
                <p>Telefón: +421 905 812 334</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Aké údaje zbierame</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Údaje poskytnuté priamo</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Meno a priezvisko</li>
                <li>E-mailová adresa</li>
                <li>Telefónne číslo</li>
                <li>Adresa (ak je relevantná pre službu)</li>
                <li>Informácie o záhrade a záhradkárskych potrebách</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automaticky zbierané údaje</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP adresa</li>
                <li>Informácie o prehliadači a zariadení</li>
                <li>Údaje o návšteve webstránky</li>
                <li>Súbory cookie a podobné technológie</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Ako používame vaše údaje</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Poskytovanie záhradkárskych konzultácií a služieb</li>
                <li>Komunikácia s vami ohľadom vašich dotazov</li>
                <li>Zasielanie informácií o našich službách (len so súhlasom)</li>
                <li>Zlepšovanie našich služieb a webstránky</li>
                <li>Plnenie zákonných povinností</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Právny základ spracovávania</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Plnenie zmluvy:</strong> Pre poskytovanie našich služieb</li>
                <li><strong>Oprávnený záujem:</strong> Pre zlepšovanie služieb a bezpečnosť</li>
                <li><strong>Súhlas:</strong> Pre marketingovú komunikáciu</li>
                <li><strong>Zákonná povinnosť:</strong> Pre účtovníctvo a daňové účely</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Zdieľanie údajov</h2>
              <p>
                Vaše osobné údaje nezdieľame s tretími stranami, okrem prípadov, keď:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Je to potrebné pre poskytnutie služby (napr. platobné brány)</li>
                <li>Máme váš výslovný súhlas</li>
                <li>To vyžaduje zákon</li>
                <li>Je to potrebné na ochranu našich práv</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Doba uchovávania údajov</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Klientske údaje:</strong> Po dobu poskytovania služieb + 3 roky</li>
                <li><strong>Účtovné údaje:</strong> 10 rokov (zákonná povinnosť)</li>
                <li><strong>Marketingové údaje:</strong> Do odvolania súhlasu</li>
                <li><strong>Webové údaje:</strong> 25 mesiacov</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Vaše práva</h2>
              <p>V súlade s GDPR máte nasledovné práva:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Právo na prístup</h4>
                  <p className="text-sm">Môžete požiadať o kópiu vašich osobných údajov</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Právo na opravu</h4>
                  <p className="text-sm">Môžete požiadať o opravu nesprávnych údajov</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Právo na vymazanie</h4>
                  <p className="text-sm">Môžete požiadať o vymazanie vašich údajov</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Právo na prenosnosť</h4>
                  <p className="text-sm">Môžete požiadať o prenos údajov k inému poskytovateľovi</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Bezpečnosť údajov</h2>
              <p>
                Implementujeme vhodné technické a organizačné opatrenia na ochranu vašich 
                osobných údajov proti neoprávnenému prístupu, zmene, zverejneniu alebo zničeniu:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>SSL šifrovanie pre všetky prenosy údajov</li>
                <li>Pravidelné zálohovanie údajov</li>
                <li>Obmedzený prístup k údajom len pre oprávnené osoby</li>
                <li>Pravidelné bezpečnostné audity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Zmeny tejto politiky</h2>
              <p>
                Môžeme túto politiku ochrany údajov čas od času aktualizovať. O významných 
                zmenách vás budeme informovať e-mailom alebo prostredníctvom oznámenia 
                na našej webstránke.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt a sťažnosti</h2>
              <p>
                Ak máte otázky alebo chcete uplatniť svoje práva, kontaktujte nás:
              </p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <ul className="space-y-1">
                  <li><strong>E-mail:</strong> info@zahradkari.xyz</li>
                  <li><strong>Telefón:</strong> +421 905 812 334</li>
                  <li><strong>Pošta:</strong> Račianska 153, 831 54 Bratislava, Slovensko</li>
                </ul>
              </div>
              
              <p className="mt-4">
                Ak nie ste spokojní s tým, ako spracovávame vaše údaje, máte právo podať 
                sťažnosť na Úrad na ochranu osobných údajov SR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GDPR;