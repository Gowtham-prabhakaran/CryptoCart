import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1> CryptoCart </h1>
            </div>

            <input
                type="text"
                className="nav__search"
            />

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {/* {account.slice(0, 6) + '...' + account.slice(38, 42)} */}Logged In 
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Login
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;