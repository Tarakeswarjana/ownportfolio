import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <a target="_blank" style={{ cursor: "pointer" }} href="https://www.linkedin.com/in/tarakeswar-jana-5a3513233/" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                        <a href="https://github.com/Tarakeswarjana" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p> */}
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Description</div>
                        <a href="" className="flex flex-row items-center my-[15px] cursor-pointer">
                            {/* <FaYoutube /> */}
                            <span className="text-[15px] ml-[6px]">Dedicated</span>
                        </a>
                        <a className="flex flex-row items-center my-[15px] cursor-pointer">
                            {/* <RxGithubLogo /> */}
                            <span className="text-[15px] ml-[6px]">Punctual</span>
                        </a>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            {/* <RxDiscordLogo /> */}
                            <span className="text-[15px] ml-[6px]"> a curious learner</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">tarakeswarjana0808@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Tarakeswar Dev 2024 . All Website development
                </div>
            </div>
        </div>
    )
}

export default Footer