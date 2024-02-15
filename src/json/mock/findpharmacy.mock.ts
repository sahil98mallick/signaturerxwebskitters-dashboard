import assest from "json/assest";

export interface IfindPharmacyMock {
  _id: string;
  index: number;
  guid: string;
  openStatus: boolean;
  price: string;
  image: string;
  pharmacy_distance: number;
  pharmacy_name: string;
  pharmacy_address: string;
  latitude: number;
  longitude: number;
}

export const findPharmacyMock: IfindPharmacyMock[] = [
  {
    _id: "65041c85e5928479d0eb8199",
    index: 0,
    guid: "2f192e85-8545-481f-a511-ef7123d937d1",
    openStatus: false,
    price: "3,696.65",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 34,
    pharmacy_name: "Brandie Fowler",
    pharmacy_address: "972 Lenox Road, Fivepointville, New Hampshire",
    latitude: -17.607658,
    longitude: -160.821624
  },
  {
    _id: "65041c85a0e540892243a0cc",
    index: 1,
    guid: "08fbcf48-7bdb-4224-9cde-3a7e7a691957",
    openStatus: false,
    price: "3,836.67",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 24,
    pharmacy_name: "Marquez Hines",
    pharmacy_address: "189 Bainbridge Street, Mapletown, American Samoa",
    latitude: 38.335419,
    longitude: -146.640371
  },
  {
    _id: "65041c854495185ba9e3e94c",
    index: 2,
    guid: "021c3869-49f1-478d-b075-891cee9231a2",
    openStatus: false,
    price: "3,901.01",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 32,
    pharmacy_name: "Georgette Stanton",
    pharmacy_address: "506 Conduit Boulevard, Otranto, California",
    latitude: 50.083317,
    longitude: 166.901133
  },
  {
    _id: "65041c85c1c88c868cde3646",
    index: 3,
    guid: "348ac693-effc-43be-8715-11c0fb13f645",
    openStatus: false,
    price: "3,005.16",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 34,
    pharmacy_name: "Darla Ball",
    pharmacy_address: "348 Carlton Avenue, Irwin, Oregon",
    latitude: 78.593309,
    longitude: 55.958876
  },
  {
    _id: "65041c857d9c0603d26f12ed",
    index: 4,
    guid: "6a3a815c-482e-496f-bc00-6a71ccefd116",
    openStatus: true,
    price: "3,448.02",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 39,
    pharmacy_name: "Cantu Emerson",
    pharmacy_address: "122 Roebling Street, Lowell, Washington",
    latitude: -13.697128,
    longitude: -8.259099
  },
  {
    _id: "65041c857e1da3589ff60e7a",
    index: 5,
    guid: "3f63a59d-0063-4f2c-b359-15266a7ec709",
    openStatus: false,
    price: "2,073.68",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 22,
    pharmacy_name: "Snow Fry",
    pharmacy_address: "809 Seigel Street, Lowgap, Michigan",
    latitude: -13.477665,
    longitude: 118.588848
  },
  {
    _id: "65041c85f40b46b96d8d5712",
    index: 6,
    guid: "23c8474d-212f-4fe8-ba94-a07887946db0",
    openStatus: true,
    price: "1,971.39",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 20,
    pharmacy_name: "Colette Hubbard",
    pharmacy_address: "550 Cherry Street, Oneida, Wyoming",
    latitude: 20.899065,
    longitude: -158.741282
  },
  {
    _id: "65041c855c8d22412eb03493",
    index: 7,
    guid: "84094a13-b38c-483e-b6ee-1f5830807e36",
    openStatus: false,
    price: "3,312.21",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 36,
    pharmacy_name: "Patrick Gray",
    pharmacy_address: "195 McKibbin Street, Frizzleburg, Iowa",
    latitude: 36.970569,
    longitude: 18.648396
  },
  {
    _id: "65041c85f23ae9e07c70a6c8",
    index: 8,
    guid: "1c42550f-d123-4bce-bd27-4f39c69e3939",
    openStatus: true,
    price: "1,140.52",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 28,
    pharmacy_name: "Allison Leach",
    pharmacy_address: "202 Hanson Place, Ilchester, Oklahoma",
    latitude: 32.211587,
    longitude: 69.931326
  },
  {
    _id: "65041c85d41c14fd0dcf46fe",
    index: 9,
    guid: "1680427e-d978-42ac-8642-a6a3237b51d5",
    openStatus: true,
    price: "3,227.89",
    image: assest.avatar_demo_frame,
    pharmacy_distance: 27,
    pharmacy_name: "Allen Fletcher",
    pharmacy_address: "937 Voorhies Avenue, Madaket, New Jersey",
    latitude: -76.672251,
    longitude: -62.448664
  }
];
