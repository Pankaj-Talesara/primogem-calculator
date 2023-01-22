import Head from "next/head";

import Navbar from "../components/Navbar";
import CalculateForm from "../components/MainForm";

export default function Home() {
    return (
            <div className="w-screen h-screen">
                <Head>
                    <title>Website</title>
                    <meta name=" Calculator" content=" Calculator" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div>
                    <Navbar />

                    <CalculateForm />
                </div>
            </div>
    );
}
