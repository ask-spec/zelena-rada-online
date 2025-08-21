import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Calendar, Phone } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Ďakujeme za vašu žiadosť | Záhradkári Consulting" description="Vaša žiadosť o konzultáciu bola úspešne odoslaná. Ozveme sa vám do 24 hodín. Ďakujeme za váš záujem o naše služby.">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ďakujeme!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vaša žiadosť o konzultáciu bola úspešne odoslaná. 
              Ozveme sa vám do 24 hodín.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Čo bude nasledovať?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Spracovanie žiadosti</p>
                      <p className="text-sm text-muted-foreground">
                        Naši odborníci si preštudujú vašu žiadosť a pripravia sa na konzultáciu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Kontakt do 24 hodín</p>
                      <p className="text-sm text-muted-foreground">
                        Ozveme sa vám e-mailom alebo telefonicky pre dohodnutie termínu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Konzultácia</p>
                      <p className="text-sm text-muted-foreground">
                        Prvá konzultácia je zdarma a trvá 30 minút
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Pripravte si na konzultáciu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Fotografie vašej záhrady alebo problematických rastlín
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Zoznam otázok, ktoré chcete riešiť
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Informácie o pôde a orientácii záhrady
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    Vaše ciele a predstavy o záhrade
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              Zatiaľ si môžete prečítať naše články
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Kým čakáte na našu odpoveď, pozrite si užitočné tipy a rady v našich článkoch
            </p>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link to="/clanky">
                  Prečítať články
                </Link>
              </Button>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Potrebujete okamžitú pomoc?</h3>
              <p className="text-muted-foreground">
                Zavolajte nám na{" "}
                <a href="tel:+421905812334" className="text-primary font-medium hover:underline">
                  +421 905 812 334
                </a>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Späť na hlavnú stránku
                </Link>
              </Button>
              <Button asChild>
                <Link to="/cennik">
                  Pozrieť cenník služieb
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;