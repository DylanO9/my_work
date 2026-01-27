import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../css/index.module.css'; // make sure this file exists

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A hub for my CSAPP labs, notes, and reflections">
      
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome 👋</h1>

        <p className={styles.description}>
          This site is a collection of my personal work, notes, and reflections on systems, CSAPP labs, and projects I’ve worked on.
          It’s a space for me to organize what I learn and share insights.
        </p>

        <section className={styles.section}>
          <h2>Explore</h2>
          <ul>
            <li><Link to="/docs/csapp/labs/index">CSAPP Labs</Link></li>
            <li><Link to="/docs/csapp/concepts/index">Concepts & Notes</Link></li>
            <li><Link to="/blog">Blog / Reflections</Link></li>
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.footerNote}>
            This is a work-in-progress hub — I update it as I explore systems and low-level CS concepts.
          </p>
        </section>
      </main>
    </Layout>
  );
}
