import Head from 'next/head';
import Link from 'next/link';

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Sign Up | Stoxly</title>
            </Head>
            <div style={styles.container}>
                <div style={styles.card}>
                    <h2 style={styles.title}>Create Your Account</h2>
                    <input type="text" placeholder="Name" style={styles.input} />
                    <input type="email" placeholder="Email" style={styles.input} />
                    <input type="password" placeholder="Password" style={styles.input} />
                    <input type="password" placeholder="Confirm Password" style={styles.input} />

                    <div style={styles.termsContainer}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms" style={styles.termsText}>
                            I agree to the{' '}
                            <Link href="/terms" target="_blank" style={styles.link}>
                                Terms and Conditions
                            </Link>
                        </label>
                    </div>

                    <button style={styles.button}>Sign Up</button>
                    <p style={{ marginTop: '1rem' }}>
                        Already have an account? <Link href="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        width: '350px',
    },
    title: {
        color: '#3342fa',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    input: {
        display: 'block',
        width: '100%',
        marginTop: '1rem',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
    button: {
        marginTop: '1.5rem',
        background: '#3342fa',
        color: '#fff',
        border: 'none',
        padding: '0.75rem',
        width: '100%',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    termsContainer: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.85rem',
        marginTop: '1rem',
        textAlign: 'left',
    },
    termsText: {
        marginLeft: '0.5rem',
    },
    link: {
        color: '#3342fa',
        textDecoration: 'underline',
    },
};
