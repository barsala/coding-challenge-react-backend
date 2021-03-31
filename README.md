# Barsala coding challenge

For this challenge, we are looking to make a basic version of our [booking engine](book.barsala.com).

First, familiarize yourself with the [data we have access to](https://sample-data.vercel.app/api/listings). There are a variety of fields here:

- Basic info: `name`, `id`
- Presentational info: `description`, `imageUrl`
- Location info: `city`, `geolocation`
- Pricing & availability data for the next 30 days: `pricing.available`, `pricing.price`, `pricing.date`

There are two pages that need to be built:

## Page 1. Listings page

First, build a basic form where you can select a date range (from today -> 30 days from now). It should present all listings and some basic information (name, photo, city, and availability should be sufficient).

When you select a date range, it should fire an API request to an endpoint that computes pricing and availability for that range. The pricing is simply the sum of days from start to end, inclusive of the start but exclusive of the end date.

## Page 2. SKU page

This page should be for an _individual_ listing type for a given date range. It should show _all data_ for a given listing (except maybe the pricing by day). Ideally it should still show availability by date range as well.

## General rules and tips

- Don't worry too much about making it look pretty. Just make sure it works well.
- Focus on clean code & long-term maintainability.
- Ideally it should be built using Next.js API endpoints and server-side rendering.
- You might see the file `api/listings.ts`, please ignore this file and instead treat the data as if you were fetching it from [an API](https://sample-data.vercel.app/api/listings).

## Submission

Send us a zip file of the code, and optionally deploy to Vercel and send us a live link (not required).
