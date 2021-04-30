import React, { useEffect, useState } from "react";
import axios from "axios";

import { FROZEN_NETWORKS } from "./frozen-networks";

export default function NetworkSelectBox({ onSelectNetwork }) {
  const [networks, setNetworks] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [didSelectInitialNetwork, setDidSelectedInitialNetwork] = useState(
    false
  );

  useEffect(() => {
    async function _fetch() {
      const response = await axios(
        process.env.GATSBY_RELAY_URL + `/api/v1/networks`
      );

      const networks = response.data
        .filter((network) => !FROZEN_NETWORKS.includes(network.address))
        .sort((networkA, networkB) => networkB.numUsers - networkA.numUsers);
      setNetworks(networks);
    }
    _fetch();
    const id = setInterval(_fetch, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const selectedNetwork = networks.find(
      ({ address }) => selectedAddress === address
    );
    onSelectNetwork(selectedNetwork);
  }, [selectedAddress]);

  useEffect(() => {
    if (!selectedAddress && networks.length > 0 && !didSelectInitialNetwork) {
      setSelectedAddress(networks[0].address);
      setDidSelectedInitialNetwork(true);
    }
  }, [selectedAddress, networks, didSelectInitialNetwork]);

  const handleSelectNetwork = (selectedAddress) => {
    setSelectedAddress(selectedAddress);
  };

  return (
    <div className="shadow-card-coral-red px-10 py-5 mb-8">
      <div className="text-lg font-semibold text-coral-red text-center">
        Network
      </div>
      <div
        className={`
          py-4 px-6 mt-4 pr-6
        bg-gray-100 rounded-full overflow-hidden overflow-ellipsis
        `}
      >
        <select
          className="bg-gray-100 focus:outline-none w-full"
          value={selectedAddress}
          onChange={(event) => handleSelectNetwork(event.target.value)}
        >
          {networks.map((network) => (
            <option key={network.address} value={network.address}>
              {network.name} {network.abbreviation} ({network.numUsers})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
