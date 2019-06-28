window["myCustomVisual"].default.render({

  htmlJContent() {

    return {
      html() { },
      0: document.getElementById("app")
    }

  },
  visual() {
    return {
      parameters: {
        titlePath: "RedeemLocation.LocationName",
        descriptionPath: "RedeemLocation.Address",
        googleMapUrlPath: "RedeemLocation.GoogleMapUrl",
        googleMapButtonText: "Direction"
      }
    }
  },
  data() {
    return [
      {
        "RedeemLocation.LocationName": "Hui Lau Shan @ Aman Central Mall",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//6.124354,100.366791/@4.6149487,99.8763982,8z",
        "RedeemLocation.Address": "Lot 3-K06, Third Floor, Aman Central Mall,1 Aman Central, Lebuhraya Darulaman, 05100 Alor Setar, Kedah, Malaysia"
      },
      {
        "RedeemLocation.LocationName": "Hui Lau Shan @ IOI City Mall",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//2.96978,101.71407/@3.0518336,101.6092028,12z",
        "RedeemLocation.Address": "F-K4, First Floor, IOI City Mall, Lebuh IRC, IOI Resort City, 62502 Putrajaya, Malaysia."
      },
      {
        "RedeemLocation.LocationName": "MBO @ Brem Mall",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//3.204551,101.6677879/@3.1549865,101.62358,13z",
        "RedeemLocation.Address": "MBO BREM MALL, L6-11, JALAN KEPONG, KEPONG, 52000 WILAYAH PERSEKUTUAN KUALA LUMPUR"
      },
      {
        "RedeemLocation.LocationName": "MBO @ Central Square SP",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//5.6361256,100.488368/@4.3723283,99.925115,8z",
        "RedeemLocation.Address": "MBO CENTRAL SQUARE, 5TH FLOOR, CENTRAL SQUARE, JALAN KAMPUNG BARU, TAMAN PATANI JAYA, 08000 SUNGAI PETANI, KEDAH"
      },
      {
        "RedeemLocation.LocationName": "MBO @ Kluang Mall",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//1.867899,102.9488771/@2.4867678,101.216452,8z",
        "RedeemLocation.Address": "MBO KLUANG MALL LOT 2-10, 2ND FLOOR, KLUANG MALL, JALAN RAMBUTAN, 86000 KLUANG"
      },
      {
        "RedeemLocation.LocationName": "MBO @ Space U8",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//3.112136,101.551819/@3.1013848,101.5026629,12z",
        "RedeemLocation.Address": "MBO SPACE U8 2A-1-3, SPACE U8, NO 6, PERSIARAN PASAK BUMI, TAMAN BUKIT JELUTONG, SEKSYEN U8, 40150 SELANGOR"
      },
      {
        "RedeemLocation.LocationName": "Miracle Hair Expert @ AEON Big Bukit Rimau",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir/Current+Location/2.99929158012553,101.528481859714",
        "RedeemLocation.Address": "Lot No F1.26, AEON Big Bukit Rimau, Jalan Sg. Burung 32/68, Seksyen 32, 40460 Shah Alam, Selangor"
      },
      {
        "RedeemLocation.LocationName": "Miracle Hair Expert @ Bandar Bukit Tinggi",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir/Current+Location/3.01106099895191,101.43954844214",
        "RedeemLocation.Address": "49, Jalan Bayu Tinggi 2B, Bandar Bukit Tinggi, 41200 Klang, Selangor"
      },
      {
        "RedeemLocation.LocationName": "Miracle Hair Expert @ IOI Mall Puchong",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//3.045273,101.61826/@3.0717948,101.5983302,13z",
        "RedeemLocation.Address": "Premium Outlet, Lot S67, 2nd Floor, IOI Mall, Batu 9, Jalan Puchong, Bandar Puchong Jaya, 47170 Puchong, Selangor"
      },
      {
        "RedeemLocation.LocationName": "Miracle Hair Expert @ Melaka Raya",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir/Current+Location/2.18595532694527,102.253600512631",
        "RedeemLocation.Address": "65A, Jalan Melaka Raya 24, Taman Melaka Raya, 75000 Melaka"
      },
      {
        "RedeemLocation.LocationName": "Miracle Hair Expert @ Tesco Bukit Mertajam",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//5.316304,100.4759401/@4.2545904,99.9084258,8z",
        "RedeemLocation.Address": "Lot G28, Tesco Bukit Mertajam, 2323, Jalan Roznan, Pusat Perniagaan Seri Impian, 14000 Bukit Mertajam, Pulau Pinang"
      },
      {
        "RedeemLocation.LocationName": "Miracle Hair Expert @ USJ Taipan",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//3.0491969,101.5842322/@3.080207,101.5719192,13z",
        "RedeemLocation.Address": "33, Jalan USJ 10/1D, USJ Taipan Business Centre, 47620 Subang Jaya, Selangor"
      },
      {
        "RedeemLocation.LocationName": "Photobook Malaysia",
        "RedeemLocation.GoogleMapUrl": "https://www.google.com/maps/dir//3.1104718,101.6658732/@3.1125533,101.6109778,13z",
        "RedeemLocation.Address": "No. 28-01, Tower B Level 28 Vertical Business Suite, Avenue 3, 8, Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur"
      }
    ]
  }
}, function () {
});