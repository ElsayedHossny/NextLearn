import Link from "next/link"
import Navbar from './Navbar';




export default function layout({ children }) {
    return (
        <>
            <div className="container mx-auto">
                <Navbar />
                <div className="bg-sky-400 text-center p-10 mt-5">
                    {children}
                </div>
            </div>

        </>
    )
}
