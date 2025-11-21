import { Suspense } from "react";
import { Explore } from "./Explore";

interface Props { }

export default function page({ }: Props) {
    return (
        <Suspense>
            <Explore />
        </Suspense>
    )
}
