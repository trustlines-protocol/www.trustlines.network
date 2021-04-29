import React, { useEffect, useState } from "react";
import axios from "axios";

import LabeledRow from "./labeled-row";

import { shortenAddress, formatNum } from "./utils";

export default function SelectedAccountBox({ network, address }) {
  const [account, setAccount] = useState({});

  useEffect(() => {
    if (network && address) {
      async function _fetch() {
        const response = await axios(
          process.env.GATSBY_RELAY_URL +
            `/api/v1/networks/${network.address}/users/${address}`
        );
        setAccount(response.data);
      }
      _fetch();
    } else {
      setAccount({});
    }
  }, [network, address]);

  const isAccountSelected =
    Object.keys(account).length > 0 && Boolean(network) && address;

  return (
    <div className="shadow-card-dark-green px-10 py-5">
      <div className="text-lg font-semibold text-dark-green text-center">
        Account
      </div>
      <LabeledRow
        label={"User"}
        value={isAccountSelected ? shortenAddress(address) : "-"}
      />
      <LabeledRow
        label={"Credit Given"}
        value={isAccountSelected ? formatNum(account.given, network) : "-"}
      />

      <LabeledRow
        label={"Credit Received"}
        value={isAccountSelected ? formatNum(account.received, network) : "-"}
      />
      <LabeledRow
        label={"Balance"}
        value={isAccountSelected ? formatNum(account.balance, network) : "-"}
      />
      <LabeledRow
        label={"Available"}
        value={
          isAccountSelected ? formatNum(account.leftReceived, network) : "-"
        }
      />
    </div>
  );
}
