/**
 * Dane stowarzyszenia „A Tacy Sami" — wyodrębnione z dokumentów źródłowych
 * (statut, sprawozdania merytoryczne 2018–2025, zarząd i komisje, partnerzy).
 * Jedno źródło prawdy dla wszystkich podstron.
 */

export interface Osoba {
  imieNazwisko: string;
  funkcja: string;
}

export interface Partner {
  nazwa: string;
  opis?: string;
  logo: string; // ścieżka do assets
}

export interface ZadanieKonkursowe {
  nazwa: string;
  szczegoly?: string;
}

export interface Finanse {
  przychody: string;
  koszty: string;
  wynik: string;
  wynikDodatni: boolean;
  procentPodatku?: string;
  dotacje?: string;
  darowizny?: string;
  wynagrodzenia?: string;
}

export interface Sprawozdanie {
  rok: number;
  slug: string;
  nazwaOrganizacji: string;
  odbiorcy: number;
  czlonkowie: number;
  wolontariusze: number;
  zasieg: string;
  wspolpraca: string[];
  uwaga?: string;
  dzialania: string[];
  zadaniaKonkursowe: ZadanieKonkursowe[];
  finanse: Finanse;
}

export const ORGANIZACJA = {
  nazwaPelna:
    '„A Tacy Sami" Stowarzyszenie przy Ośrodku Szkolno-Wychowawczym im. Przyjaciół Dzieci',
  nazwaSkrocona: '„A Tacy Sami"',
  formaPrawna: 'Stowarzyszenie posiadające osobowość prawną — Organizacja Pożytku Publicznego (OPP)',
  dataRejestracji: '20.10.2008 r.',
  krs: '0000315867',
  regon: '020852041',
  nip: '692 24 57 136',
  adres: '59-300 Lubin, Aleja Komisji Edukacji Narodowej 6, woj. dolnośląskie',
  telefon: '665-044-559',
  email: 'atacysami@gazeta.pl',
  www: 'www.atacysami.pl.tl',
  konto: '78 1090 2082 0000 0001 1056 2462',
  misja:
    'Rozwijanie i propagowanie inicjatyw, postaw i działań sprzyjających rehabilitacji ' +
    'zawodowej i społecznej osób niepełnosprawnych — w szczególności dzieci i młodzieży ' +
    'z niepełnosprawnością intelektualną i ruchową — poprzez integrację ze społecznością ' +
    'lokalną, wspieranie aktywności życiowej oraz budowanie atmosfery zaufania i szacunku.'
};

export const CELE_REALIZACJI: string[] = [
  'Kreowanie i umacnianie wśród ludzi poczucia więzi i porozumienia.',
  'Podejmowanie działań zmierzających do integracji osób niepełnosprawnych w społeczeństwie.',
  'Współdziałanie z samorządami, instytucjami pomocy społecznej, służbą zdrowia i oświatą.',
  'Prowadzenie działalności pożytku publicznego w formie odpłatnej i nieodpłatnej.',
  'Wspieranie finansowe i materialne działań Ośrodka Szkolno-Wychowawczego w Lubinie.',
  'Organizowanie imprez kulturalnych, sportowych, turystycznych i rozrywkowych.',
  'Podejmowanie działań charytatywnych na rzecz osób niepełnosprawnych.',
  'Organizowanie aukcji, zbiórek pieniędzy i środków rzeczowych.',
  'Organizowanie usług rehabilitacyjnych, terapeutycznych, edukacyjnych i opiekuńczych.',
  'Organizowanie turnusów rehabilitacyjnych oraz obozów terapeutyczno-szkoleniowych.',
  'Pomoc społeczna rodzinom i osobom w trudnej sytuacji życiowej.',
  'Pozyskiwanie środków finansowych, w tym z 1,5% podatku dochodowego.'
];

