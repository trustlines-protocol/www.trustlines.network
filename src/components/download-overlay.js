import React from "react";

import CloseButton from "./close-button";
import AppleIcon from "./icons/apple";
import PlaystoreIcon from "./icons/playstore";
import DownloadIcon from "./icons/download";

export default function DownloadOverlay(props) {
  return (
    <div className="absolute flex flex-col justify-between top-0 left-0 right-0 bottom-0 bg-white z-40 p-11">
      <div className="flex flex-row justify-end">
        <CloseButton
          className="cursor-pointer hover:opacity-50"
          onClick={props.onClickClose}
        />
      </div>
      <div className="flex flex-col items-center gap-11">
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <DownloadButton
            icon={<AppleIcon />}
            label="App Store"
            color="app-blue"
            onClick={() => console.log("TODO")}
          />
          <DownloadButton
            icon={<PlaystoreIcon />}
            label="Play Store"
            color="majorelle-blue"
            onClick={() => console.log("TODO")}
          />
        </div>
        <div
          className="underline text-lg text-gray-400 hover:text-majorelle-blue cursor-pointer"
          onClick={() => console.log("TODO")}
        >
          or download the .APK
        </div>
      </div>
      <div className="text-white">_</div>
    </div>
  );
}

function DownloadButton(props) {
  return (
    <div
      className="flex flex-row gap-2 items-center cursor-pointer hover:opacity-50"
      onClick={props.onClick}
    >
      <div
        className={`flex flex-row items-center justify-center w-14 h-14 rounded-full gradient-bg`}
      >
        {props.icon}
      </div>
      <div className={`text-lg text-${props.color}`}>{props.label}</div>
      <DownloadIcon
        size={24}
        className={`stroke-current text-${props.color} stroke-4/3`}
      />
    </div>
  );
}
