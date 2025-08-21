import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Cennik = () => {
  const packages = [
    {
      name: "Základný",
      price: "Zdarma",
      description: "Ideálne na vyskúšanie našich služieb",
      featured: false,
      features: [
        "1x bezplatná konzultácia (30 min)",
        "Základné rady e-mailom",
        "Prístup k článkom",
        "Newsletter s tipmi"
      ],
      cta: "Začať zdarma"
    },
    {
      name: "Standard",
      price: "49€/mesiac",
      description: "Pre aktívnych záhradkárov",
      featured: true,
      features: [
        "3x konzultácie mesačne (45 min)",
        "Video konzultácie",
        "Prioritná podpora",
        "Všetky webináre zdarma",
        "PDF checklisty zadarmo",
        "Personalizované rady"
      ],
      cta: "Vybrať Standard"
    },
    {
      name: "Premium",
      price: "99€/mesiac", 
      description: "Pre profesionálnych pestovateľov",
      featured: false,
      features: [
        "Neobmedzené konzultácie",
        "Dedikovaný konzultant",
        "Video návštevy záhrady",
        "Všetky webináre + záznamy",
        "Všetky materiály zadarmo",
        "Individuálny plán starostlivosti",
        "24/7 chat podpora"
      ],
      cta: "Vybrať Premium"
    }
  ];

  const oneTimeServices = [
    {
      service: "Jednorázová konzultácia",
      duration: "45 minút",
      price: "35€"
    },
    {
      service: "Video analýza záhrady",
      duration: "60 minút",
      price: "45€"
    },
    {
      service: "Návrh záhradného plánu",
      duration: "2-3 hodiny práce",
      price: "120€"
    },
    {
      service: "Skupinová konzultácia",
      duration: "60 minút (až 6 osôb)",
      price: "15€/osoba"
    }
  ];

  return (
    <Layout title="Cenník služieb | Záhradkári Consulting" description="Transparentné ceny za záhradkárske poradenstvo. Mesačné balíčky od 49€, prvá konzultácia zdarma. Profesionálne služby pre každý rozpočet.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transparentný <span className="text-primary">cenník</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Jasné ceny bez skrytých poplatkov. Začnite s bezplatnou konzultáciou 
            a vyberte si balíček, ktorý vyhovuje vašim potrebám.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mesačné balíčky</h2>
            <p className="text-lg text-muted-foreground">
              Vyberte si balíček podľa intenzity vášho záhradkárčenia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`h-full relative ${pkg.featured ? 'border-2 border-primary shadow-lg' : 'border-2 hover:border-primary/50 transition-colors'}`}>
                {pkg.featured && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Najpopulárnejšie
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    variant={pkg.featured ? "default" : "outline"}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-time Services */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Jednorázové služby</h2>
            <p className="text-lg text-muted-foreground">
              Potrebujete radu len občas? Vyberte si z našich jednorázových služieb.
            </p>
          </div>
          
          <div className="space-y-4">
            {oneTimeServices.map((service, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{service.service}</h3>
                      <p className="text-muted-foreground">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Objednať
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Často kladené otázky</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-l-primary pl-6">
              <h3 className="font-semibold text-lg mb-2">Ako prebieha bezplatná konzultácia?</h3>
              <p className="text-muted-foreground">
                Bezplatná konzultácia trvá 30 minút a môže prebehnúť cez telefón alebo video hovor. 
                Diskutujeme vaše aktuálne výzvy a poskytneme základné rady.
              </p>
            </div>
            
            <div className="border-l-4 border-l-primary pl-6">
              <h3 className="font-semibold text-lg mb-2">Môžem zrušiť mesačný balíček kedykoľvek?</h3>
              <p className="text-muted-foreground">
                Áno, mesačné balíčky môžete zrušiť kedykoľvek bez výpovednej lehoty. 
                Zrušenie je účinné od nasledujúceho mesiaca.
              </p>
            </div>
            
            <div className="border-l-4 border-l-primary pl-6">
              <h3 className="font-semibold text-lg mb-2">Aké sú možnosti platby?</h3>
              <p className="text-muted-foreground">
                Prijímame platby kartou, bankovým prevodom a online platobnými bránami. 
                Všetky platby sú zabezpečené SSL šifrovaním.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-sage/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Začnite ešte dnes
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Rezervujte si bezplatnú konzultáciu a začnite cestu k dokonalej záhrade
          </p>
          <Button size="lg" className="shadow-lg">
            Bezplatná konzultácia
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Cennik;