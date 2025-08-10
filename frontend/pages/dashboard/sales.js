import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Sales() {
    const router = useRouter();
    const [sales, setSales] = useState([]);
    const [form, setForm] = useState({ item: '', quantity: '', price: '', customer: '' });
    const [search, setSearch] = useState('');
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const resetForm = () => setForm({ item: '', quantity: '', price: '', customer: '' });

    const handleAddOrUpdate = (e) => {
        e.preventDefault();
        const { item, quantity, price, customer } = form;

        if (!item || !quantity || !price || !customer) {
            alert('Please fill all fields');
            return;
        }

        const newSale = {
            id: editId || Date.now(),
            item,
            quantity: parseInt(quantity),
            price: parseFloat(price),
            customer,
            total: parseInt(quantity) * parseFloat(price),
            timestamp: new Date().toLocaleString(),
        };

        const updatedSales = editId
            ? sales.map((s) => (s.id === editId ? newSale : s))
            : [newSale, ...sales];

        setSales(updatedSales);
        setEditId(null);
        resetForm();
    };

    const handleEdit = (sale) => {
        setForm({
            item: sale.item,
            quantity: sale.quantity,
            price: sale.price,
            customer: sale.customer,
        });
        setEditId(sale.id);
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this sale?')) {
            setSales(sales.filter((s) => s.id !== id));
        }
    };

    const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);
    const filteredSales = sales.filter((sale) =>
        sale.item.toLowerCase().includes(search.toLowerCase()) ||
        sale.customer.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Sales | Stoxly</title>
            </Head>
            <div style={styles.container}>
                <aside style={styles.sidebar}>
                    <h2 style={styles.brand}>Stoxly</h2>
                    <nav style={styles.nav}>
                        <a style={styles.link} href="/dashboard">Dashboard</a>
                        <a style={styles.link} href="/dashboard/stocks">Stocks</a>
                        <a style={styles.link} href="/dashboard/sales">Sales</a>
                        <a style={styles.link} onClick={() => router.push('/login')}>Logout</a>
                    </nav>
                </aside>

                <main style={styles.main}>
                    <h1>💵 Sales Tracker</h1>

                    <form onSubmit={handleAddOrUpdate} style={styles.form}>
                        <input type="text" name="item" placeholder="Item Sold" value={form.item} onChange={handleChange} style={styles.input} />
                        <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} style={styles.input} />
                        <input type="number" name="price" placeholder="Price (₦)" value={form.price} onChange={handleChange} style={styles.input} />
                        <input type="text" name="customer" placeholder="Customer Name" value={form.customer} onChange={handleChange} style={styles.input} />
                        <button type="submit" style={styles.addButton}>{editId ? 'Update' : 'Add Sale'}</button>
                    </form>

                    <input
                        type="text"
                        placeholder="Search by item or customer"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ ...styles.input, width: '100%', margin: '1rem 0' }}
                    />

                    <div style={styles.card}>📊 Total Revenue: ₦{totalRevenue}</div>

                    <ul style={{ padding: 0 }}>
                        {filteredSales.map((sale) => (
                            <li key={sale.id} style={styles.saleItem}>
                                <strong>{sale.item}</strong> — {sale.quantity} pcs @ ₦{sale.price}<br />
                                Customer: {sale.customer}<br />
                                Total: ₦{sale.total}<br />
                                <small>{sale.timestamp}</small>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <button style={styles.editBtn} onClick={() => handleEdit(sale)}>Edit</button>
                                    <button style={styles.deleteBtn} onClick={() => handleDelete(sale.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        background: '#f9fafc',
    },
    sidebar: {
        width: '220px',
        background: '#3342fa',
        color: '#fff',
        padding: '2rem 1rem',
    },
    brand: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        marginBottom: '1rem',
        cursor: 'pointer',
    },
    main: {
        flex: 1,
        padding: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: '400px',
    },
    input: {
        padding: '0.75rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
    },
    addButton: {
        background: '#3342fa',
        color: '#fff',
        border: 'none',
        padding: '0.75rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    card: {
        background: '#fff',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    saleItem: {
        background: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        listStyle: 'none',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    editBtn: {
        marginRight: '0.5rem',
        padding: '0.5rem',
        background: '#ffbf00',
        color: '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    deleteBtn: {
        padding: '0.5rem',
        background: '#ff4d4d',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};
