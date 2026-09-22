# Swift West Cleaners launch handover

New project, built from scratch. No previous site assets or content used.

## Completed
- Home, Services, five individual service pages, About, Contact, draft Privacy and Terms.
- Responsive layouts, mobile navigation and sticky quote/contact actions.
- Persisted quote requests in D1 `enquiries`, server-side validation, honeypot, recoverable errors and booking disclaimers.
- Service-specific quote selection, optional property/scheduling fields.
- Metadata, sitemap, robots, genuine LocalBusiness structured data, local WebP images.

## Required before customer launch
- Supply business phone, email, hours and ABN/legal entity.
- Configure email notification delivery. Enquiries currently save to D1 without an email alert; the UI clearly discloses this. Owner can review enquiry records via Sites database tools.
- Confirm service coverage, final cleaning inclusions and policies.
- Review/finalise Privacy and Terms including data retention and privacy contact.
- Add only verified insurance, provider registration information and testimonials.
- Replace illustrative stock images with real team/job images if available.
- Publish for a public audience and connect the preferred domain when authorised. Initial deployment is owner-private.

## Storage
Only the quote POST endpoint is public; there is no endpoint exposing enquiries. Database is managed by Sites. Production migrations are generated in `drizzle/`. Test data is confined to local preview storage and is not packaged.
