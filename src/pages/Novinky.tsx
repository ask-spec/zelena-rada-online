import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Megaphone } from "lucide-react";

const Novinky = () => {
  const news = [
    {
      title: "Nové jarné webináre už sú dostupné!",
      content: "Pridali sme tri nové webináre zamerané na jarnú prípravu záhrady. Registrácia je už otvorená s ranným zľavovým pricingom.",
      date: "10. marec 2024",
      type: "Webináre",
      important: true
    },
    {
      title: "Rozšírenie konzultačných hodín",
      content: "Od marca rozširujeme naše konzultačné hodiny aj na víkendy. Teraz môžete rezervovať konzultácie aj v sobotu a nedeľu od 9:00 do 17:00.",
      date: "8. marec 2024", 
      type: "Služby",
      important: false
    },
    {
      title: "Nový checklist: Výsadba byliniek",
      content: "Vydali sme komplexný 18-stranový checklist pre výsadbu a starostlivosť o bylinky. Ideálny pre začiatočníkov aj pokročilých.",
      date: "5. marec 2024",
      type: "Materiály",
      important: false
    },
    {
      title: "Partnerstvo s miestnymi škôlkami",
      content: "Nadviazali sme partnerstvo s vybranými škôlkami na Slovensku. Naši klienti získajú exkluzívne zľavy na sadivo a nástroje.",
      date: "28. február 2024",
      type: "Partnerstvo", 
      important: false
    },
    {
      title: "Zimný odpočinok a plánovanie",
      content: "Aj keď je zima, je to ideálny čas na plánovanie novej sezóny. Pripravili sme pre vás špeciálny sprievodca zimným plánovaním záhrady.",
      date: "15. február 2024",
      type: "Rady",
      important: false
    },
    {
      title: "Nová mobilná aplikácia v príprave", 
      content: "Pracujeme na mobilnej aplikácii, ktorá vám umožní jednoduchšie rezervovať konzultácie a pristupovať k vašim materiálom.",
      date: "10. február 2024",
      type: "Technológie",
      important: false
    }
  ];

  const upcomingEvents = [
    {
      title: "Jarný záhradkársky deň",
      date: "30. marec 2024",
      location: "Bratislava - Botanická záhrada",
      description: "Celodenné podujatie s prednáškami, workshopmi a možnosťou osobných konzultácií."
    },
    {
      title: "Online Q&A session",
      date: "25. marec 2024", 
      location: "Online",
      description: "Živá diskusia s našimi expertmi. Pýtajte sa na čokoľvek týkajúce sa záhradkárstva."
    }
  ];

  return (
    <Layout title="Novinky a oznámenia | Záhradkári Consulting" description="Najnovšie novinky zo sveta záhradkárstva. Informácie o nových službách, webinároch a užitočných materiáloch pre záhradkárov.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Novinky a <span className="text-primary">oznámenia</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Držte sa v obraze o najnovších záhradkárskych trendoch, 
            našich nových službách a užitočných tipoch.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Najnovšie správy</h2>
            <p className="text-lg text-muted-foreground">
              Zostante informovaní o všetkom dôležitom
            </p>
          </div>
          
          <div className="space-y-6">
            {news.map((item, index) => (
              <Card key={index} className={`${item.important ? 'border-l-4 border-l-primary shadow-md' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      {item.important && <Megaphone className="w-5 h-5 text-primary" />}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={item.important ? "default" : "secondary"}>
                            {item.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {item.content}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Zobraziť starší archív
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nadchádzajúce podujatia</h2>
            <p className="text-lg text-muted-foreground">
              Nezmeškajte tieto dôležité termíny
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Podujatie</Badge>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2 text-center">📍</span>
                      {event.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Viac informácií
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Prihláste sa na odber noviniek
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dostávajte najnovšie informácie priamo do vašej e-mailovej schránky. 
            Bez spamu, len užitočný obsah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Váš email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Prihlásiť sa
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Vaše údaje sú v bezpečí. Môžete sa odhlásiť kedykoľvek.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Novinky;