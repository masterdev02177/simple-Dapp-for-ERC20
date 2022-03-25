import "./App.css";
import { useMoralis, useERC20Balances  } from "react-moralis";
import { useEffect, useState } from "react";

function App(props) {
  const [walletAddress, setWalletAddress] = useState();
  const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
  return (
    <div className="App">
      <input value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} style={{width:"700px"}}/>
      <div> 
      {error && <>{JSON.stringify(error)}</>}
        <button onClick={() => fetchERC20Balances({ params: { chain: "0x13881", address: walletAddress } })}>Refetch</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
