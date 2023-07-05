import ExternalLink from "@/components/ExternalLink";

export default function Home() {
  return (
    <main>
      <section>
        <h3>Links</h3>
        <ul>
          <ExternalLink
            label="GitHub"
            href="https://github.com/carlosestrada94"
          />
          <ExternalLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/carlos-estrada-42a0851b5/"
          />
          <ExternalLink label="See my CV" href="/cv/cv_carlos-estrada.pdf" />
        </ul>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <ExternalLink label="Maca Acuña" href="https://macaaol.com/" />
          <ExternalLink
            label="Eighty Store"
            href="https://www.eightystore.co/"
          />
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="mailto:carlosestrada94@outlook.com">
              carlosestrada94@outlook.com
            </a>
          </li>
          <li>
            <a href="tel:573502606243">+57 350 2606243</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
