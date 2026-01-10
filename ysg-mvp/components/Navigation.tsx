'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/about', label: 'About' },
    { href: '/terms', label: 'Terms' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/70 backdrop-blur-md border-b border-nature-100/50 sticky top-0 z-50 supports-[backdrop-filter]:bg-white/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4 space-y-4">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">🧭</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-nature-800 to-nature-600 bg-clip-text text-transparent">YouShouldGo</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${pathname === item.href
                  ? 'text-nature-900 bg-nature-100 shadow-sm'
                  : 'text-gray-600 hover:text-nature-700 hover:bg-nature-50'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 