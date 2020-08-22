import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ games }) {

  // const games = [
  //   { position: 1, title: 'The Witcher 3 - Wild Hunt', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51FdXnfNj6L.jpg' },
  //   { position: 2, title: 'The Legend of Zelda - Ocarina of Time', imageUrl: 'https://img.elo7.com.br/product/zoom/278956B/big-poster-the-legend-of-zelda-ocarina-of-time-lo01-90x60-cm-poster-de-jogos.jpg' },
  //   { position: 3, title: 'Dragon Age Inquisition', imageUrl: 'https://cdn-products.eneba.com/resized-products/gUCes7X_390x400_1x-0.jpg' },
  // ]


  return (
    <div className={styles.container}>
      <Head>
        <title>My Favorite Games</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is my favorite games! 🎮
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
        </p> */}

        <div className={styles.grid}>
          {
            games && games.map(( game, index ) => (
              <a href={game.reviewUrl} target="_blank" className={styles.card} key={index}>
                <h3>
                  { game.position === '1' && "🥇 "} 
                  { game.position === '2' && "🥈 "} 
                  { game.position === '3' && "🥉 "} 

                  { game.name } 
                </h3>
                <img src={game.imageUrl} alt="Imagem do jogo"/>
              </a>
            ))
          }
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Vinicius-Rosa"
          target="_blank"
        >
          Developed by @Vinicius-Rosa 😎
        </a>
      </footer>
    </div>
  )
}
