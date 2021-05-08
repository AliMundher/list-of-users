import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ooooooooooops!!</h2>
            <h3>this is page is not found</h3>
            <button className="btn_go">
                <Link href="/">go to home</Link>
            </button>
        </div>
    );
}

export default NotFound;