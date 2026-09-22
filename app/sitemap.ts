import {services} from './content';
import {siteUrl} from './site-config';
export default function sitemap(){return ['', 'services',...services.map(s=>s.slug),'about','contact','privacy','terms'].map(path=>({url:siteUrl+'/'+path,changeFrequency:'monthly' as const,priority:path===''?1:path==='contact'?0.9:0.7}));}
