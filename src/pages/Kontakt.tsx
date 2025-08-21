import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Kontakt = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    meno: "",
    email: "",
    telefon: "",
    typ_konzultacie: "",
    preferovany_cas: "",
    sprava: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulácia odoslania formulára
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Formulár bol úspešne odoslaný",
        description: "Ďakujeme za váš záujem. Ozveme sa vám do 24 hodín.",
      });

      // Presmerovanie na thank you stránku
      navigate("/dakujeme");
    } catch (error) {
      toast({
        title: "Chyba pri odosielaní",
        description: "Skúste to prosím znova alebo nás kontaktujte telefonicky.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefón",
      content: "+421 905 812 334",
      description: "Po-Pia: 9:00-18:00, So-Ne: 10:00-16:00"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email", 
      content: "info@zahradkari.xyz",
      description: "Odpoveď do 24 hodín"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresa",
      content: "Račianska 153, 831 54 Bratislava",
      description: "Slovensko"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Konzultačné hodiny",
      content: "Pondelok - Nedeľa",
      description: "Flexibilné termíny podľa dohody"
    }
  ];

  return (
    <Layout title="Kontakt - Rezervácia konzultácie | Záhradkári Consulting" description="Kontaktujte nás pre záhradkárske poradenstvo. Telefón: +421 905 812 334, email: info@zahradkari.xyz. Prvá konzultácia zdarma.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-sage/20 to-earth-light/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Spojte sa s <span className="text-primary">nami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Máte otázky o vašej záhrade? Chcete si rezervovať konzultáciu? 
            Sme tu pre vás a radi vám pomôžeme.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktný formulár</CardTitle>
                  <CardDescription>
                    Vyplňte formulár a my sa vám ozveme do 24 hodín. 
                    Prvá konzultácia je úplne zdarma.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="meno">Meno a priezvisko *</Label>
                        <Input
                          id="meno"
                          required
                          value={formData.meno}
                          onChange={(e) => handleInputChange("meno", e.target.value)}
                          placeholder="Vaše meno"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="vas.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefon">Telefón</Label>
                        <Input
                          id="telefon"
                          value={formData.telefon}
                          onChange={(e) => handleInputChange("telefon", e.target.value)}
                          placeholder="+421..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="typ_konzultacie">Typ konzultácie</Label>
                        <Select onValueChange={(value) => handleInputChange("typ_konzultacie", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Vyberte typ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bezplatna">Bezplatná konzultácia</SelectItem>
                            <SelectItem value="individualna">Individuálna konzultácia</SelectItem>
                            <SelectItem value="video">Video konzultácia</SelectItem>
                            <SelectItem value="skupinova">Skupinová konzultácia</SelectItem>
                            <SelectItem value="ine">Iné</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferovany_cas">Preferovaný čas konzultácie</Label>
                      <Select onValueChange={(value) => handleInputChange("preferovany_cas", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte preferovaný čas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rano">Ráno (9:00-12:00)</SelectItem>
                          <SelectItem value="poobede">Poobede (12:00-16:00)</SelectItem>
                          <SelectItem value="vecer">Večer (16:00-20:00)</SelectItem>
                          <SelectItem value="vikend">Víkend</SelectItem>
                          <SelectItem value="flexibilny">Flexibilný</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sprava">Opíšte váš záhradkársky problém alebo otázku</Label>
                      <Textarea
                        id="sprava"
                        value={formData.sprava}
                        onChange={(e) => handleInputChange("sprava", e.target.value)}
                        placeholder="Napríklad: Mám problém s rajčinami, listy žltnú a neviem prečo. Záhrada je južne orientovaná, pôda je ílovitá..."
                        rows={5}
                      />
                    </div>

                    <div className="text-sm text-muted-foreground">
                      * Povinné polia. Odoslaním formulára súhlasíte s{" "}
                      <a href="/gdpr" className="text-primary hover:underline">
                        spracovaním osobných údajov
                      </a>
                      .
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Odosielajeme..." : "Odoslať žiadosť"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktné informácie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Firemné údaje</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Zahradkari Consulting s.r.o.</strong></p>
                  <p>IČO: 54 893 221</p>
                  <p>DIČ: 2121748391</p>
                  <p>Račianska 153</p>
                  <p>831 54 Bratislava</p>
                  <p>Slovensko</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-primary mb-2">💡 Tip:</h4>
                  <p className="text-sm text-muted-foreground">
                    Pripravte si pred konzultáciou fotografie vašej záhrady alebo 
                    problematických rastlín. Pomôže nám to poskytnúť presnejšie rady.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;