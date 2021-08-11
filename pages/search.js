import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();

  //console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Divoogle Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export default Search;
export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  //after the server has rendered... pass result to client side
  return {
    props: {
      results: data,
    },
  };
}
