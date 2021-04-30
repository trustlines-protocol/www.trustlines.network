import React, { useState, useCallback } from "react";

import NetworkGraph from "./network-graph";
import NetworkSelectBox from "./network-select-box";
import SelectedTrustlineBox from "./selected-trustline-box";
import SelectedAccountBox from "./selected-account-box";

export default function ExplorerSection() {
  const [network, setNetwork] = useState(null);
  const [trustline, setTrustline] = useState(null);
  const [account, setAccount] = useState(null);

  const handleSelectNetwork = useCallback((network) => {
    setNetwork(network);
    setAccount(null);
    setTrustline(null);
  }, []);

  return (
    <div className={"container mx-auto flex flex-col lg:flex-row mt-8 mb-20"}>
      <div className="flex-1">
        <NetworkGraph
          network={network}
          onSelectTrustline={setTrustline}
          onSelectAccount={setAccount}
        />
      </div>
      <div className="flex flex-col px-4 lg:w-96">
        <NetworkSelectBox onSelectNetwork={handleSelectNetwork} />
        <SelectedTrustlineBox
          network={network}
          from={trustline ? trustline.from : null}
          to={trustline ? trustline.to : null}
        />
        <SelectedAccountBox network={network} address={account} />
      </div>
    </div>
  );
}
