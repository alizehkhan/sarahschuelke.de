import { Navigation } from "../components/Navigation";

export const Privacy = () => {
  return (
    <>
      <head>
        <title>Datenschutz - Sarah Schülke</title>
      </head>
      <div className="bg-gray-200">
        <Navigation />
        <div className="container py-12 text-lg text-gray-700">
          <div className="max-w-[70ch]">
            <h1 className="font-serif text-5xl font-semibold">Datenschutz</h1>
            <h2 className="mt-6 font-serif text-2xl font-semibold">
              1. Allgemeines
            </h2>
            <p className="mt-2">
              Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Ich
              behandle Ihre Daten vertraulich und entsprechend der
              Datenschutz-Grundverordnung (DSGVO).
            </p>
            <h2 className="mt-6 mb-2 font-serif text-2xl font-semibold">
              2. Verantwortliche Stelle
            </h2>
            <p>Sarah Schülke, Helmholtzstraße 37, 10587 Berlin</p>
            <p>kontakt@sarahschuelke.de</p>
            <p>www.sarahschuelke.de</p>
            <p>+49 (0) 151 50300058</p>
            <p className="mt-2">Redaktionell verantwortlich: Sarah Schülke</p>
            <h2 className="mt-6 mb-2 font-serif text-2xl font-semibold">
              3. Hosting
            </h2>
            <p>
              Diese Website wird gehostet von Vercel (USA). Technische Daten wie
              IP-Adresse, Datum/Uhrzeit, Browser, Betriebssystem und aufgerufene
              Seiten werden automatisch gespeichert, um den sicheren Betrieb der
              Website zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-2">
              Weitere Informationen:
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="ml-1 underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
            <h2 className="mt-6 mb-2 font-serif text-2xl font-semibold">
              4. Website-Analyse
            </h2>
            <p>
              Diese Website verwendet Vercel Analytics, um zu verstehen, wie
              Besucher die Website nutzen, und um Inhalte und Services zu
              verbessern. Folgende Informationen können aggregiert und
              anonymisiert erfasst werden:
            </p>
            <ul className="my-2 list-disc space-y-1 pl-8">
              <li>Besuchte Seiten</li>
              <li>Referrer-Website</li>
              <li>Gerätetyp und Browser</li>
              <li>Ungefähre geografische Region</li>
              <li>Anzahl der Besuche und</li>
              <li>Seitenaufrufe</li>
            </ul>
            <p>
              Vercel Analytics verwendet keine Cookies und erstellt keine
              persönlichen Nutzerprofile.
            </p>
            <p className="mt-2">Rechtsgrundlage: Art.6 Abs.1 lit.f DSGVO.</p>
            <p className="mt-2">
              Weitere Informationen:{" "}
              <a href="https://vercel.com/analytics" className="ml-1 underline">
                https://vercel.com/analytics
              </a>
            </p>
            <h2 className="mt-6 mb-2 font-serif text-2xl font-semibold">
              5. Kontakt
            </h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
              angegebenen Daten nur zum Zweck der Bearbeitung Ihrer Anfrage
              verarbeitet (Art.6 Abs.1 lit.b/f DSGVO). Eine Weitergabe an Dritte
              erfolgt nur, wenn gesetzlich vorgeschrieben.
            </p>
            <h2 className="mt-6 mb-2 font-serif text-2xl font-semibold">
              6. SSL / TLS
            </h2>
            <p>
              Diese Website nutzt SSL/TLS-Verschlüsselung, erkennbar an https://
              und dem Schloss-Symbol im Browser, um die Übertragung von Daten zu
              schützen.
            </p>
            <h2 className="mt-6 mb-2 font-serif text-2xl font-semibold">
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben nach der DSGVO folgende Rechte: Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch. Beschwerden können Sie bei der Aufsichtsbehörde
              einreichen: Berliner Beauftragte für Datenschutz und
              Informationsfreiheit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
