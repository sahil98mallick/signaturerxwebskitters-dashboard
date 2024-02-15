type OpeningTimeList = {
  day: string;
  openTime: string;
  closeTime: string;
};

export interface PharmacyLocationCardProps {
  image: string;
  name: string;
  contact_number: string;
  mailId: string;
  location: string;

  openingTimList: OpeningTimeList[];
}
