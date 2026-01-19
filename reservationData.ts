import { ReservationData, ReservationText, Language } from './types';

export const RESERVATION_DATA_EN: ReservationData = {
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

export const RESERVATION_DATA_DE: ReservationData = {
  settings: {
    centerLocation: "Bürgerservicecenter Yorckstr. 22, 14467 Potsdam",
    contactEmail: "buergerservice@rathaus.potsdam.de",
    maxAdvanceBookingDays: 60,
    slotDurationMinutes: 15
  },
  categories: [
    {
      id: "cat_passport",
      name: "Reisepässe & Ausweise",
      description: "Beantragung und Abholung von Ausweisdokumenten.",
      services: [
        {
          id: "srv_passport_new",
          name: "Reisepass beantragen",
          duration: 20,
          docsRequired: "Biometrisches Foto, alter Pass, Geburtsurkunde."
        },
        {
          id: "srv_id_card",
          name: "Personalausweis beantragen",
          duration: 15,
          docsRequired: "Biometrisches Foto, aktueller Ausweis."
        },
        {
          id: "srv_passport_pickup",
          name: "Dokument abholen",
          duration: 5,
          docsRequired: "Altes Dokument, Abholbenachrichtigung."
        }
      ]
    },
    {
      id: "cat_registration",
      name: "Meldeangelegenheiten",
      description: "An-, Ab- und Ummeldungen.",
      services: [
        {
          id: "srv_register_apt",
          name: "Wohnung anmelden",
          duration: 20,
          docsRequired: "Wohnungsgeberbestätigung, Ausweise aller Personen."
        },
        {
          id: "srv_deregister",
          name: "Wohnung abmelden",
          duration: 15,
          docsRequired: "Personalausweis."
        }
      ]
    },
    {
      id: "cat_vehicle",
      name: "Kfz-Zulassung",
      description: "Zulassung und Änderungen bei Fahrzeugen.",
      services: [
        {
          id: "srv_veh_register",
          name: "Kfz-Zulassung",
          duration: 30,
          docsRequired: "Fahrzeugbrief, Versicherungsnummer (eVB), IBAN."
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

export const RESERVATION_TEXT_EN: ReservationText = {
  title: "Service Reservation",
  backToHome: "Back to Home",
  tabs: {
    new: "New Appointment",
    manage: "Manage Appointment"
  },
  manage: {
    title: "Manage Appointments",
    subtitle: "View, change or cancel your existing appointments.",
    labelApptId: "Appointment ID (P-XXXX)",
    labelPin: "PIN Code",
    btnSearch: "Find Appointment",
    apptFound: "Appointment Found",
    cancelBtn: "Cancel Appointment",
    confirmCancel: "Are you sure you want to cancel this appointment? This action cannot be undone.",
    errorNotFound: "No appointment found with these details.",
    successCancelled: "Appointment cancelled successfully.",
    customer: "Customer",
    date: "Date",
    time: "Time",
    service: "Service"
  },
  wizard: {
    titles: {
      services: "Select Services",
      date: "Choose Date & Time",
      personal: "Your Details",
      confirm: "Confirmation"
    },
    steps: {
      services: "Services",
      date: "Time",
      personal: "Details",
      confirm: "Done"
    },
    buttons: {
      back: "Back",
      next: "Next Step",
      confirm: "Confirm Booking",
      newBooking: "Book Another"
    },
    services: {
        subtitle: "Please select the services you require.",
        docsRequired: "Required documents:",
        duration: "Duration:",
        mins: "min"
    },
    date: {
        subtitle: "Select a date to see available time slots.",
        selectTime: "Select Time Slot",
        noSlots: "No slots available for this date."
    },
    personal: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        dob: "Date of Birth",
        gdprLabel: "I agree to the processing of my data.",
        gdprLink: "Privacy Policy",
        required: "(required)"
    },
    confirm: {
        location: "Location",
        services: "Selected Services",
        contact: "Contact Information",
        successTitle: "Appointment Confirmed!",
        successMsg: "Your appointment has been successfully booked. A confirmation email has been sent to",
        apptId: "Appointment Number",
        pin: "PIN Code",
        important: "Please keep your Appointment Number and PIN safe. You will need them to manage your booking.",
        bringDocs: "Don't forget to bring the required documents."
    }
  }
};

export const RESERVATION_TEXT_DE: ReservationText = {
  title: "Terminvereinbarung",
  backToHome: "Zurück zur Startseite",
  tabs: {
    new: "Neuer Termin",
    manage: "Termin verwalten"
  },
  manage: {
    title: "Termin verwalten",
    subtitle: "Ihre bestehenden Termine einsehen, ändern oder stornieren.",
    labelApptId: "Termin-Nummer (P-XXXX)",
    labelPin: "PIN Code",
    btnSearch: "Termin suchen",
    apptFound: "Termin gefunden",
    cancelBtn: "Termin stornieren",
    confirmCancel: "Möchten Sie diesen Termin wirklich stornieren? Dies kann nicht rückgängig gemacht werden.",
    errorNotFound: "Kein Termin mit diesen Daten gefunden.",
    successCancelled: "Termin erfolgreich storniert.",
    customer: "Kunde",
    date: "Datum",
    time: "Uhrzeit",
    service: "Dienstleistung"
  },
  wizard: {
    titles: {
      services: "Dienstleistungen wählen",
      date: "Datum & Uhrzeit",
      personal: "Ihre Daten",
      confirm: "Bestätigung"
    },
    steps: {
      services: "Dienste",
      date: "Zeit",
      personal: "Daten",
      confirm: "Fertig"
    },
    buttons: {
      back: "Zurück",
      next: "Weiter",
      confirm: "Termin buchen",
      newBooking: "Weiteren Termin buchen"
    },
    services: {
        subtitle: "Bitte wählen Sie die gewünschten Dienstleistungen aus.",
        docsRequired: "Erforderliche Unterlagen:",
        duration: "Dauer:",
        mins: "Min"
    },
    date: {
        subtitle: "Wählen Sie ein Datum für verfügbare Zeiten.",
        selectTime: "Zeitfenster wählen",
        noSlots: "Keine Termine verfügbar."
    },
    personal: {
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail Adresse",
        phone: "Telefonnummer",
        dob: "Geburtsdatum",
        gdprLabel: "Ich stimme der Datenverarbeitung zu.",
        gdprLink: "Datenschutzerklärung",
        required: "(pflichtfeld)"
    },
    confirm: {
        location: "Standort",
        services: "Gewählte Leistungen",
        contact: "Kontaktdaten",
        successTitle: "Termin bestätigt!",
        successMsg: "Ihr Termin wurde erfolgreich gebucht. Eine Bestätigung wurde gesendet an",
        apptId: "Termin-Nummer",
        pin: "PIN Code",
        important: "Bitte bewahren Sie Termin-Nummer und PIN gut auf. Sie benötigen diese für Änderungen.",
        bringDocs: "Bitte denken Sie an die erforderlichen Unterlagen."
    }
  }
};

export const getReservationContent = (lang: Language) => {
  return {
    data: lang === 'de' ? RESERVATION_DATA_DE : RESERVATION_DATA_EN,
    text: lang === 'de' ? RESERVATION_TEXT_DE : RESERVATION_TEXT_EN
  };
};