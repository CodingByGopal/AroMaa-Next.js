import { domain } from '@/data/_helpers/_constants'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

    return {
        rules: [{
            userAgent: '*',
            allow: ['/'],
        }],
        sitemap: `${domain}/sitemap.xml`,
    }
}