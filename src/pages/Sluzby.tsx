import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Video, MessageCircle, Users } from "lucide-react";

const Sluzby = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Individuálne konzultácie",
      description: "Osobné poradenstvo pre vaše špecifické záhradkárske potreby",
      features: [
        "45 minút jeden na jeden",
        "Personalizované rady",
        "Možnosť následných otázok",
        "Písomné zhrnutie"
      ],
      price: "Prvá konzultácia zdarma"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video konzultácie",
      description: "Ukážte nám svoju záhradu priamo cez video hovor",
      features: [
        "Live video spojenie",
        "Analýza v reálnom čase",
        "Zdieľanie obrazovky",
        "Záznam konzultácie"
      ],
      price: "Od 35€/hodina"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skupinové poradenstvo",
      description: "Ekonomické riešenie pre viacerých záhradkárov",
      features: [
        "Až 6 účastníkov",
        "Interaktívne diskusie",
        "Zdieľanie skúseností",
        "Nižšia cena na osobu"
      ],
      price: "Od 15€/osoba"
    }
  ];

  return (
    <Layout title="Služby - Online konzultácie | Záhradkári Consulting" description="Profesionálne online záhradkárske poradenstvo. Prvá konzultácia zdarma. Video konzultácie, skupinové poradenstvo a individuálne služby.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Online záhradkárske <span className="text-primary">konzultácie</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Získajte profesionálne poradenstvo od certifikovaných záhradkárskych expertov. 
            Prvá konzultácia je úplne zdarma.
          </p>
          <Button size="lg" className="shadow-lg">
            Rezervovať bezplatnú konzultáciu
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Naše služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vyberte si typ konzultácie, ktorý najlepšie vyhovuje vašim potrebám
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    Viac informácií
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Začnite s bezplatnou konzultáciou
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Zistite, ako môžeme pomôcť vašej záhrade prosperovať. Bez záväzkov, bez skrytých poplatkov.
          </p>
          <Button size="lg" className="shadow-lg">
            Rezervovať teraz
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Sluzby;