export const OBSZARY_DZIALALNOSCI: string[] = [
  'Działalność charytatywna',
  'Ochrona i promocja zdrowia',
  'Działania na rzecz osób niepełnosprawnych',
  'Nauka, edukacja, oświata i wychowanie',
  'Krajoznawstwo i turystyka',
  'Wspieranie i upowszechnianie kultury fizycznej i sportu',
  'Kultura, sztuka i ochrona dziedzictwa narodowego',
  'Podtrzymywanie tradycji narodowej i świadomości obywatelskiej',
  'Promocja i organizacja wolontariatu',
  'Przeciwdziałanie uzależnieniom i patologiom społecznym',
  'Działalność na rzecz integracji i reintegracji społecznej',
  'Działalność na rzecz dzieci i młodzieży, w tym wypoczynku'
];

export const ROZDZIALY_STATUTU = [
  {
    numer: 'I',
    tytul: 'Postanowienia ogólne',
    paragrafy: '§1–§5',
    opis: 'Nazwa, teren działania, siedziba, osobowość prawna oraz status organizacji pożytku publicznego.'
  },
  {
    numer: 'II',
    tytul: 'Cele i sposoby ich realizacji',
    paragrafy: '§6–§9',
    opis: 'Cel główny (rehabilitacja i integracja osób niepełnosprawnych), 23 sposoby realizacji celów oraz 18 obszarów działalności pożytku publicznego.'
  },
  {
    numer: 'III',
    tytul: 'Członkowie — prawa i obowiązki',
    paragrafy: '§10–§18',
    opis: 'Trzy kategorie członków: zwyczajni, wspierający i honorowi — ich prawa, obowiązki oraz zasady ustania członkostwa.'
  },
  {
    numer: 'IV',
    tytul: 'Władze stowarzyszenia',
    paragrafy: '§19–§30',
    opis: 'Walne Zebranie Członków, Zarząd (min. 6 osób) i Komisja Rewizyjna (min. 2 osoby). Kadencja organów: 4 lata.'
  },
  {
    numer: 'V',
    tytul: 'Majątek stowarzyszenia',
    paragrafy: '§31–§34',
    opis: 'Źródła majątku: składki, darowizny, spadki, dotacje, ofiarność publiczna oraz 1,5% podatku dochodowego.'
  },
  {
    numer: 'VI',
    tytul: 'Postanowienia końcowe',
    paragrafy: '§35',
    opis: 'Zasady zmiany statutu oraz rozwiązania stowarzyszenia i przeznaczenia majątku.'
  }
];

export const STATUT_META = {
  dataPrzyjecia: '5 października 2023 r. w Lubinie',
  podpisy: 'Iwona Świątek (protokolant), Anna Smolarek (przewodnicząca zebrania) — 11.10.2023',
  liczbaRozdzialow: 6,
  liczbaParagrafow: 35
};

export const ZARZAD: Osoba[] = [
  { imieNazwisko: 'Ewa Niedbalska', funkcja: 'Prezes' },
  { imieNazwisko: 'Aldona Karlak', funkcja: 'Wiceprezes' },
  { imieNazwisko: 'Anna Smolarek', funkcja: 'Sekretarz' },
  { imieNazwisko: 'Iwona Hoffmann', funkcja: 'Skarbnik' },
  { imieNazwisko: 'Izabela Pierzchała', funkcja: 'Członek' },
  { imieNazwisko: 'Adam Ozonek', funkcja: 'Członek' }
];

export const KOMISJA_REWIZYJNA: Osoba[] = [
  { imieNazwisko: 'Joanna Wolicka-Singh', funkcja: 'Przewodnicząca' },
  { imieNazwisko: 'Leon Formago', funkcja: 'Członek' }
];

export const INNE_ORGANY: Osoba[] = [
  { imieNazwisko: 'Elżbieta Kęcik-Kłapouszczak', funkcja: 'Komisja likwidacyjna — przewodnicząca' },
  { imieNazwisko: 'Izabela Wszoła', funkcja: 'Komisja likwidacyjna — członek' },
  { imieNazwisko: 'Anna Smolarek', funkcja: 'Komisja inwentaryzacyjna — przewodnicząca' },
  { imieNazwisko: 'Iwona Świątek', funkcja: 'Komisja inwentaryzacyjna — członek' },
  { imieNazwisko: 'Elżbieta Kęcik-Kłapouszczak', funkcja: 'Pełnomocnik ds. umów cywilnoprawnych' },
  { imieNazwisko: 'Joanna Wolicka-Singh', funkcja: 'Specjalista ds. ochrony danych osobowych (RODO)' }
];

