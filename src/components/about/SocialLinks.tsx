"use client"

import { socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import Image from 'next/image'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("mt-6 flex items-center justify-end", className)}>
            {socialLinks.map((link) => {
                if (link.qrcode) {
                    return (
                        <TooltipProvider key={link.name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                        <CustomIcon name={link.icon} />
                                        <span className="sr-only">{link.name}</span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <Image
                                        src={link.qrcode}
                                        alt={`${link.name} QR Code`}
                                        width={200}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                }
                
                if (!link.href) return null;
                
                return (
                    <Link
                        key={link.name}
                        href={`${link.href}?utm_source=${utm_source}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                        <CustomIcon name={link.icon} />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
