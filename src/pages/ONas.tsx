import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const ONas = () => {
  const team = [
    {
      name: "Mgr. Jana Novákova",
      position: "Hlavná záhradkárska konzultantka", 
      experience: "15+ rokov",
      specialization: "Ekologické záhradkárstvo, permakultúra",
      education: "Záhradkárstvo a krajinná architektúra, SPU Nitra",
      bio: "Jana má viac ako 15 rokov skúseností v záhradkárskej oblasti. Špecializuje sa na ekologické metódy pestovania a trvalo udržateľné záhradkárstvo."
    },
    {
      name: "Ing. Peter Horný",
      position: "Konzultant pre choroby rastlín",
      experience: "12+ rokov", 
      specialization: "Ochrana rastlín, diagnostika chorôb",
      education: "Fytopatológia, Slovenská poľnohospodárska univerzita",
      bio: "Peter je expert na diagnostiku a liečbu chorôb rastlín. Pomáha záhradkárom riešiť najzložitejšie problémy s ich rastlinami."
    },
    {
      name: "Bc. Mária Zelená",
      position: "Konzultantka pre začiatočníkov",
      experience: "8+ rokov",
      specialization: "Základy záhradkárstva, výsadba zeleniny", 
      education: "Záhradkárstvo, Stredná záhradnícka škola Bratislava",
      bio: "Mária sa špecializuje na prácu so začínajúcimi záhradkármi. Jej trpezlivý prístup a jasné vysvetľovanie pomohli stovkám ľudí začať záhradkárčiť."
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "2000+", label: "Spokojných klientov" },
    { icon: <Clock className="w-6 h-6" />, number: "5000+", label: "Hodín konzultácií" },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Úspešných projektov" },
    { icon: <CheckCircle className="w-6 h-6" />, number: "98%", label: "Spokojnosť klientov" }
  ];

  const values = [
    {
      title: "Odbornosť",
      description: "Naši konzultanti majú overené vzdelanie a dlhoročné praktické skúsenosti v záhradkárstve."
    },
    {
      title: "Individuálny prístup", 
      description: "Každý záhradkár má iné potreby. Prispôsobujeme naše rady konkrétnym podmienkam a požiadavkám."
    },
    {
      title: "Dostupnosť",
      description: "Online konzultácie umožňujú získať pomoc bez ohľadu na to, kde sa nachádzate."
    },
    {
      title: "Udržateľnosť",
      description: "Propagujeme ekologické a trvalo udržateľné záhradkárske praktiky."
    }
  ];

  return (
    <Layout title="O nás - Náš tím expertov | Záhradkári Consulting" description="Spoznajte tím záhradkárskych expertov s viac ako 35-ročnými skúsenosťami. Profesionálne poradenstvo pre všetky typy záhrad a záhradkárov.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O <span className="text-primary">našom tíme</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sme skupina vášnivých záhradkárov a odborníkov s viac ako 35-ročnými 
            spojenými skúsenosťami, ktorí vám pomôžu vytvoriť záhradu vašich snov.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Náš príbeh</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Zahradkari Consulting s.r.o. vznikla v roku 2019 z vášne pre záhradkárstvo 
              a túžby zdieľať naše znalosti s ďalšími záhradkármi. Začínali sme ako malý 
              tím troch odborníkov, ktorí sa poznali zo štúdií na Slovenskej poľnohospodárskej univerzite.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Keď prišla pandémia v roku 2020, presunuli sme sa kompletne do online priestoru 
              a objavili sme, že takýto spôsob konzultovania je nielen efektívny, ale aj 
              dostupný pre ľudí z celého Slovenska. Od tej doby sme pomohli tisíckam záhradkárov 
              dosiahnuť ich ciele.
            </p>
            
            <p className="text-lg leading-relaxed">
              Dnes sme uznávaní experti v oblasti online záhradkárskeho poradenstva na Slovensku. 
              Naša misia je jasná: sprístupniť kvalitné záhradkárske vzdelanie a poradenstvo 
              každému, kto má chuť pestovať.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Náš tím expertov</h2>
            <p className="text-lg text-muted-foreground">
              Spoznajte ľudí, ktorí vám pomôžu s vašou záhradou
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-sage/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.position}</CardDescription>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Špecializácia:</h4>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Vzdelanie:</h4>
                    <p className="text-sm text-muted-foreground">{member.education}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Naše hodnoty</h2>
            <p className="text-lg text-muted-foreground">
              Princípy, ktoré nás vedú v každodennej práci
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Chcete sa stať súčasťou našej komunity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Začnite svoju cestu k dokonalej záhrade s našou bezplatnou konzultáciou
          </p>
          <Button size="lg" className="shadow-lg mr-4">
            Bezplatná konzultácia
          </Button>
          <Button variant="outline" size="lg">
            Kontaktujte nás
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ONas;