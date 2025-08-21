import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Clanky = () => {
  const articles = [
    {
      title: "10 najčastejších chýb začínajúcich záhradkárov",
      excerpt: "Vyhnite sa týmto častým chybám a ušetríte si čas, peniaze a frustráciu pri pestovaní.",
      category: "Začiatočníci",
      readTime: "5 min čítania",
      date: "8. marec 2024",
      image: "/placeholder-garden-1.jpg"
    },
    {
      title: "Ako pripraviť záhradu na jar: Kompletný sprievodca",
      excerpt: "Detailný návod na prípravu záhrady na jarnú sezónu. Od čistenia po výsadbu prvých rastlín.",
      category: "Sezónne",
      readTime: "8 min čítania", 
      date: "5. marec 2024",
      image: "/placeholder-spring.jpg"
    },
    {
      title: "Kompostovanie: Premeňte odpad na čiernu záhradnú zlať",
      excerpt: "Všetko o kompostovaní - od základov až po pokročilé techniky pre zdravú pôdu.",
      category: "Ekológia",
      readTime: "6 min čítania",
      date: "28. február 2024", 
      image: "/placeholder-compost.jpg"
    },
    {
      title: "Prirodzená ochrana rastlín bez chémie",
      excerpt: "Efektívne prírodné metódy ochrany vašich rastlín pred škodcami a chorobami.",
      category: "Ochrana rastlín",
      readTime: "7 min čítania",
      date: "25. február 2024",
      image: "/placeholder-protection.jpg"
    },
    {
      title: "Výsadba rajčín: Od semienka po úrodu",
      excerpt: "Kompletný návod na pestovanie zdravých a chutných rajčín vo vašej záhrade.",
      category: "Zelenina",
      readTime: "10 min čítania",
      date: "22. február 2024",
      image: "/placeholder-tomatoes.jpg"
    },
    {
      title: "Zavlažovanie záhrady: Efektívne metódy šetrenia vody",
      excerpt: "Moderné techniky zavlaľovania, ktoré ušetria vodu a zlepšia zdravie vašich rastlín.",
      category: "Zavlaľovanie",
      readTime: "6 min čítania",
      date: "18. február 2024",
      image: "/placeholder-watering.jpg"
    }
  ];

  const categories = [
    "Všetky články",
    "Začiatočníci", 
    "Sezónne",
    "Zelenina",
    "Ochrana rastlín",
    "Ekológia",
    "Zavlaľovanie"
  ];

  return (
    <Layout title="Články o záhradkárstve | Záhradkári Consulting" description="Užitočné články a rady o záhradkárstve. Praktické tipy pre začiatočníkov aj pokročilých záhradkárov. Bezplatné záhradkárske poradenstvo.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Záhradkárske <span className="text-primary">články</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Praktické rady, tipy a triky pre úspešné záhradkárčenie. 
            Od základov až po pokročilé techniky.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"} 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Obrázok článku</div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Čítať viac
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Načítať viac článkov
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nezmeškajte nové články
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Prihláste sa na odber noviniek a dostávajte najnovšie záhradkárske rady priamo do vašej e-mailovej schránky.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Váš email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Prihlásiť sa
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clanky;