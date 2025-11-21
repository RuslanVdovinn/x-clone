import type { Metadata } from "next";
import ProfileFake from "./ProfileFake";

export const metadata: Metadata = {
    title: 'ProfikeFake'
}

export default function page() {
    return <ProfileFake />
}
