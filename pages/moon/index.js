import Head from 'next/head';
import styles from '../../styles/listusers.module.css';
import Link from 'next/link';

// this function fire before this component
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}

const Ninja = ({ users }) => {
    return (
        <>
            <Head>
                <title>Ninja List</title>
                <meta name="keywords" content="moon" />
                <meta name="description" content="site moon" />
            </Head>
            <div className="list-ninja">
                <h1>All Ninja</h1>
                {
                    users && users.map(user => (
                        <div key={user.id} className={styles.single}>
                            <Link href={'/moon/' + user.id}>
                                <h3>{user.username}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
}



export default Ninja;