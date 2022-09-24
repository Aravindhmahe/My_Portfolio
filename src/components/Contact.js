import React from "react";
import { PhoneIncomingIcon } from "@heroicons/react/solid";

export default function Contact() {
    return (
        <section id="contact" className="relative py-10">
            <div className="text-center mb-6" >
                <PhoneIncomingIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-2xl font-medium title-font text-white mb-4">
                    Let's get Connected
                </h1>
            </div>
            {/* <div class="flex w-2/5 mt-10 ml-20 space-x-4">
                <div class="flex-1">01</div>
                <div class="flex-1">02</div>
                <div class="flex-1">03</div>
                <div class="flex-1">04</div>
            </div> */}
        </section>
    );
}