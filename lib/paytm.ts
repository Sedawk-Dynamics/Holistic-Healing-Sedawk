import PaytmChecksum from 'paytmchecksum'

/** Sign a JSON body string with the merchant key. */
export function generateSignature(params: string, key: string): Promise<string> {
  return PaytmChecksum.generateSignature(params, key)
}

/** Verify a Paytm checksum against a body string. */
export function verifySignature(params: string, key: string, checksum: string): Promise<boolean> {
  return PaytmChecksum.verifySignature(params, key, checksum)
}

export function paytmConfig() {
  const env = (process.env.PAYTM_ENV || 'staging').toLowerCase()
  const isProd = env === 'production' || env === 'prod'
  return {
    mid: process.env.PAYTM_MID || '',
    key: process.env.PAYTM_MERCHANT_KEY || '',
    website: process.env.PAYTM_WEBSITE || 'WEBSTAGING',
    // Paytm migrated hosts (Aug 2025). Old securegw*.paytm.in return "501 System Error".
    host: isProd ? 'https://secure.paytmpayments.com' : 'https://securestage.paytmpayments.com',
    isProd,
  }
}
