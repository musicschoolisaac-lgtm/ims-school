import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Your Beautiful Next.js Website!
        </h1>
        <p className={styles.description}>
          This is a simple, modern landing page built with Next.js and React. <br />
          Easily deploy to Vercel and customize to your needs.
        </p>
        <a href="https://vercel.com" target="_blank" rel="noopener" className={styles.button}>
          Get Started on Vercel
        </a>
      </main>
      <footer className={styles.footer}>
        © 2025 Your Name
      </footer>
    </div>
  );
}