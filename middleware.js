import { NextResponse } from 'next/server'

export function middleware(request) {
  const theme = request.cookies.get('theme')
  const response = NextResponse.next()

  if (!theme) {
    response.cookies.set('theme', 'light')
  }

  return response
}