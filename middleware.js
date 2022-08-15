import { NextResponse, userAgent } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // const response = NextResponse.next()
    // response.cookies.set('vercel', 'fast')
    const device = userAgent(request)
    // const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
    // url.searchParams.set('viewport', viewport)
    // console.log('url : ', url)
    // return NextResponse.rewrite(url)

    // if (request.nextUrl.pathname === '/about') {
    //     return NextResponse.redirect(new URL('/about', request.url))
    // }
    // if (request.nextUrl.pathname === '/another') {
    //     return NextResponse.rewrite(new URL('/rewrite', request.url))
    // }
    console.log('device --> ', device)
    console.log('geo --> ', request.geeo)
    const url = request.nextUrl
    const queryAtring = request?.nextUrl?.searchParams?.get('viewport')
    if (!queryAtring) {
        url.searchParams.set('viewport', "mobile")
        return NextResponse.redirect(url)
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about:path*',
}