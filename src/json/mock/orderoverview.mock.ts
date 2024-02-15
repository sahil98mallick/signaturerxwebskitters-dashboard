import assest from "json/assest";
import {
  CollectedPrescriptionData,
  PendingPrescriptionData,
  RejectedPrescriptionData
} from "typescript/interface/order_overview_table.interface";

const filter_dataSet = [
  {
    name: "Pending",
    icon: assest.clockMaroon
  },
  {
    name: "Collected",
    icon: assest.checkIcon
  },
  {
    name: "Rejected",
    icon: assest.crossRed
  }
];
const infoArray = [
  {
    count: "20",
    icon: assest.clock_ylw,
    bottomText: "Pending"
  },
  {
    count: "20",
    icon: assest.accepted,
    bottomText: "Collected"
  },
  {
    count: "20",
    icon: assest.rejected,
    bottomText: "Rejected"
  }
];

const PendingRows: PendingPrescriptionData[] = [
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },

    pending: "Patient Collection",
    expires_in: "15h 12m 3s"
  },
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },

    pending: "Patient Collection",
    expires_in: "11h 12m 3s"
  },
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },

    pending: "Patient Collection",
    expires_in: "17h 12m 3s"
  }
];
const CollectedRows: CollectedPrescriptionData[] = [
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },
    accepted_at: "23/07/2023, 05.30 PM",
    collection_schedule_at: "27/03/2023, 12.40 PM"
  },
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },
    accepted_at: "23/07/2023, 05.30 PM",
    collection_schedule_at: "27/03/2023, 12.40 PM"
  },
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },
    accepted_at: "23/07/2023, 05.30 PM",
    collection_schedule_at: "27/03/2023, 12.40 PM"
  }
];
const RejectedRows: RejectedPrescriptionData[] = [
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },
    cancelled_at: "23/07/2023, 05.30 PM",
    reason: "Medication not in stock "
  },
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },
    cancelled_at: "23/07/2023, 05.30 PM",
    reason: "There is a price discrepancy "
  },
  {
    prescription_id: {
      id: "SRXBFA46F2A1EE9",
      date: "23/07/2023, 02.00 PM"
    },
    patient_details: {
      name: "Reece Samani",
      conatct: "07939665777"
    },
    medicine_details: [
      {
        number: 200,
        medicine_name: "Amoxicillin 500mg capsules"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      },
      {
        number: 5,
        medicine_name: "Prednisolone 5mg Tablets"
      }
    ],
    total: {
      amount: "35.00",
      paid: true
    },
    cancelled_at: "23/07/2023, 05.30 PM",
    reason: "Clinical issue with the prescription"
  }
];

const OrderDetailAcceptedMockData = [
  {
    medicineName: "Amoxicillin 500mg capsules",
    dosages: "Three times in a day",
    notes: "Sed commodi aperiam voluptatibus repellat. Commodi quos itaque ut.",
    qty: "20",
    price: "£1 ",
    total: 20
  },
  {
    medicineName: "Amoxicillin 500mg capsules",
    dosages: "Three times in a day",
    notes: "Sed commodi aperiam voluptatibus repellat. Commodi quos itaque ut.",
    qty: "20",
    price: "£1 ",
    total: 20
  },
  {
    medicineName: "Amoxicillin 500mg capsules",
    dosages: "Three times in a day",
    notes: "Sed commodi aperiam voluptatibus repellat. Commodi quos itaque ut.",
    qty: "20",
    price: "£1 ",
    total: 20
  },
  {
    medicineName: "Amoxicillin 500mg capsules",
    dosages: "Three times in a day",
    notes: "Sed commodi aperiam voluptatibus repellat. Commodi quos itaque ut.",
    qty: "20",
    price: "£1 ",
    total: 20
  }
];

export {
  CollectedRows,
  OrderDetailAcceptedMockData,
  PendingRows,
  RejectedRows,
  filter_dataSet,
  infoArray
};
