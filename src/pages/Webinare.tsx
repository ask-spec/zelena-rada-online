import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Download } from "lucide-react";

const Webinare = () => {
  const webinars = [
    {
      title: "Príprava záhrady na jar",
      description: "Kompletný sprievodca jarnou prípravou záhrady od A po Z",
      date: "15. marec 2024",
      time: "19:00 - 20:30",
      price: "25€",
      participants: "max 50",
      status: "upcoming"
    },
    {
      title: "Výsadba a starostlivosť o rajčiny",
      description: "Všetko o pestovaní zdravých a chutných rajčín",
      date: "22. marec 2024", 
      time: "19:00 - 20:00",
      price: "20€",
      participants: "max 30",
      status: "upcoming"
    },
    {
      title: "Kompostovanie pre začiatočníkov",
      description: "Ako vytvoriť kvalitný kompost z domáceho odpadu",
      date: "5. apríl 2024",
      time: "18:00 - 19:00", 
      price: "15€",
      participants: "max 40",
      status: "upcoming"
    }
  ];

  const checklists = [
    {
      title: "Jarná kontrola záhrady - Checklist",
      description: "Detailný zoznam všetkých úloh pre jarnú prípravu záhrady",
      pages: "12 strán",
      price: "8€",
      includes: ["Časový harmonogram", "Kontrolné body", "Odporúčané nástroje"]
    },
    {
      title: "Výsadba zeleniny - Kalendár a checklist", 
      description: "Presný harmonogram výsadby zeleniny pre slovenské podmienky",
      pages: "16 strán",
      price: "10€",
      includes: ["Mesačný kalendár", "Druhy zeleniny", "Pestovateľské tipy"]
    },
    {
      title: "Ochrana rastlín - Preventívny checklist",
      description: "Ako chrániť rastliny pred škodcami a chorobami",
      pages: "14 strán", 
      price: "9€",
      includes: ["Identifikácia problémov", "Prírodné riešenia", "Preventívne opatrenia"]
    }
  ];

  return (
    <Layout title="Webináre a checklisty | Záhradkári Consulting" description="Online webináre o záhradkárstve a užitočné PDF checklisty. Profesionálne vzdelávanie pre záhradkárov všetkých úrovní.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Webináre a <span className="text-primary">checklisty</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Vzdelávajte sa pohodlne z domu s našimi online webinármi a praktickými 
            checklistami pre každú záhradkársku sezónu.
          </p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nadchádzajúce webináre</h2>
            <p className="text-lg text-muted-foreground">
              Pripojte sa k našim živým online vzdelávacím podujatiam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Live webinár</Badge>
                    <span className="text-lg font-bold text-primary">{webinar.price}</span>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                  <CardDescription>{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.participants}
                    </div>
                  </div>
                  <Button className="w-full">
                    Registrovať sa
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Checklists */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">PDF Checklisty</h2>
            <p className="text-lg text-muted-foreground">
              Praktické príručky a checklisty na stiahnutie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklists.map((checklist, index) => (
              <Card key={index} className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Badge>
                    <span className="text-lg font-bold text-primary">{checklist.price}</span>
                  </div>
                  <CardTitle className="text-lg">{checklist.title}</CardTitle>
                  <CardDescription>{checklist.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    📄 {checklist.pages}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Obsahuje:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {checklist.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="outline">
                    Kúpiť a stiahnuť
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nezmeškajte žiadny webinár
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Prihláste sa na odber noviniek a budete medzi prvými, ktorí sa dozvedia o nových webinároch a checklistoch.
          </p>
          <Button size="lg" className="shadow-lg">
            Prihlásiť sa na novinky
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Webinare;