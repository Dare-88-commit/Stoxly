import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function DashboardHome() {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <>
            <Head>
                <title>Dashboard | Stoxly</title>
            </Head>
            <div style={styles.container}>
                <aside style={styles.sidebar}>
                    <div style={styles.logoContainer}>
                        <Image src="/stoxly-logo.png" alt="Stoxly Logo" width={40} height={40} />
                        <span style={styles.brand}>Stoxly</span>
                    </div>
                    <nav style={styles.nav}>
                        <a style={styles.link} href="/dashboard">Dashboard</a>
                        <a style={styles.link} href="/dashboard/stocks">Stocks</a>
                        <a style={styles.link} href="/dashboard/sales">Sales</a>
                        <a style={styles.link} onClick={handleLogout}>Logout</a>
                    </nav>
                </aside>

                <main style={styles.main}>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Welcome to your Dashboard</h1>

                    <div style={styles.stats}>
                        <div style={styles.card}>📦 Total Stock: 0</div>
                        <div style={styles.card}>💰 Total Sales: ₦0</div>
                        <div style={styles.card}>📈 Profit: ₦0</div>
                    </div>
                </main>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        background: '#f4f6fa',
    },
    sidebar: {
        width: '220px',
        background: '#3342fa',
        color: '#fff',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2rem',
    },
    brand: {
        marginLeft: '0.5rem',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        marginBottom: '1rem',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '500',
        cursor: 'pointer',
    },
    main: {
        flex: 1,
        padding: '2rem',
    },
    stats: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem',
        marginBottom: '2rem',
    },
    card: {
        background: '#fff',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        flex: '1',
        textAlign: 'center',
        fontWeight: 'bold',
    },
};
