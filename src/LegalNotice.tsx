import { Navigation } from "./Navigation";

export const LegalNotice = () => {
  return (
    <>
      <head>
        <title>Impressum - Sarah Schülke</title>
      </head>
      <div className="bg-gray-200">
        <Navigation />
        <div className="container py-12 text-lg text-gray-700">
          <h1 className="font-serif text-5xl font-semibold">Impressum</h1>
          <h2 className="mt-6 font-serif text-2xl font-semibold">
            Unser Angebot enthält
          </h2>
          <p className="mt-2 max-w-[70ch]">
            Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
            keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
            permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
            ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>
          <h2 className="mt-6 font-serif text-2xl font-semibold">
            Urheberrecht
          </h2>
          <p className="mt-2 max-w-[70ch]">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </>
  );
};
