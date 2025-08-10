import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate user login
        if (email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email); // optional
            router.push('/dashboard');
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <>
            <Head>
                <title>Login | Stoxly</title>
            </Head>
            <div style={styles.container}>
                <div style={styles.card}>
                    <Image
                        src="/stoxly-logo.png"
                        alt="Stoxly Logo"
                        width={50}
                        height={50}
                        style={{ marginBottom: '1rem' }}
                        unoptimized
                    />
                    <h2>Welcome Back</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                        <button type="submit" style={styles.button}>Log in</button>
                    </form>
                    <p style={{ marginTop: '1rem' }}>
                        Don’t have an account? <Link href="/signup">Sign up</Link>
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
        width: '300px',
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
        marginTop: '1rem',
        background: '#3342fa',
        color: '#fff',
        border: 'none',
        padding: '0.75rem',
        width: '100%',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};
