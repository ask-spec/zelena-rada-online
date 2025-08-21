import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Z</span>
              </div>
              <span className="font-bold text-lg">Záhradkári</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Zahradkari Consulting s.r.o.</p>
              <p>IČO: 54 893 221</p>
              <p>DIČ: 2121748391</p>
              <p>Račianska 153, 831 54 Bratislava</p>
              <p>Slovensko</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Služby</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sluzby" className="hover:text-foreground transition-colors">Online konzultácie</Link></li>
              <li><Link to="/webinare" className="hover:text-foreground transition-colors">Webináre</Link></li>
              <li><Link to="/webinare" className="hover:text-foreground transition-colors">Checklisty</Link></li>
              <li><Link to="/cennik" className="hover:text-foreground transition-colors">Cenník</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Informácie</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/clanky" className="hover:text-foreground transition-colors">Články</Link></li>
              <li><Link to="/novinky" className="hover:text-foreground transition-colors">Novinky</Link></li>
              <li><Link to="/o-nas" className="hover:text-foreground transition-colors">O nás</Link></li>
              <li><Link to="/kontakt" className="hover:text-foreground transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 +421 905 812 334</p>
              <p>✉️ info@zahradkari.xyz</p>
              <p>🌐 zahradkari.xyz</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Zahradkari Consulting s.r.o. Všetky práva vyhradené.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/politika-cookies" className="hover:text-foreground transition-colors">Politika cookies</Link>
              <Link to="/gdpr" className="hover:text-foreground transition-colors">GDPR</Link>
              <Link to="/obchodne-podmienky" className="hover:text-foreground transition-colors">Obchodné podmienky</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;