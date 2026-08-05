'use client'

import { useEffect, useRef } from 'react'

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`
}

/**
 * Runs on the thank-you page. Reads the booking + payment details handed over by the
 * server callback (via a short-lived cookie) and emails them through Web3Forms.
 * Web3Forms' free plan only accepts submissions from the browser, so this must be client-side.
 */
export default function BookingEmailer() {
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    const raw = readCookie('booking_result')
    if (!raw) return
    done.current = true

    let data: Record<string, string>
    try {
      data = JSON.parse(raw)
    } catch {
      deleteCookie('booking_result')
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      deleteCookie('booking_result')
      return
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Booking — ${data.program || 'Program'} (${data.status})`,
        from_name: 'HHPF Website Booking',
        Program: data.program || '—',
        Name: data.name || '—',
        Email: data.email || '—',
        Phone: data.phone || '—',
        Message: data.message || '—',
        Payment_Status: data.status || '—',
        Order_Id: data.orderId || '—',
        Transaction_Id: data.txnId || '—',
        Amount_Paid: data.amount || '—',
        Bank_Transaction_Id: data.bankTxnId || '—',
        Payment_Mode: data.paymentMode || '—',
        Transaction_Date: data.date || '—',
      }),
    })
      .catch(() => {})
      .finally(() => deleteCookie('booking_result'))
  }, [])

  return null
}
