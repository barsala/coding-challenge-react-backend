// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from 'moment';

const data = {
  listings: [
    {
      name: "The Cooper Studio",
      id: 'the-cooper-studio',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      city: "San Diego",
      geolocation: {
        latitude: 32.7157, longitude: -117.1611
      },
      description: "Your fully-equipped kitchen was designed with the home chef in mind: stainless steel appliances, gas stovetop, quartz counters, and hardwood flooring provide the perfect setting for preparing food at home.  When you want to workout, you can access the building’s 24-hour fitness facility at any time. You can also relax in the rooftop sky lounge under the cabanas for sunny days or near the cozy fireplaces when the temperature drops. When you’re ready to venture outside, explore this extremely walkable neighborhood known for its great eats and breweries. Restaurants and retail are accessible right downstairs, and it is just a few blocks away from San Diego's waterfront park.",
      pricing: [
        {"available": true, "price": 50}, {"available": true, "price": 88}, {"available": true, "price": 70}, {"available": false, "price": 113}, {"available": false, "price": 66}, {"available": false, "price": 50}, {"available": true, "price": 72}, {"available": true, "price": 86}, {"available": true, "price": 55}, {"available": true, "price": 70}, {"available": false, "price": 73}, {"available": false, "price": 149}, {"available": false, "price": 97}, {"available": false, "price": 53}, {"available": false, "price": 87}, {"available": false, "price": 82}, {"available": false, "price": 86}, {"available": true, "price": 133}, {"available": true, "price": 51}, {"available": true, "price": 115}, {"available": true, "price": 135}, {"available": true, "price": 93}, {"available": true, "price": 146}, {"available": true, "price": 103}, {"available": true, "price": 76}, {"available": false, "price": 104}, {"available": false, "price": 88}, {"available": false, "price": 85}, {"available": false, "price": 140}, {"available": false, "price": 121}
      ],
      amenities: [
        "Essentials",
        "TV",
        "Air conditioning",
        "Heating",
        "Kitchen",
        "Internet",
        "Wireless internet",
        "Washer",
        "Pool",
        "Dryer",
        "Gym",
        "Elevator in building",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Safety card",
        "Fire extinguisher"
      ]
    },
    {
      name: "Resort Getaway 1BD/1BA",
      id: 'resort-getaway-1bd1ba',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      city: 'Tahiti',
      geolocation: {
        latitude: -17.6509, longitude: -149.4260
      },
      description: 'Experience convenience in these charming condos fully-equipped with everything you need for a home away from home. Enjoy the private balcony in your unit or, when the weather turns cold, cozy up to your in-unit fireplace.',
      pricing: [
        {"available": false, "price": 161}, {"available": false, "price": 208}, {"available": false, "price": 177}, {"available": false, "price": 189}, {"available": true, "price": 228}, {"available": true, "price": 244}, {"available": true, "price": 250}, {"available": true, "price": 250}, {"available": true, "price": 156}, {"available": true, "price": 197}, {"available": true, "price": 172}, {"available": true, "price": 222}, {"available": true, "price": 223}, {"available": true, "price": 188}, {"available": true, "price": 202}, {"available": true, "price": 165}, {"available": false, "price": 167}, {"available": false, "price": 183}, {"available": true, "price": 181}, {"available": true, "price": 178}, {"available": true, "price": 180}, {"available": true, "price": 177}, {"available": true, "price": 214}, {"available": true, "price": 160}, {"available": true, "price": 167}, {"available": true, "price": 164}, {"available": true, "price": 199}, {"available": true, "price": 202}, {"available": true, "price": 167}, {"available": true, "price": 182},
      ],
      amenities: [
        "Essentials",
        "TV",
        "Air conditioning",
        "Heating",
        "Kitchen",
        "Internet",
        "Wireless internet",
        "Washer",
        "Pool",
        "Dryer",
        "Gym",
        "Elevator in building",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Safety card",
        "Fire extinguisher"
      ]
    },
    {
      name: 'The Woodsworth 2BD/2BA',
      id: 'the-woodsworth-2bd2ba',
      city: 'San Diego',
      geolocation: {
        latitude: 32.7157, longitude: -117.1611
      },
      description: 'Enjoy this home away from home located conveniently in the middle of downtown. Take in the beautiful San Diego weather in the building’s outdoor patio and fire pit or cook up something in the barbecue grills.',
      imageUrl: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      pricing: [
        {"available": true, "price": 36}, {"available": true, "price": 75}, {"available": true, "price": 58}, {"available": true, "price": 44}, {"available": true, "price": 69}, {"available": true, "price": 37}, {"available": true, "price": 46}, {"available": true, "price": 74}, {"available": true, "price": 51}, {"available": true, "price": 50}, {"available": true, "price": 74}, {"available": true, "price": 65}, {"available": true, "price": 30}, {"available": true, "price": 74}, {"available": true, "price": 42}, {"available": true, "price": 42}, {"available": true, "price": 37}, {"available": true, "price": 45}, {"available": true, "price": 39}, {"available": true, "price": 70}, {"available": true, "price": 54}, {"available": true, "price": 45}, {"available": true, "price": 59}, {"available": true, "price": 60}, {"available": true, "price": 65}, {"available": true, "price": 49}, {"available": true, "price": 31}, {"available": true, "price": 60}, {"available": true, "price": 64}, {"available": true, "price": 68}
      ],
      amenities: [
        "Essentials",
        "TV",
        "Air conditioning",
        "Heating",
        "Kitchen",
        "Internet",
        "Wireless internet",
        "Washer",
        "Dryer",
        "Gym",
        "Elevator in building",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Smoke detector",
        "Carbon monoxide detector",
        "Safety card"
      ]
    },
    {
      name: 'The Admiral 1BD/1BA',
      id: 'the-admiral-1bd1ba',
      city: 'Boston',
      geolocation: {
        latitude: 42.3601, longitude: -71.0589
      },
      description: 'Located in the Seaport area of Boston near downtown, these luxury condos all feature stunning Boston views, free wifi, stainless steel appliances, a full-sized washer and dryer in-unit, and hardwood flooring.',
      imageUrl: 'https://images.unsplash.com/photo-1603382254452-30f9f44ad451?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      pricing: [
        {"available": true, "price": 50}, {"available": true, "price": 170}, {"available": true, "price": 111}, {"available": true, "price": 104}, {"available": true, "price": 68}, {"available": true, "price": 94}, {"available": true, "price": 99}, {"available": true, "price": 109}, {"available": true, "price": 152}, {"available": true, "price": 51}, {"available": false, "price": 122}, {"available": false, "price": 117}, {"available": false, "price": 111}, {"available": false, "price": 91}, {"available": false, "price": 116}, {"available": false, "price": 69}, {"available": false, "price": 194}, {"available": false, "price": 85}, {"available": false, "price": 122}, {"available": false, "price": 81}, {"available": false, "price": 91}, {"available": true, "price": 91}, {"available": true, "price": 153}, {"available": true, "price": 139}, {"available": true, "price": 187}, {"available": true, "price": 131}, {"available": true, "price": 97}, {"available": true, "price": 193}, {"available": true, "price": 131}, {"available": true, "price": 111},
      ],
      amenities: [
        "Essentials",
        "TV",
        "Air conditioning",
        "Heating",
        "Kitchen",
        "Internet",
        "Wireless internet",
        "Washer",
        "Dryer",
        "Buzzer/wireless intercom",
        "Gym",
        "Elevator in building",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Safety card",
        "Fire extinguisher",
        "Private living room",
        "Families (with kids)"
      ]
    },
    {
      name: 'Aspire Penthouse',
      id: 'aspire-penthouse',
      city: 'Seattle',
      geolocation: {
        latitude: 47.6062, longitude: -122.3321
      },
      description: 'Relax in this spacious apartment located in the thriving Near Southside by Magnolia Avenue. Take a stroll down Magnolia Avenue and enjoy the live music, boutique retail stores, local coffee shops, and every type of cuisine you can imagine.',
      imageUrl: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      pricing: [
        {"available": true, "price": 372}, {"available": true, "price": 379}, {"available": true, "price": 333}, {"available": true, "price": 398}, {"available": true, "price": 309}, {"available": true, "price": 330}, {"available": true, "price": 364}, {"available": true, "price": 301}, {"available": true, "price": 346}, {"available": true, "price": 339}, {"available": true, "price": 359}, {"available": true, "price": 282}, {"available": true, "price": 346}, {"available": true, "price": 325}, {"available": true, "price": 288}, {"available": true, "price": 274}, {"available": true, "price": 277}, {"available": true, "price": 385}, {"available": true, "price": 344}, {"available": true, "price": 289}, {"available": true, "price": 297}, {"available": true, "price": 316}, {"available": true, "price": 399}, {"available": true, "price": 349}, {"available": true, "price": 311}, {"available": false, "price": 270}, {"available": false, "price": 366}, {"available": false, "price": 400}, {"available": false, "price": 283}, {"available": false, "price": 320}
      ],
      amenities: [
        "Essentials",
        "TV",
        "Air conditioning",
        "Heating",
        "Kitchen",
        "Internet",
        "Wireless internet",
        "Washer",
        "Dryer",
        "Doorman",
        "Buzzer/wireless intercom",
        "Gym",
        "Elevator in building",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Safety card",
        "Fire extinguisher"
      ]
    }
  ]
};

export default function helloAPI(req, res) {
  res.status(200).json({
    listings: data.listings.map(val => ({ ...val, pricing: val.pricing.map(({ available, price }, i) => ({ available, price, date: moment().add(i, 'days').format('YYYY-MM-DD') }))}))
  })
}
