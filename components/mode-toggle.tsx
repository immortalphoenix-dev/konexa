"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark')
        else if (theme === 'dark') setTheme('system')
        else setTheme('light')
    }

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-gray-200 dark:border-gray-800 bg-transparent text-foreground">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={cycleTheme}
            className="rounded-full w-9 h-9 border-gray-200 dark:border-gray-800 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground relative"
        >
            <Sun className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`} />
            <Moon className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`} />
            <Laptop className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${theme === 'system' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
