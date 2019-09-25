    import Layout from '../comps/MyLayout';
    import Link from 'next/link';


const Index = props => (
    <Layout>
        <h1> Batman tv shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show the data fetched. Count ${data.length}`);
}




export default Index;
