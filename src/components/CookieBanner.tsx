import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">🍪 Používame súbory cookie</h3>
              <p className="text-sm text-muted-foreground">
                Používame súbory cookie na zlepšenie vášho zážitku na našej webstránke. 
                Viac informácií nájdete v našej{" "}
                <Link to="/politika-cookies" className="text-primary hover:underline">
                  politike cookies
                </Link>
                {" "}a{" "}
                <Link to="/gdpr" className="text-primary hover:underline">
                  GDPR
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={rejectCookies}>
                Odmietnuť
              </Button>
              <Button size="sm" onClick={acceptCookies}>
                Súhlasím
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="p-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;