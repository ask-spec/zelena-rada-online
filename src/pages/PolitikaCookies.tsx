import Layout from "@/components/Layout";

const PolitikaCookies = () => {
  return (
    <Layout title="Politika súborov cookie | Záhradkári Consulting" description="Informácie o používaní súborov cookie na webstránke Záhradkári Consulting. Transparentné informácie o zbieraných údajoch.">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Politika súborov cookie
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Posledná aktualizácia: 1. marec 2024
              </p>
              
              <p>
                Táto politika súborov cookie vysvetľuje, čo sú súbory cookie a ako ich používame 
                na našej webstránke zahradkari.xyz (ďalej len "Služba") prevadzkovanej spoločnosťou 
                Zahradkari Consulting s.r.o. (ďalej len "my", "nás" alebo "naša").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Čo sú súbory cookie?</h2>
              <p>
                Súbory cookie sú malé textové súbory, ktoré sa ukladajú do vašeho zariadenia 
                (počítač alebo mobilné zariadenie) keď navštívite webstránku. Umožňujú webstránke 
                rozpoznať vaše zariadenie a zapamätať si určité informácie o vás alebo vašich preferenciách.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Ako používame súbory cookie?</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nevyhnutné súbory cookie</h3>
              <p>
                Tieto súbory cookie sú potrebné pre správne fungovanie webstránky a nie je možné 
                ich vypnúť v našich systémoch. Zvyčajne sa nastavujú len ako odpoveď na akcie, 
                ktoré vykonávate, ako je nastavenie ochrany súkromia, prihlásenie alebo vyplnenie formulárov.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analytické súbory cookie</h3>
              <p>
                Tieto súbory cookie nám umožňujú počítať návštevy a zdroje premávky, aby sme mohli 
                merať a zlepšovať výkonnosť našej webstránky. Pomáhajú nám vedieť, ktoré stránky 
                sú najpopulárnejšie a najmenej populárne a vidieť, ako sa návštevníci pohybujú po stránke.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Funkčné súbory cookie</h3>
              <p>
                Tieto súbory cookie umožňujú webstránke poskytovať rozšírené funkcie a personalizáciu. 
                Môžu byť nastavené nami alebo tretími stranami, ktorých služby sme pridali na naše stránky.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Tretie strany</h2>
              <p>
                Naša webstránka môže používať služby tretích strán, ako sú:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics - pre analýzu návštevnosti</li>
                <li>Platobné brány - pre spracovanie platieb</li>
                <li>Komunikačné nástroje - pre chat a podporu</li>
              </ul>
              <p className="mt-4">
                Tieto služby môžu používať vlastné súbory cookie v súlade s ich vlastnými 
                politikami ochrany súkromia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Správa súborov cookie</h2>
              <p>
                Môžete kontrolovať a/alebo vymazať súbory cookie podľa svojich preferencií. 
                Pre viac informácií navštívte aboutcookies.org. Môžete vymazať všetky súbory 
                cookie, ktoré sú už vo vašom počítači, a môžete nastaviť väčšinu prehliadačov 
                tak, aby im zabránili ukladať.
              </p>
              
              <p className="mt-4">
                Ak sa rozhodnete zakázať súbory cookie, niektoré funkcie našej webstránky 
                nemusíte vedieť používať naplno.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Zmeny tejto politiky</h2>
              <p>
                Môžeme túto Politiku súborov cookie čas od času aktualizovať. Odporúčame vám 
                pravidelne kontrolovať túto stránku pre akékoľvek zmeny. Zmeny sú účinné 
                okamžite po ich zverejnení na tejto stránke.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontaktujte nás</h2>
              <p>
                Ak máte akékoľvek otázky ohľadom tejto Politiky súborov cookie, kontaktujte nás:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>E-mailom: info@zahradkari.xyz</li>
                <li>Telefonicky: +421 905 812 334</li>
                <li>Poštou: Račianska 153, 831 54 Bratislava, Slovensko</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitikaCookies;