/** @format */

import React from "react";
import "./financialCard.css";
import { HiCheckCircle } from "react-icons/hi";

export default function FinancialCard(props) {
  return (
      <div className="__financialCardDiv" onClick={()=>props.func(props.data.courseTitle,props.data.videoLink,props.data.videoThumbnail)}>
        <div>
          <HiCheckCircle color="green" size="35" />
        </div>
        <div className="_financialCardTxt">
          <p>
            <strong>Video: </strong>
            {props.data.courseTitle}
            <br />{props.data.videoDuration}
          </p>
        </div>
      </div>
  );
}
