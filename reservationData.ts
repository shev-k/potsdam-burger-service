import { ReservationData } from './types';

export const RESERVATION_DATA: ReservationData = {
  settings: {
    centerLocation: "Bürgerservicecenter Yorckstr. 22, 14467 Potsdam",
    contactEmail: "buergerservice@rathaus.potsdam.de",
    maxAdvanceBookingDays: 60,
    slotDurationMinutes: 15
  },
  categories: [
    {
      id: "cat_passport",
      name: "Passports & ID Cards",
      description: "Application and collection of identity documents.",
      services: [
        {
          id: "srv_passport_new",
          name: "Apply for Passport (Reisepass)",
          duration: 20,
          docsRequired: "Biometric photo, old passport, birth certificate."
        },
        {
          id: "srv_id_card",
          name: "Apply for ID Card (Personalausweis)",
          duration: 15,
          docsRequired: "Biometric photo, current ID."
        },
        {
          id: "srv_passport_pickup",
          name: "Pick up Document",
          duration: 5,
          docsRequired: "Old document, collection slip."
        }
      ]
    },
    {
      id: "cat_registration",
      name: "Registration (Meldeangelegenheiten)",
      description: "Moving in, moving out, and changing residence.",
      services: [
        {
          id: "srv_register_apt",
          name: "Register Apartment (Anmeldung)",
          duration: 20,
          docsRequired: "Landlord confirmation (Wohnungsgeberbestätigung), ID cards of all persons."
        },
        {
          id: "srv_deregister",
          name: "Deregister Apartment (Abmeldung)",
          duration: 15,
          docsRequired: "ID card."
        }
      ]
    },
    {
      id: "cat_vehicle",
      name: "Vehicle Services (Kfz)",
      description: "Registration and changes for vehicles.",
      services: [
        {
          id: "srv_veh_register",
          name: "Vehicle Registration",
          duration: 30,
          docsRequired: "Vehicle title, insurance number (eVB), IBAN."
        }
      ]
    }
  ],
  mockSlots: {
    note: "Frontend should generate slots dynamically, but use this logic to 'block' some.",
    blockedDates: ["2026-02-14", "2026-02-15"], 
    fullyBookedDates: ["2026-01-20"],
    openingHours: {
      start: "08:00",
      end: "18:00",
      weekend: false
    }
  },
  existingAppointments: [
    {
      appointmentId: "392810",
      pin: "9988",
      customerName: "Max Mustermann",
      date: "2026-02-01",
      time: "10:00",
      service: "Apply for ID Card"
    },
    {
      appointmentId: "test",
      pin: "0000",
      customerName: "Test User",
      date: "2026-02-05",
      time: "14:30",
      service: "Vehicle Registration"
    }
  ]
};