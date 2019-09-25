import Layout from '../../comps/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
        <Layout>
        <h1>{ props.show.name }</h1>
        <p>{ props.show.summary.replace(/<[/]?p>/g, '') }</p>
        <img src={props.show.image.medium} />
        </Layout>
        
);

