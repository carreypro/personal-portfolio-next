'use client'

import {
    Bank,
    GithubLogo,
    XLogo,
    InstagramLogo,
    Butterfly,
    Envelope,
    GraduationCap,
    Coffee,
    Pill,
    WechatLogo,
} from '@phosphor-icons/react'

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
    switch (name) {
        case 'bank':
            return <Bank size={size} weight="duotone" />;
        case 'github':
            return <GithubLogo size={size} weight="duotone" />;
        case 'x':
            return <XLogo size={size} weight="duotone" />;
        case 'instagram':
            return <InstagramLogo size={size} weight="duotone" />;
        case 'xiaohongshu':
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 7.25L13.5 11.25L16.5 11.25L14.5 16.75L10.5 10.25L8.5 14.25L7.5 12.75L9.5 8.75L7.5 8.75L9.5 3.25L13.5 9.75L15.5 7.25Z" fill="currentColor"/>
                </svg>
            );
        case "bsky":
            return <Butterfly size={size} weight="duotone" />
        case 'email':
            return <Envelope size={size} weight="duotone" />;
        case "college":
            return <GraduationCap size={size} weight="duotone" />;
        case "pill":
            return <Pill size={size} weight="duotone" />;
        case "wechat":
            return <WechatLogo size={size} weight="duotone" />;
        case "coffee":
            return <Coffee size={size} weight="duotone" />;
        default:
            return null
    }
}