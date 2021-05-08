
// Get on all paths
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(p => {
        return {
            params: { id: p.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

// Get one only info
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }
}

const Details = ({ user }) => {
    return (
        <div>
            <h2>Details</h2>
            <h2>{user.name}</h2>
        </div>
    );
}

export default Details;