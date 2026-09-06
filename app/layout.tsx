import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'나의 오사카 | 9.14–9.17 여행 일정',icons:{icon:'/osaka-trip/favicon.svg'},description:'날짜별 일정, 맛집과 관광지 위치, 방문 순서와 길찾기를 한눈에 보는 오사카 여행 지도.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
