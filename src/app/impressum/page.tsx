import { CONTACT } from "@/constants/contact";

export default function Impressum() {
  return (
    <main className="flex-1 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary-900 mb-10">
          Impressum
        </h1>

        <div className="flex flex-col gap-8 text-primary-700/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Physioleben
              <br />
              {CONTACT.address}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Physioleben
              <br />
              {CONTACT.address}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              Vertreten durch
            </h2>
            <p>Halil Sari</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              Haftungsausschluss
            </h2>
            <h3 className="font-semibold text-primary-800 mb-2">
              Haftung für Inhalte
            </h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <h3 className="font-semibold text-primary-800 mb-2">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-900 mb-3">
              Bildnachweis
            </h2>
            <p className="mb-2">
              Die auf dieser Website verwendeten Bilder stammen von{" "}
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-500 hover:underline"
              >
                Pexels
              </a>
              :
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li>
                <a
                  href="https://www.pexels.com/photo/woman-in-white-dress-up-shirt-touching-the-back-of-knees-of-woman-in-white-t-shirt-5793651/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Foto von Anna Shvets
                </a>
              </li>
              <li>
                <a
                  href="https://www.pexels.com/photo/crop-osteopath-checking-up-arm-joint-of-unrecognizable-female-patient-4506072/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Foto von Karolina Kaboompics
                </a>
              </li>
              <li>
                <a
                  href="https://www.pexels.com/photo/patient-exercising-under-care-of-therapist-20860624/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:underline"
                >
                  Foto von Physio Roots
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
