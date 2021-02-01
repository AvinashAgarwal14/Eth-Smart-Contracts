import Header from './header';
import Head from 'next/head';
import {Container} from 'semantic-ui-react';

export default (props) => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />
            </Head>
            <Header/>
            {props.children}
        </Container>
    )
};