import { NextApiRequest, NextApiResponse } from 'next';

type BrandNFT = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
};

type Brand = {
    brand: string;
    nfts: BrandNFT[];
    offers: string;

};

const brandsData: Brand[] = [
    {
        brand: "starbucks",
        nfts: [
            {
                id: "sb-01",
                name: "Beanie",
                image: "/nft-6.jpg",
                description: "Meet Beanie, the adventurous coffee bean who loves nothing more than hopping around the vast coffee plantations under the sun. Beanie's journey from a tiny bean to a fully sunbathed one is a story of perseverance and growth. Every wriggle and hop is a testament to its joyous existence in the coffee world.",
                price: "0.05eth"
            },
            {
                id: "sb-02",
                name: "Latte Llama",
                image: "/nft-7.jpg",
                description: "From atop its home - the coffee cup mountain - Latte Llama oversees the vast coffee landscapes. With fur patterns that mimic the swirls of a perfect latte, this llama embodies the warmth and comfort of your favorite coffee drink. Its steamy heart breaths symbolize the love and passion for all things coffee.",
                price: "0.03eth"
            },
            {
                id: "sb-03",
                name: "Mocha Mermaid",
                image: "/nft-8.jpg",
                description: "In the deep coffee oceans lies the enchanting Mocha Mermaid, singing melodies as smooth as a gentle coffee pour. Her tail, reflecting the rich shades of mochas, ripples and shimmers with every note. Dive into her world and experience the magical confluence of coffee and fantasy.",
                price: "0.03eth"
            }
        ],
        offers: "Get a free coffee with any NFT purchase!",
    },
    {
        brand: "coffeebean",
        nfts: [
            {
                id: "cb-01",
                name: "Espresso Elf",
                image: "/nft-9.jpg",
                description: "Espresso Elf, the tiny guardian of all espresso cups, is known for its energetic dances and playful demeanor. As the espresso brews, it emerges, dancing to the rhythm of the drips and steam. Catching a glimpse of this elusive creature is said to be a sign of a perfectly brewed espresso.",
                price: "0.03eth"
            },
            {
                id: "cb-02",
                name: "Cappuccino Cloud",
                image: "/nft-10.jpg",
                description: "Cappuccino Cloud drifts lazily over the coffee lands, blessing them with gentle rains of milk. This celestial being changes its hue based on the coffee flavor of the day, ensuring every brew below is perfect. Owning a Cappuccino Cloud is like having a piece of the coffee heavens.",
                price: "0.03eth"
            },
            {
                id: "cb-03",
                name: "Brewed Bear",
                image: "/nft-11.jpg",
                description: "In the heart of the coffee forests, Brewed Bear finds solace. This gentle giant, with fur as rich as freshly brewed coffee, has a ritual – to hibernate inside a giant coffee pot. As it snores, the sounds mimic the comforting hum of coffee brewing, making it the protector of all coffee dreams.",
                price: "0.03eth"
            }
        ],
        offers: "Get a free coffee with any NFT purchase!"
    }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const brand = req.query.brand as string;
    console.log('req.query',req.query);
    const brandData = brandsData.find(b => b.brand === brand);

    if (!brandData) {
        return res.status(404).json({ error: "Brand not found" });
    }
    else{
      (console.log('found'));
      return res.status(200).json(brandData);
    }
}
