"use client"

export default function NavigationBarLink({ to, children }: { to: number, children: string | undefined }) {
    return (
        <button onClick={() => scroll({ top: to, behavior: "smooth" })}>{children}</button>
    )
}