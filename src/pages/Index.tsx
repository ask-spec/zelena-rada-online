import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Clock, Award, ArrowRight, Leaf } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Bezplatná konzultácia",
      description: "Prvá 30-minútová konzultácia úplne zdarma",
      features: ["Osobný prístup", "Odborné rady", "Bez záväzkov"],
      price: "0€"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mesačný balíček",
      description: "Pravidelná podpora pre vašu záhradu",
      features: ["3 konzultácie", "Video podpora", "Všetky webináre"],
      price: "49€/mesiac"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium služby",
      description: "Komplexné záhradkárske poradenstvo",
      features: ["Neobmedzené konzultácie", "Individuálny plán", "24/7 podpora"],
      price: "99€/mesiac"
    }
  ];

  const testimonials = [
    {
      name: "Mária K.",
      location: "Bratislava",
      text: "Vďaka konzultácii s Janou sa mi konečne podarilo vypestovať zdravé rajčiny. Prvá konzultácia zdarma ma presvedčila o kvalite ich služieb.",
      rating: 5
    },
    {
      name: "Peter H.", 
      location: "Košice",
      text: "Webinár o kompostovaní bol fantastický! Jasné vysvetlenie a praktické tipy, ktoré som hneď aplikoval vo svojej záhrade.",
      rating: 5
    },
    {
      name: "Jana N.",
      location: "Žilina", 
      text: "Mesačný balíček mi úplne zmenil pohľad na záhradkárčenie. Teraz mám krásnu záhradu a viem, čo robím.",
      rating: 5
    }
  ];

  return (
    <Layout title="Záhradkári Consulting - Profesionálne záhradkárske poradenstvo online" description="Profesionálne online záhradkárske konzultácie na Slovensku. Prvá konzultácia zdarma. Webináre, checklisty a odborné poradenstvo pre všetky typy záhrad.">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-sage/30 to-earth-light/20 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                ✨ Prvá konzultácia zdarma
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Vaša záhrada,
                <span className="text-primary block">naše expertízy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Získajte profesionálne záhradkárske poradenstvo od certifikovaných expertov. 
                Online konzultácie, praktické webináre a užitočné materiály pre úspešné záhradkárčenie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Bezplatná konzultácia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/cennik">Pozrieť cenník</Link>
                </Button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">2000+ spokojných klientov</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">98% spokojnosť</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-sage/30 rounded-3xl flex items-center justify-center">
                <div className="text-primary text-6xl">🌱</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background border-2 border-primary/20 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">5000+</div>
                    <div className="text-sm text-muted-foreground">Hodín konzultácií</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Naše služby
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Od bezplatnej konzultácie až po komplexné záhradkárske poradenstvo. 
              Vyberte si službu, ktorá vyhovuje vašim potrebám.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`h-full relative ${index === 1 ? 'border-2 border-primary shadow-xl' : 'hover:shadow-lg'} transition-all`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Najpopulárnejšie
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    {index === 0 ? "Začať zdarma" : "Vybrať balíček"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Prečo si vybrať nás?
            </h2>
            <p className="text-xl text-muted-foreground">
              Profesionálne poradenstvo, ktorému dôverujú tisíce záhradkárov
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certifikovaní experti",
                description: "Naš tím má viac ako 35 rokov spoločných skúseností"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rýchla odozva",
                description: "Odpoveď na vaše otázky do 24 hodín"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Individuálny prístup",
                description: "Každá záhrada je jedinečná, naše rady tiež"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Ekologické metódy",
                description: "Podporujeme trvalo udržateľné záhradkárčenie"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Čo hovoria naši klienti
            </h2>
            <p className="text-xl text-muted-foreground">
              Skutočné recenzie od spokojných záhradkárov
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-sage/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Začnite svoju cestu k dokonalej záhrade
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Prvá konzultácia je úplne zdarma. Žiadne záväzky, len užitočné rady 
            od našich expertov.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
              <Link to="/kontakt">Bezplatná konzultácia</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/o-nas">Spoznať náš tím</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