export const PARTNERZY: Partner[] = [
  { nazwa: 'Urząd Marszałkowski Województwa Dolnośląskiego', opis: 'Dotacje na zadania publiczne', logo: 'assets/partners/partner-5.jpg' },
  { nazwa: 'PFRON', opis: 'Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych', logo: 'assets/partners/partner-3.jpg' },
  { nazwa: 'Ośrodek Szkolno-Wychowawczy im. Przyjaciół Dzieci w Lubinie', opis: 'Placówka afiliowana', logo: 'assets/partners/partner-8.png' },
  { nazwa: 'Hufiec ZHP Lubin', opis: 'Współpraca harcerska', logo: 'assets/partners/partner-7.jpg' },
  { nazwa: 'EMC Szpitale', opis: 'Partner medyczny', logo: 'assets/partners/partner-4.jpg' },
  { nazwa: 'LIBROM', opis: 'Hurtownia elektryczna — darczyńca', logo: 'assets/partners/partner-2.jpg' },
  { nazwa: 'Górzyńska Piekarnia', opis: 'Darczyńca', logo: 'assets/partners/partner-1.jpg' },
  { nazwa: 'Herb Miasta Lubina', opis: 'Gmina Miejska Lubin', logo: 'assets/partners/partner-9.png' },
  { nazwa: 'Herb Szklar Górnych', opis: 'Społeczność lokalna', logo: 'assets/partners/partner-10.gif' },
  { nazwa: 'Partner przemysłowy', opis: 'Wsparcie rzeczowe', logo: 'assets/partners/partner-6.jpg' }
];

export const PARTNERZY_DODATKOWI: string[] = [
  'Gmina Miejska Lubin',
  'Powiat Lubiński',
  'Fundacja KGHM',
  'Towarzystwo Przyjaciół Dzieci (TPD)',
  'Stowarzyszenie „Trzeci wiek"',
  'Jelenia Plast',
  'Zagłębie Lubin'
];

