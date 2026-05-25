"use client";

import { useParams } from "next/navigation";

export default function GallaryDetails() {

    const params = useParams();

    return (
        <div className="container mx-auto p-10 text-center font-bold">
            Gallary details {params.id}
        </div>
    );
}