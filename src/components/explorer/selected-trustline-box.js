import React, { useEffect, useState } from "react";
import axios from "axios";

import LabeledRow from "./labeled-row";

import { shortenAddress, formatNum } from "./utils";

export default function SelectedTrustlineBox({ network, from, to }) {
  const [trustline, setTrustline] = useState({});

  useEffect(() => {
    if (network && from && to) {
      async function _fetch() {
        const response = await axios(
          process.env.GATSBY_RELAY_URL +
            `/api/v1/networks/${network.address}/users/${from}/trustlines/${to}`
        );
        setTrustline(response.data);
      }
      _fetch();
    } else {
      setTrustline({});
    }
  }, [network, from, to]);

  const isTrustlineSelected =
    Object.keys(trustline).length > 0 && Boolean(network);

  return (
    <div className="shadow-card-neon-pink px-10 py-5 mb-8">
      <div className="text-lg font-semibold text-neon-pink text-center">
        Trustline
      </div>
      <LabeledRow
        label={"From"}
        value={isTrustlineSelected ? shortenAddress(trustline.user) : "-"}
      />
      <LabeledRow
        label={"To"}
        value={
          isTrustlineSelected ? shortenAddress(trustline.counterParty) : "-"
        }
      />
      <LabeledRow
        label={"Given credit line"}
        value={isTrustlineSelected ? formatNum(trustline.given, network) : "-"}
      />
      <LabeledRow
        label={"Received credit line"}
        value={
          isTrustlineSelected ? formatNum(trustline.received, network) : "-"
        }
      />
      <LabeledRow
        label={"Balance"}
        value={
          isTrustlineSelected ? formatNum(trustline.balance, network) : "-"
        }
      />
    </div>
  );
}
