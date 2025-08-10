import Head from 'next/head';

export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms and Conditions | Stoxly</title>
            </Head>
            <div style={styles.wrapper}>
                <div style={styles.card}>
                    <h1 style={styles.heading}>Terms and Conditions</h1>

                    <p>Last updated: April 18, 2025</p>

                    <p>
                        These Terms and Conditions ("Terms") govern your use of the Stoxly web application ("Service") operated by Stoxly Inc. ("we," "our," or "us").
                    </p>

                    <h2 style={styles.subheading}>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to any part of the terms, you may not access the Service.
                    </p>

                    <h2 style={styles.subheading}>2. User Responsibilities</h2>
                    <ul>
                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                        <li>You agree not to use the Service for any unlawful or unauthorized purpose.</li>
                        <li>You must provide accurate and complete information when registering and using the Service.</li>
                    </ul>

                    <h2 style={styles.subheading}>3. Data and Privacy</h2>
                    <p>
                        We respect your privacy. Your data is stored securely and used only in accordance with our Privacy Policy. We do not sell or share your data with third parties without your consent.
                    </p>

                    <h2 style={styles.subheading}>4. Intellectual Property</h2>
                    <p>
                        All content, trademarks, and logos on the Service are the property of Stoxly Inc. or its licensors. You may not use any branding or logos without our prior written permission.
                    </p>

                    <h2 style={styles.subheading}>5. Modifications to the Service</h2>
                    <p>
                        We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
                    </p>

                    <h2 style={styles.subheading}>6. Termination</h2>
                    <p>
                        We may suspend or terminate your account if you violate these Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>

                    <h2 style={styles.subheading}>7. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.
                    </p>

                    <p>
                        If you have any questions about these Terms, please contact us at support@stoxly.com.
                    </p>
                </div>
            </div>
        </>
    );
}

const styles = {
    wrapper: {
        minHeight: '100vh',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        padding: '3rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    card: {
        background: '#ffffff',
        borderRadius: '1rem',
        padding: '2.5rem',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        lineHeight: '1.6',
        color: '#333',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#3342fa',
    },
    subheading: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
    },
};