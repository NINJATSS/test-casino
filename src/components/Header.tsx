import { GambaConnectButton } from 'gamba/react-ui'
import React from 'react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.img`
  width: 4em;
  height: 4em;
`

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr max-content;
  width: 100%;
  background: var(--header-bg-color);
  backdrop-filter: blur(10px);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  gap: 20px;
  .label {
    display: none;
    @media (min-width: 800px) {
      display: block;
    }
  }
`

const StyledNavigationLink = styled(NavLink)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 1em;
  transition: color .1s, border .1s;
  white-space: nowrap;
  text-transform: uppercase;
`

const Links = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  align-items: center;
  & > a > svg {
    display: block;
  }
`

function NavigationLink({ children, to }: React.PropsWithChildren<{to: string}>) {
  return (
    <StyledNavigationLink to={to}>
      {children}
    </StyledNavigationLink>
  )
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Icon Buttons</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.2s ease-in-out;
        }
        .icon-button:hover {
            opacity: 0.9;
            transform: scale(1.05);
        }
        .discord { background-color: #5865F2; color: white; }
        .x { background-color: #000000; color: white; }
        .buy { background-color: #10B981; color: white; }
        .icon { margin-right: 0.5rem; }
    </style>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="space-x-4">
        <!-- Discord Button -->
        <a href="https://discord.com" target="_blank" class="icon-button discord">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <!-- Discord SVG Icon (simplified) -->
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.375-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.385-.3984-.8745-.6083-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.032.0277C.5336 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0488 1.458 4.0412 2.4012 6.0284 2.9616a.0745.0745 0 00.0805-.0277c.4653-.6142.8695-1.2724 1.2227-1.9633a.0731.0731 0 00-.0415-.1058c-.6525-.2476-1.2742-.5493-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.5988.3441-1.2205.6469-1.8734.8937a.075.075 0 00-.0406.1067c.3604.6984.7712 1.3622 1.2256 1.9612a.074.074 0 00.0796.0277c1.9872-.5594 3.9796-1.5026 6.0284-2.9616a.0783.0783 0 00.0312-.0561c.4604-4.5893-.3939-9.123-4.1166-13.6891a.0669.0669 0 00-.0321-.0277zm-9.224 12.2257c-1.1872 0-2.1522-.9771-2.1522-2.1808 0-1.2036.965-2.1807 2.1522-2.1807 1.1871 0 2.1522.9771 2.1522 2.1807 0 1.2037-.9651 2.1808-2.1522 2.1808zm6.114-2.1808c-1.1871 0-2.1522-.9771-2.1522-2.1807 0-1.2036.965-2.1807 2.1522-2.1807 1.1871 0 2.1522.9771 2.1522 2.1807 0 1.2036-.9651 2.1807-2.1522 2.1807z"/>
            </svg>
            Join Discord
        </a>

        <!-- X Button -->
        <a href="https://x.com" target="_blank" class="icon-button x">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <!-- X SVG Icon (simplified) -->
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.5l8.593-9.832L0 1.153h7.594l5.243 6.932 6.064-6.932zM16.056 20.328h2.04L7.956 3.68H5.8l10.256 16.648z"/>
            </svg>
            Follow on X
        </a>

        <!-- Buy Button -->
        <a href="#buy" class="icon-button buy">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <!-- Shopping Cart SVG Icon (simplified) -->
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            Buy Now
        </a>
    </div>
</body>
</html>
