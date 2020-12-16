import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { AiOutlineClockCircle, AiFillFolderOpen } from "react-icons/ai";
import { BiUserCircle, BiBell } from "react-icons/bi";
import { BsCaretRightFill, BsFlag } from "react-icons/bs";
import './tabs.css';

export default function TabSec() {
    const defaultFunc = (eventKey, event) => {
        console.log(eventKey, event)
    }
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" onSelect={(eventKey, event) => defaultFunc(eventKey, event)}>
                <Tab eventKey="home" title={<span className="_tab">Overview</span>} tabClassName="_tabs">
                    <p>Tab 1</p>
                </Tab>
                <Tab eventKey="profile" title="Curriculum" tabClassName="_tabs" >
                    <p className="_curriculumHeading">Start beginners level course</p>
                    <p className="_curriculumDes">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                        to demonstrate the visual form of a document or a typeface without relying on meaningful content
                     </p>
                    <div className="_previewDiv">
                        <div className="_previewDiv1">
                            <BsCaretRightFill
                                className="_previewVideoIcon"
                                size="20"
                                color="white"
                            />
                            <span className="_previewTxt1">Introduction to Editing</span>
                            <span className="_previewTxt2">Preview</span>
                        </div>
                        <div>
                            <p className="_previewTxt3">16 minutes</p>
                        </div>
                    </div>
                    <div className="_previewDiv">
                        <div className="_previewDiv1">
                            <BsCaretRightFill
                                className="_previewVideoIcon"
                                size="20"
                                color="white"
                            />
                            <span className="_previewTxt1">Overview Editing</span>
                            <span className="_previewTxt2">Preview</span>
                        </div>
                        <div>
                            <p className="_previewTxt3">16 minutes</p>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Reviews" tabClassName="_tabs">
                    Tab 3
                </Tab>
            </Tabs>
        </div>
    )
}