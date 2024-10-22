import React from 'react'
import './Courses.css'
import Tooltip from "react-simple-tooltip"
import { css } from "styled-components"
import About from './../About/About';
import TooltipContent from './TooltipContent';
import WhatareCharts from './Content/WhatareCharts';
import SupportResistance from './Content/SupportResistance';
import GapAnalysis from './Content/GapAnalysis';
import IntroChartPattern from './Content/IntroChartPattern';
import ChartAnnotationTools from './Content/ChartAnnotationTools';
import TrendLines from './Content/TrendLines';
import DowTheory from './Content/DowTheory';
import TechnicalOverlay from './Content/TechnicalOverlay';
import TechnicalIndicators from './Content/TechnicalIndicators';

const Courses = () => {
    return (
        <>
            <div className="course_wrapper myrow">
                <div className="course_block">
                    <div className="title mb-0">BASIC COURSE</div>
                    <div className="title" style={{ fontSize: '18px' }}>BASIC COURSE OF STOCK MARKET</div>
                    <div className="title mb-3">₹ 4,999/-</div>
                    <div className="title mb-0" style={{ fontSize: '18px' }}>DURATION - 07 DAYS</div>
                    <div className="title" style={{ fontSize: '18px' }}>(Daily 1 Hour Classes)</div>
                    <p className="c_content text-dark" style={{ fontWeight: 400 }}>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Investment Basics
                            {/* <Tooltip content="This is just a content"
                                placement={'left'}
                                background={"#fff"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                fontSize={'12px'}
                                customCss={css`
                            
                          `}
                                type="button">
                                <span></span>
                            </Tooltip> */}
                            </div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Securities</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Regulator</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Participants</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Primary & Secondary Market</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Derivative</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Mutual Fund</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Technical Analysis</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Fundamental Analysis</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Introduction to Indian Economy</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Miscellaneous - Corporate Action, Index etc.</div>

                    </p>
                    <div className="mt-5">
                        <a href="https://wa.me/917587555190?text=Hi,%20I'm%20interested">
                            <span className="button_outline_black">JOIN NOW</span>
                        </a>
                    </div>
                </div>
                <div className="course_block">
                    <div className="title text-white mb-0">ADVANCE COURSE</div>
                    <div className="title text-white" style={{ fontSize: '18px' }}>ADVANCE TECHNICAL ANALYSIS</div>
                    <div className="title text-white mb-3">₹ 25,999/-</div>
                    <div className="title mb-0 text-white" style={{ fontSize: '18px' }}>DURATION - 45 DAYS</div>
                    <div className="title text-white mb-0" style={{ fontSize: '18px' }}>(Daily 45 Minutes Theory + 45 Minutes Practical)</div>
                    <div className="title text-white" style={{ fontSize: '18px' }}>(Live Market Practice)</div>
                    <p className="c_content text-white">
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<WhatareCharts />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> What Are Charts? <i class="bi bi-info-circle"></i></span>
                            </Tooltip>
                        </div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<SupportResistance />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Support and Resistance <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<GapAnalysis />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Gaps and Gap Analysis <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<IntroChartPattern />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Introduction to Chart Patterns <i class="bi bi-info-circle"></i></span>
                            </Tooltip>
                        </div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<ChartAnnotationTools />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Chart Annotations Tools <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<TrendLines />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Trend & Trend Lines <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<DowTheory />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span>Dow Theory <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<TooltipContent />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Chart Patterns <i class="bi bi-info-circle"></i></span>
                            </Tooltip>
                        </div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                            <Tooltip content={<TechnicalOverlay />}
                                placement={'left'}
                                background={"#FED51B"}
                                color={"#202020"}
                                border="none"
                                radius={4}
                                padding={0}
                                fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Technical Overlay <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>
                        <Tooltip content={<TechnicalIndicators />}
                            placement={'left'}
                            background={"#FED51B"}
                            color={"#202020"}
                            border="none"
                            radius={4}
                            padding={0}
                            fontSize={'12px'}
                                customCss={css`
                            white-space:'pre-wrap';
                          `}
                                type="button">
                                <span> Technical Indicators <i class="bi bi-info-circle"></i></span>
                            </Tooltip></div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>Trading on Technical Level</div>
                        <div className="c_content text-white" style={{ fontWeight: 400, marginBottom: '8px' }}>Live Trading Practice</div>
                    </p>
                    <div className="mt-5">
                        <a href="https://wa.me/917587555190?text=Hi,%20I'm%20interested">
                            <span className="button_outline_white">JOIN NOW</span>
                        </a>
                    </div>
                </div>
                {/* <div className="course_block">
                    <div className="title mb-0">BASIC + ADVANCE</div>
                    <div className="title" style={{ fontSize: '18px' }}>BASIC & ADVANCE TECHNICAL ANALYSIS</div>
                    <div className="title">₹ 28,500</div>
                    <p className="c_content text-dark" style={{ fontWeight: 400 }}>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>All Topics of Basic Course.</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>All Topics of Advance Course.</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Trading on Technical Level</div>
                        <div className="c_content text-dark" style={{ fontWeight: 400, marginBottom: '8px' }}>Live Trading Practice</div>
                    </p>
                    <div className="mt-5">
                        <a href="https://wa.me/917587555190?text=Hi,%20I'm%20interested">
                            <span className="button_outline_black">JOIN NOW</span>
                        </a>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Courses