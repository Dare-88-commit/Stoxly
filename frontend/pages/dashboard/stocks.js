import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Stocks() {
    const router = useRouter();
    const [stocks, setStocks] = useState([]);
    const [form, setForm] = useState({ name: "", quantity: "", price: "", profit: "" });
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const resetForm = () => setForm({ name: "", quantity: "", price: "", profit: "" });

    const handleAddOrUpdate = (e) => {
        e.preventDefault();
        const { name, quantity, price, profit } = form;

        if (!name || !quantity || !price || !profit) {
            alert("Please fill all fields");
            return;
        }

        const newStock = {
            id: editId || Date.now(),
            name,
            quantity: parseInt(quantity),
            price: parseFloat(price),
            profit: parseFloat(profit),
            total: parseInt(quantity) * parseFloat(price),
            timestamp: new Date().toLocaleString(),
        };

        const updatedStocks = editId
            ? stocks.map((s) => (s.id === editId ? newStock : s))
            : [newStock, ...stocks];

        setStocks(updatedStocks);
        setEditId(null);
        resetForm();
    };

    const handleEdit = (stock) => {
        setForm({
            name: stock.name,
            quantity: stock.quantity,
            price: stock.price,
            profit: stock.profit,
        });
        setEditId(stock.id);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Delete this item?");
        if (confirmDelete) {
            setStocks(stocks.filter((s) => s.id !== id));
        }
    };

    const totalProfit = stocks.reduce((sum, stock) => sum + stock.profit, 0);
    const totalSales = stocks.reduce((sum, stock) => sum + stock.total, 0);
    const filteredStocks = stocks.filter((stock) =>
        stock.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Stocks | Stoxly</title>
            </Head>
            <div style={styles.container}>
                <aside style={styles.sidebar}>
                    <h2 style={styles.brand}>Stoxly</h2>
                    <nav style={styles.nav}>
                        <a style={styles.link} href="/dashboard">Dashboard</a>
                        <a style={styles.link} href="/dashboard/stocks">Stocks</a>
                        <a style={styles.link} href="/dashboard/sales">Sales</a>
                        <a style={styles.link} onClick={() => router.push("/login")}>Logout</a>
                    </nav>
                </aside>

                <main style={styles.main}>
                    <h1>📦 Stock Manager</h1>

                    <form onSubmit={handleAddOrUpdate} style={styles.form}>
                        <input type="text" name="name" placeholder="Item Name" value={form.name} onChange={handleChange} style={styles.input} />
                        <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} style={styles.input} />
                        <input type="number" name="price" placeholder="Price (₦)" value={form.price} onChange={handleChange} style={styles.input} />
                        <input type="number" name="profit" placeholder="Profit (₦)" value={form.profit} onChange={handleChange} style={styles.input} />
                        <button type="submit" style={styles.addButton}>{editId ? "Update" : "Add Stock"}</button>
                    </form>

                    <div style={{ marginTop: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Search item..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ ...styles.input, width: '100%', marginBottom: '1rem' }}
                        />

                        <div style={styles.stats}>
                            <div style={styles.card}>💰 Total Sales: ₦{totalSales}</div>
                            <div style={styles.card}>📈 Total Profit: ₦{totalProfit}</div>
                        </div>

                        <ul style={{ padding: 0 }}>
                            {filteredStocks.map((stock) => (
                                <li key={stock.id} style={styles.stockItem}>
                                    <strong>{stock.name}</strong> — {stock.quantity} pcs @ ₦{stock.price}<br />
                                    Profit: ₦{stock.profit} <br />
                                    <small>{stock.timestamp}</small>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <button style={styles.editBtn} onClick={() => handleEdit(stock)}>Edit</button>
                                        <button style={styles.deleteBtn} onClick={() => handleDelete(stock.id)}>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        background: '#f4f6fa',
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
    stats: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
    },
    card: {
        background: '#fff',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    stockItem: {
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
    }
};
