import getData from "../utils/getData"
import useSWR from "swr"

export default function IndexPage({ initialData }) {
  const { data } = useSWR("/api/data", { initialData, revalidateOnMount: true })

  const { origin, time } = data

  return (
    <>
      <h1>Hello from {origin}!</h1>
      <p>{time}</p>
    </>
  )
}

// If your data only changes infrequently, you could use getStaticProps here instead with a refresh interval
export async function getServerSideProps() {
  const initialData = await getData("getServerSideProps")

  return { props: { initialData } }
}
