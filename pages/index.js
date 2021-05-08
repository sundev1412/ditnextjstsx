import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I tech Web Site Design and Development and Mobile Development</p>
        <p>
          Contact us
          <a href="http://as.ksu.ac.th">
            Department of Digital Technology Administrative Science Kalasin
            University
          </a>
        </p>
      </section>
    </Layout>
  );
}
