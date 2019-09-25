    import Layout from '../comps/MyLayout';
    import Link from 'next/link';


const PostLink = props => (
    <li>
        {/* <Link href={`/post?title=${props.title}`}> Dynamic but not flexible */}
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a> { props.id } </a>
        </Link>
    </li>
)

export default function BLog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="Hello next.js" />
                <PostLink id="Next Js is awesome" />
                <PostLink id="Deploy apps with Zeit" />
            </ul>
        </Layout>
    )
}

