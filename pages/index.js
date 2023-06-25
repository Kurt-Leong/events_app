import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        {data.map((event) => (
          <a key={event.id} href={`events/${event.id}`}>
            <Image
              width={200}
              height={100}
              alt={event.title}
              src={event.image}
            />
            <h2>{event.title}</h2> <p>{event.description}</p>
          </a>
        ))}
        <a href="/events/london">
          <img />
          <h2>Events in London</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada quis ligula nec faucibus. Mauris a dignissim est, nec
            finibus turpis. Donec ipsum massa, maximus in lacus posuere,
            placerat imperdiet ipsum. Praesent elementum pharetra purus ut
            lacinia. Suspendisse in dignissim velit. Nunc nunc nisl, hendrerit a
            volutpat sit amet, tincidunt ac sapien. Nullam quis felis fermentum
            ante rutrum ullamcorper. Sed mollis ut sem rutrum venenatis.
          </p>
        </a>
        <a href="/events/san-francisco">
          <img />
          <h2>Events in San Francisco</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada quis ligula nec faucibus. Mauris a dignissim est, nec
            finibus turpis. Donec ipsum massa, maximus in lacus posuere,
            placerat imperdiet ipsum. Praesent elementum pharetra purus ut
            lacinia. Suspendisse in dignissim velit. Nunc nunc nisl, hendrerit a
            volutpat sit amet, tincidunt ac sapien. Nullam quis felis fermentum
            ante rutrum ullamcorper. Sed mollis ut sem rutrum venenatis.
          </p>
        </a>
        <a href="/events/barcelona">
          <img />
          <h2>Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            malesuada quis ligula nec faucibus. Mauris a dignissim est, nec
            finibus turpis. Donec ipsum massa, maximus in lacus posuere,
            placerat imperdiet ipsum. Praesent elementum pharetra purus ut
            lacinia. Suspendisse in dignissim velit. Nunc nunc nisl, hendrerit a
            volutpat sit amet, tincidunt ac sapien. Nullam quis felis fermentum
            ante rutrum ullamcorper. Sed mollis ut sem rutrum venenatis.
          </p>
        </a>
      </main>
      <footer>
        <p>© 2023. project with Next.JS All rights reserved.</p>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('data/data.json')
  console.log(events_categories)

  return {
    props: {
      data: events_categories,
    },
  }
}