export const SPRAWOZDANIA: Sprawozdanie[] = [
  {
    rok: 2025,
    slug: '2025',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Ośrodku Szkolno-Wychowawczym im. Przyjaciół Dzieci',
    odbiorcy: 230,
    czlonkowie: 38,
    wolontariusze: 25,
    zasieg: 'Gmina, powiat, kilka województw',
    wspolpraca: ['Gmina Miejska Lubin', 'Powiat Lubiński', 'Urząd Marszałkowski Woj. Dolnośląskiego', 'PFRON', 'OSW w Lubinie'],
    dzialania: [
      'Akcja „Smacznego" — dofinansowanie obiadów',
      'Refundacja leczenia stomatologicznego',
      'Zakup 4 tablic interaktywnych',
      'Konferencja „Dostępność"',
      'Dofinansowanie transportu',
      'Paczki świąteczne',
      'Zabawki sensoryczne, kocyk obciążeniowy',
      'Śniadania i ręczniki dla internatu',
      'Pomoc żywnościowa dla rodziny w trudnej sytuacji'
    ],
    zadaniaKonkursowe: [
      { nazwa: '„Boccia kreuje i rehabilituje"', szczegoly: 'Zajęcia treningowe, maj–listopad 2025' },
      { nazwa: 'XI Regionalny Turniej Bocci', szczegoly: '29 maja 2025, uczestnicy z kilku powiatów' },
      { nazwa: 'IV Rajd „Wędruj z Nami"', szczegoly: 'Wrzesień 2025, Przesieka, 40 osób' },
      { nazwa: '„Umiem pływać"', szczegoly: 'Maj–listopad 2025' },
      { nazwa: 'Projekt PFRON „Podróżuj i zdobywaj!"', szczegoly: 'Warszawa (50), Zakopane (50), Pobierowo (40) — łącznie 140 osób' }
    ],
    finanse: {
      przychody: '955 708,40 zł', koszty: '471 792,18 zł', wynik: '+493 172,71 zł', wynikDodatni: true,
      procentPodatku: '562 588,40 zł', dotacje: '387 290,00 zł', darowizny: '5 830,00 zł', wynagrodzenia: '43 400,00 zł (9 umów cywilnoprawnych)'
    }
  },
  {
    rok: 2024,
    slug: '2024',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Ośrodku Szkolno-Wychowawczym im. Przyjaciół Dzieci',
    odbiorcy: 120,
    czlonkowie: 33,
    wolontariusze: 0,
    zasieg: 'Gmina, kilka gmin, powiat, kilka powiatów',
    wspolpraca: ['Gmina Miejska Lubin', 'Powiat Lubiński', 'Urząd Marszałkowski', 'OSW w Lubinie'],
    dzialania: [
      'Akcja „Smacznego"',
      'Refundacja stomatologiczna',
      'Leki na epilepsję',
      'Łóżko bariatryczne',
      'Remont łazienki',
      'Wycieczka do Klekusiowa, Zlot DHNS w Stemplewie',
      'Warsztaty pierwszej pomocy',
      'Mikołajki, materiały do innowacji pedagogicznej',
      'Pomoc powodzianom'
    ],
    zadaniaKonkursowe: [
      { nazwa: '„Boccia"', szczegoly: '3.04–21.11.2024' },
      { nazwa: 'X Turniej Bocci', szczegoly: '4.06.2024, kilka powiatów' },
      { nazwa: 'III Rajd „Wędruj z Nami"', szczegoly: '17–20.10.2024, Przesieka, 30 osób' },
      { nazwa: '„Umiem pływać"' },
      { nazwa: 'I Dolnośląskie Mistrzostwa Badmintona' },
      { nazwa: 'Spartakiada „Sporty wszelakie"' }
    ],
    finanse: {
      przychody: '531 125,80 zł', koszty: '136 955,53 zł', wynik: '+398 159,48 zł', wynikDodatni: true,
      procentPodatku: '448 575,80 zł', dotacje: '76 370,00 zł', darowizny: '6 180,00 zł', wynagrodzenia: '23 200,00 zł (5 umów cywilnoprawnych)'
    }
  },
  {
    rok: 2023,
    slug: '2023',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Specjalnym Ośrodku Szkolno-Wychowawczym im. Przyjaciół Dzieci',
    odbiorcy: 120,
    czlonkowie: 32,
    wolontariusze: 0,
    zasieg: 'Gmina, powiat',
    wspolpraca: ['Gmina Lubin', 'Powiat Lubiński', 'Urząd Marszałkowski', 'SOSW Lubin', 'Stowarzyszenie „Trzeci wiek"'],
    uwaga: 'W 2023 r. Stowarzyszenie obchodziło 15-lecie działalności (spotkanie integracyjne).',
    dzialania: [
      'Akcja „Smacznego"',
      'Dofinansowanie leczenia Oliwii Witkowskiej',
      'Akcesoria do kodowania, implantologia',
      'Dzień Dziecka, wycieczka do Przesieki',
      '18 tablic magnetycznych dla SOSW',
      'Konkurs plastyczny z okazji Dnia Niepodległości',
      'Spektakle „Grupy T", pomoc żywnościowa'
    ],
    zadaniaKonkursowe: [
      { nazwa: '„Uśmiech dziecka", Boccia, „Polska Niepodległa"', szczegoly: 'Gmina Lubin' },
      { nazwa: '„Umiem pływać", „Miedziowy szlak", II Rajd (etap 2)', szczegoly: 'Powiat Lubiński' },
      { nazwa: 'IX Turniej Bocci (5.06.2023), II Rajd (etap 1)', szczegoly: 'Urząd Marszałkowski' }
    ],
    finanse: {
      przychody: '89 882,60 zł', koszty: '86 567,24 zł', wynik: '+3 315,36 zł', wynikDodatni: true,
      procentPodatku: '42 828,60 zł', dotacje: '42 670,00 zł', darowizny: '47 212,60 zł', wynagrodzenia: '22 430,00 zł (umowy cywilnoprawne)'
    }
  },
  {
    rok: 2022,
    slug: '2022',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Specjalnym Ośrodku Szkolno-Wychowawczym im. Przyjaciół Dzieci w Szklarach Górnych',
    odbiorcy: 120,
    czlonkowie: 30,
    wolontariusze: 0,
    zasieg: 'Gmina, powiat',
    wspolpraca: ['Gmina Miejska Lubin', 'SOSW Szklary Górne'],
    dzialania: [
      'Akcja „Smacznego"',
      'Pomoce dydaktyczne „Poznaję i rozumiem świat"',
      'Bilety do ZOO Wrocław + transport',
      '„Aktywne wakacje" (kolonie, zamek Chojnik)',
      'Gondola w Świeradowie Zdroju',
      'Komputer do pracowni',
      'Refundacja leku na epilepsję, okulary korekcyjne'
    ],
    zadaniaKonkursowe: [
      { nazwa: '„Uśmiech dziecka"' },
      { nazwa: 'Boccia', szczegoly: '30.03–23.11.2022' },
      { nazwa: 'VIII Turniej Bocci', szczegoly: '6.06.2022, 6 powiatów' },
      { nazwa: 'I Rajd „Wędruj z Nami"', szczegoly: '1.07.2022, Nordic Walking, 30 osób' }
    ],
    finanse: {
      przychody: '71 032,30 zł', koszty: '73 796,81 zł', wynik: '-2 764,51 zł', wynikDodatni: false,
      procentPodatku: '24 062,30 zł', dotacje: '15 000,00 zł', darowizny: '56 032,30 zł', wynagrodzenia: '14 088,12 zł (7 umów cywilnoprawnych)'
    }
  },
  {
    rok: 2021,
    slug: '2021',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Zespole Szkół i Placówek Oświatowych w Lubinie',
    odbiorcy: 100,
    czlonkowie: 31,
    wolontariusze: 0,
    zasieg: 'Gmina, powiat',
    wspolpraca: ['Gmina Miejska Lubin', 'ZSiPO Lubin'],
    uwaga: 'Rok naznaczony pandemią COVID-19 — ograniczona liczba działań z powodu zakazu zgromadzeń.',
    dzialania: [
      'Akcja „Smacznego"',
      'Konkurs plastyczny „Przywróć naszą Ziemię" (Dzień Ziemi)',
      'Dofinansowanie wyjazdu do Pobierowa',
      'Komputery do pracowni',
      'Dofinansowanie systemu SPEX dla podopiecznego',
      'Paczki świąteczne dla 18 podopiecznych'
    ],
    zadaniaKonkursowe: [
      { nazwa: 'Boccia', szczegoly: '22.04–15.12.2021, pod rygorem sanitarnym COVID-19' }
    ],
    finanse: {
      przychody: '32 756,10 zł', koszty: '20 860,18 zł', wynik: '+11 895,92 zł', wynikDodatni: true,
      procentPodatku: '27 318,10 zł', dotacje: '3 000,00 zł', darowizny: '29 756,10 zł', wynagrodzenia: '3 480,00 zł (2 umowy cywilnoprawne)'
    }
  },
  {
    rok: 2020,
    slug: '2020',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Zespole Szkół i Placówek Oświatowych w Lubinie',
    odbiorcy: 50,
    czlonkowie: 31,
    wolontariusze: 0,
    zasieg: 'Gmina, powiat',
    wspolpraca: ['Gmina Miejska Lubin', 'ZSiPO Lubin'],
    uwaga: 'Rok naznaczony pandemią COVID-19 — ograniczona liczba działań.',
    dzialania: [
      'Akcja „Smacznego"',
      'Okulary dla uczennicy',
      'Refundacja leku biologicznego (całość kuracji)',
      'Remont mieszkania po zalaniu',
      'Pomoce dla uczniów niemówiących',
      'Paczki żywnościowe'
    ],
    zadaniaKonkursowe: [
      { nazwa: 'Boccia', szczegoly: '1.09–15.12.2020, pod rygorem sanitarnym COVID-19' }
    ],
    finanse: {
      przychody: '49 081,14 zł', koszty: '21 035,79 zł', wynik: '+28 045,30 zł', wynikDodatni: true,
      procentPodatku: '18 730,64 zł', dotacje: '3 700,00 zł', darowizny: '20 470,64 zł', wynagrodzenia: '3 300,00 zł (2 umowy cywilnoprawne)'
    }
  },
  {
    rok: 2019,
    slug: '2019',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Zespole Szkół i Placówek Oświatowych w Lubinie',
    odbiorcy: 150,
    czlonkowie: 34,
    wolontariusze: 0,
    zasieg: 'Gmina, powiat, kilka powiatów',
    wspolpraca: ['Powiat Lubiński', 'Urząd Marszałkowski', 'ZSiPO Lubin', 'ZHP', 'TPD'],
    dzialania: [
      'Akcja „Smacznego"',
      'Złoty gwóźdź do sztandaru z okazji 50-lecia ZSiPO',
      'Szczepionka dla podopiecznej po przeszczepie wątroby',
      'Dzień Ziemi „Podróż przez Układ Słoneczny" (Planetarium)',
      'Olimpiada „Jesteśmy Razem"',
      'Rehabilitacja ucznia, refundacja leku',
      'Puchary na VI Turniej Barbórkowy Bocci'
    ],
    zadaniaKonkursowe: [
      { nazwa: 'VII Regionalny Turniej Bocci', szczegoly: '6.06.2019, 6 powiatów (dotacja Urząd Marszałkowski/PFRON)' },
      { nazwa: '„Regionalne Wędruj z Nami"', szczegoly: 'Wycieczka do Zielonej Góry, 7.07.2019 (dotacja Powiat Lubiński)' }
    ],
    finanse: {
      przychody: '44 482,03 zł', koszty: '19 571,53 zł', wynik: '+24 910,50 zł', wynikDodatni: true,
      procentPodatku: '25 033,73 zł', dotacje: '5 400,00 zł', darowizny: '30 648,18 zł', wynagrodzenia: '3 550,00 zł (5 umów cywilnoprawnych)'
    }
  },
  {
    rok: 2018,
    slug: '2018',
    nazwaOrganizacji: '„A Tacy Sami" Stowarzyszenie przy Zespole Szkół i Placówek Oświatowych w Lubinie',
    odbiorcy: 250,
    czlonkowie: 37,
    wolontariusze: 0,
    zasieg: 'Gmina, powiat, kilka powiatów',
    wspolpraca: ['Gmina Miejska Lubin', 'Fundacja KGHM', 'ZSiPO Lubin', 'TPD', 'ZHP'],
    dzialania: [
      'Akcja „Smacznego" (kontynuacja od 2014 r.)',
      'Bal Karnawałowy „Prosto w serce"',
      'Wyjazd do Legnicy na XII Przegląd Piosenki Patriotycznej',
      'Impreza z okazji Dnia Ziemi',
      'III Marszobiegi wiosenne',
      'Dni Godności Osób Niepełnosprawnych',
      'Medale na V Barbórkowy Turniej, Mikołajki'
    ],
    zadaniaKonkursowe: [
      { nazwa: 'VI Regionalny Turniej Bocci „Sport dla każdego"', szczegoly: '16 maja 2018 (dotacja Gmina Miejska Lubin)' },
      { nazwa: '„Wioska rycerska — Dzień Dziecka"', szczegoly: '30 maja 2018, Ostaszów (dotacja Gmina Miejska Lubin)' },
      { nazwa: '„Górska przygoda, wędrówka"', szczegoly: 'Szklarska Poręba, 8–9.06.2018 (Fundacja KGHM, Powiat Lubiński)' },
      { nazwa: '„Boccia — Kreuje i Rehabilituje"', szczegoly: 'Treningi 13.04–30.11.2018, certyfikowani instruktorzy' }
    ],
    finanse: {
      przychody: '39 940,70 zł', koszty: '31 506,85 zł', wynik: '+8 433,85 zł', wynikDodatni: true,
      procentPodatku: '7 074,25 zł', dotacje: '14 000,00 zł', darowizny: '17 504,25 zł', wynagrodzenia: '2 900,00 zł (3 umowy cywilnoprawne)'
    }
  }
];
