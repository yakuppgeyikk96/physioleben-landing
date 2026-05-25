import { CONTACT } from "@/constants/contact";

export default function Datenschutz() {
  return (
    <main className="flex-1 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary-900 mb-10">
          Datenschutzerklärung
        </h1>

        <div className="flex flex-col gap-8 text-primary-700/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-primary-800 mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="mt-2">
              Physioleben
              <br />
              {CONTACT.address}
              <br />
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              3. Datenerfassung auf unserer Website
            </h2>
            <h3 className="font-semibold text-primary-800 mb-2">
              Server-Log-Dateien
            </h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage und
              IP-Adresse.
            </p>
            <h3 className="font-semibold text-primary-800 mb-2">
              Kontaktaufnahme
            </h3>
            <p>
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              4. SSL-/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine
              SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile. Wenn die SSL-/TLS-Verschlüsselung aktiviert ist,
              können die Daten, die Sie an uns übermitteln, nicht von Dritten
              mitgelesen werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              5. Google Maps
            </h2>
            <p>
              Diese Seite nutzt über eine Einbindung (iframe) den Kartendienst
              Google Maps. Anbieter ist die Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland. Durch die Nutzung von Google Maps
              können Informationen über Ihre Benutzung dieser Website
              (einschließlich Ihrer IP-Adresse) an einen Server von Google in
              den USA übertragen und dort gespeichert werden. Weitere
              Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-500 hover:text-secondary-600 underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
              uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              7. Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h2>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
              jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
              E-Mail an{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-secondary-500 hover:underline"
              >
                {CONTACT.email}
              </a>
              . Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              8. Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h2>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die
              zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              die Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen (LDI NRW).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              9. Speicherdauer
            </h2>
            <p>
              Sofern innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Die Speicherdauer von Server-Log-Dateien richtet sich nach den
              Vorgaben unseres Hosting-Anbieters. Wenn Sie uns per Telefon,
              E-Mail oder WhatsApp kontaktieren, werden Ihre Daten (z.&nbsp;B.
              Name, Kontaktdaten, Inhalt der Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens gespeichert und nach Abschluss des Vorgangs
              gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
              bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              10. Cookies
            </h2>
            <p>
              Unsere Website verwendet keine eigenen Cookies. Durch die
              Einbindung von Google Maps können jedoch Cookies von Google gesetzt
              werden. Nähere Informationen dazu finden Sie in Abschnitt 4 dieser
              Datenschutzerklärung.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
