import './Deal.css';

const Deal = () => {
    return (
        <div className='deal'>
            <div className="deal-header">
                <h2>Never Miss a Deal!</h2>
                <p>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
            </div>
            <div className="deal-form">
                <input type="email" placeholder="Enter your email id" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Deal;