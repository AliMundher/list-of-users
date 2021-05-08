import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="keywords" content="moon" />
                <meta name="description" content="site moon" />
            </Head>
            <div className="about">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Id exercitationem unde animi dolorum? Voluptatibus, libero
                    laborum sequi deleniti ducimus reprehenderit ab! Ex ratione
                    officia repellat labore eos laudantium sapiente necessitatibus
                    quod vitae perferendis! Provident voluptate recusandae enim, dolorem
                    culpa ex ipsum laudantium quibusdam sit asperiores repellat molestias
                    iure voluptas iusto?
                </p>
            </div>
        </>
    );
}

export default About;