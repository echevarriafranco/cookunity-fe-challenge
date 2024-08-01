import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TOKEN_KEY } from './app/types/constants';


export default async function middleware(req: NextRequest) {
    const token = await req.cookies.get(TOKEN_KEY)?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/pokemons', '/pokemons/:path*'],
}
