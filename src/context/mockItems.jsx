import React, { createContext, useContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
	const [items, setItems] = useState([
		{
			id: "itm001",
			name: "Cordless Drill",
			description: "18V cordless drill, lightly used.",
			category: "Tools",
			owner: "Alice Johnson",
			condition: "Good",
			available: true,
			image: "https://m.media-amazon.com/images/I/813crHWg7zL.jpg",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm002",
			name: "Camping Tent",
			description: "4-person waterproof tent, easy setup.",
			category: "Outdoors",
			owner: "Brian Lee",
			condition: "Excellent",
			available: true,
			image:
				"https://m.media-amazon.com/images/I/81pSTzxLxlL._UF894,1000_QL80_.jpg",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm003",
			name: "Crock Pot",
			description: "Large 6-quart slow cooker, works great.",
			category: "Kitchen",
			owner: "Samantha Green",
			condition: "Very Good",
			available: false,
			image:
				"https://images-cdn.ubuy.co.in/66d3f7da1d25227d605a37b4-crock-pot-7-quart-oval-manual-slow.jpg",
			borrowedBy: "Prachi Patel",
			sold: false,
		},
		{
			id: "itm004",
			name: "Yoga Mat",
			description: "Non-slip yoga mat, 6mm thick, blue color.",
			category: "Fitness",
			owner: "Ravi Mehra",
			condition: "Good",
			available: true,
			image:
				"https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1633-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm005",
			name: "Ladder",
			description: "6-foot aluminum step ladder, sturdy.",
			category: "Tools",
			owner: "Dana Wang",
			condition: "Good",
			available: true,
			image:
				"https://cwuzkkgiia.cloudimg.io/https://www.topregal.com/out/pictures/generated/product/1/1600_1100_100/94781_221562_Podestleiter_PL300-122_02-10-2024.jpg?w=1600&h=1100&org_if_sml=1",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm006",
			name: "Board Game: Settlers of Catan",
			description: "Complete set, all pieces included.",
			category: "Games",
			owner: "Luis García",
			condition: "Like New",
			available: true,
			image:
				"https://miro.medium.com/v2/resize:fit:7848/1*r_rq_fRLNliX91GSgMi38Q.jpeg",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm007",
			name: "Electric Kettle",
			description: "1.7L fast-boil electric kettle.",
			category: "Kitchen",
			owner: "Rhea Kapoor",
			condition: "Excellent",
			available: true,
			image:
				"https://d3vpmhw8imxmio.cloudfront.net/product-variants/1500000665/1500000665/1733916653956-9693-650x650.webp",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm008",
			name: "Power Washer",
			description: "High-pressure washer for outdoor use.",
			category: "Tools",
			owner: "Raj Singh",
			condition: "Very Good",
			available: true,
			image:
				"https://cdn.thewirecutter.com/wp-content/media/2020/09/pressurewasher2020-2048-0698.jpg",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm009",
			name: "Mountain Bike",
			description: "21-speed mountain bike with suspension.",
			category: "Outdoors",
			owner: "Tina Das",
			condition: "Good",
			available: false,
			image:
				"https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dwead92c71/category-landing/mountain/seo-mtb-light.jpg?sw=1280&sfrm=jpg&q=80",
			borrowedBy: "Ravi Verma",
			sold: false,
		},
		{
			id: "itm010",
			name: "Hair Dryer",
			description: "Compact hair dryer with cool shot.",
			category: "Appliances",
			owner: "Meera Joshi",
			condition: "Good",
			available: true,
			image:
				"https://img.bebeautiful.in/www-bebeautiful-in/2025-03/masthead_0.png",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm011",
			name: "Foldable Table",
			description: "Plastic foldable table for camping or home.",
			category: "Furniture",
			owner: "Nikhil Arora",
			condition: "Very Good",
			available: true,
			image:
				"https://images.jdmagicbox.com/quickquotes/images_main/stainless-steel-folding-table-312098007-77rb6.jpg",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm012",
			name: "Microwave Oven",
			description: "700W microwave with quick defrost.",
			category: "Appliances",
			owner: "Zoya Sheikh",
			condition: "Good",
			available: false,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0ryUVFZ_EWqWCxhUSZDt_GUozdOe8oXx_g&s",
			borrowedBy: "Sonal",
			sold: false,
		},
		{
			id: "itm013",
			name: "Tent Lamp",
			description: "Battery-powered hanging tent light.",
			category: "Outdoors",
			owner: "Amit Bhatt",
			condition: "Excellent",
			available: true,
			image:
				"https://media.istockphoto.com/id/1251269802/photo/young-adult-couple-camping-in-the-mountain.jpg?s=612x612&w=0&k=20&c=w_-gnvr6r8E7QM1KLLXzSAa7Dctqn8_ZEeQeEHJZVQo=",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm014",
			name: "Push Up Bars",
			description: "Non-slip push up bars for workout.",
			category: "Fitness",
			owner: "Sneha Rao",
			condition: "Like New",
			available: true,
			image:
				"https://i.ytimg.com/vi/mw1LTdt2UzE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFGlo8BSF19RlVOjiuf44ktD5lgQ",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm015",
			name: "LED Fairy Lights",
			description: "10m long warm white LED lights.",
			category: "Decor",
			owner: "Manish Yadav",
			condition: "Good",
			available: true,
			image:
				"https://cdn.thewirecutter.com/wp-content/media/2024/10/BEST-CHRISTMAS-LIGHTS-2048px-govee-close.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm016",
			name: "Steam Iron",
			description: "1600W steam iron with ceramic soleplate.",
			category: "Appliances",
			owner: "Neha Bansal",
			condition: "Good",
			available: true,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL52FBmy1XC-qkDSOsuDjuJSbTBrX-JRGigg&s",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm017",
			name: "Electric Screwdriver",
			description: "Rechargeable electric screwdriver kit.",
			category: "Tools",
			owner: "Karan Mehta",
			condition: "Very Good",
			available: true,
			image: "https://aramarket.in/wp-content/uploads/1000071490.jpg",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm018",
			name: "Tripod Stand",
			description: "Adjustable tripod for camera or phone.",
			category: "Electronics",
			owner: "Shalini Nair",
			condition: "Excellent",
			available: true,
			image:
				"https://www.designinfo.in/wp-content/uploads/2024/03/Fotopro-DIGI-9300-8.webp",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm019",
			name: "Bookshelf",
			description: "5-tier wooden bookshelf, dark brown.",
			category: "Furniture",
			owner: "Anuj Sinha",
			condition: "Very Good",
			available: true,
			image:
				"https://cdn.shopify.com/s/files/1/2728/0804/files/6_e4dad2ab-2072-4cdc-8a6c-9e4861b604a8.jpg?v=1579277936",
			borrowedBy: null,
			sold: false,
		},
		{
			id: "itm020",
			name: "Gaming Chair",
			description: "Ergonomic gaming chair with headrest.",
			category: "Furniture",
			owner: "Ritika Kapoor",
			condition: "Good",
			available: true,
			image: "https://cdn.mos.cms.futurecdn.net/ZUhT7koaVdbma4k5mLdQfQ.png",
			borrowedBy: null,
			sold: false,
		},
	]);

	const addItem = (newItem) => {
		setItems((prevItems) => [...prevItems, newItem]);
	};

	const markItemAsSold = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, sold: true, available: false } : item
			)
		);
	};

	return (
		<ItemContext.Provider value={{ items, addItem, markItemAsSold }}>
			{children}
		</ItemContext.Provider>
	);
};

export const useItemContext = () => useContext(ItemContext);
