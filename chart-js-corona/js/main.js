"use strict";

// 1: data
// Array of objects
let _data = [
  {
    date: "2020-02-26",
    numberOfInfected: 1,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-02-27",
    numberOfInfected: 2,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-02-28",
    numberOfInfected: 3,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-02-29",
    numberOfInfected: 3,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-01",
    numberOfInfected: 4,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-02",
    numberOfInfected: 8,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-03",
    numberOfInfected: 13,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-04",
    numberOfInfected: 16,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-05",
    numberOfInfected: 26,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-06",
    numberOfInfected: 28,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-07",
    numberOfInfected: 37,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-08",
    numberOfInfected: 85,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-09",
    numberOfInfected: 295,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-10",
    numberOfInfected: 551,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  },
  {
    date: "2020-03-11",
    numberOfInfected: 758,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 1
  },
  {
    date: "2020-03-12",
    numberOfInfected: 802,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 1
  },
  {
    date: "2020-03-13",
    numberOfInfected: 835,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 1
  },
  {
    date: "2020-03-14",
    numberOfInfected: 872,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 3
  },
  {
    date: "2020-03-15",
    numberOfInfected: 917,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 4
  },
  {
    date: "2020-03-16",
    numberOfInfected: 991,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 5
  },
  {
    date: "2020-03-17",
    numberOfInfected: 1067,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 6
  },
  {
    date: "2020-03-18",
    numberOfInfected: 1150,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 10
  },
  {
    date: "2020-03-19",
    numberOfInfected: 1257,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 16
  },
  {
    date: "2020-03-20",
    numberOfInfected: 1360,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 19
  },
  {
    date: "2020-03-21",
    numberOfInfected: 1408,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 22
  },
  {
    date: "2020-03-22",
    numberOfInfected: 1470,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 25
  },
  {
    date: "2020-03-23",
    numberOfInfected: 1602,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 32
  },
  {
    date: "2020-03-24",
    numberOfInfected: 1741,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 37
  },
  {
    date: "2020-03-25",
    numberOfInfected: 1892,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 43
  },
  {
    date: "2020-03-26",
    numberOfInfected: 2063,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 55
  },
  {
    date: "2020-03-27",
    numberOfInfected: 2280,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 67
  },
  {
    date: "2020-03-28",
    numberOfInfected: 2480,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 76
  },
  {
    date: "2020-03-29",
    numberOfInfected: 2608,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 84
  },
  {
    date: "2020-03-30",
    numberOfInfected: 2921,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 95
  },
  {
    date: "2020-03-31",
    numberOfInfected: 3176,
    numberOfRecovered: null,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 110
  },
  {
    date: "2020-04-01",
    numberOfInfected: 3458,
    numberOfRecovered: 894,
    numberOfCurrentlyInfected: 2432,
    numberOfDeaths: 132
  },
  {
    date: "2020-04-02",
    numberOfInfected: 3840,
    numberOfRecovered: 1093,
    numberOfCurrentlyInfected: 2597,
    numberOfDeaths: 150
  },
  {
    date: "2020-04-03",
    numberOfInfected: 4313,
    numberOfRecovered: 1093,
    numberOfCurrentlyInfected: 3050,
    numberOfDeaths: 170
  },
  {
    date: "2020-04-04",
    numberOfInfected: 4625,
    numberOfRecovered: 1283,
    numberOfCurrentlyInfected: 3157,
    numberOfDeaths: 185
  },
  {
    date: "2020-04-05",
    numberOfInfected: 4783,
    numberOfRecovered: 1327,
    numberOfCurrentlyInfected: 3259,
    numberOfDeaths: 197
  },
  {
    date: "2020-04-06",
    numberOfInfected: 5207,
    numberOfRecovered: 1378,
    numberOfCurrentlyInfected: 3615,
    numberOfDeaths: 214
  },
  {
    date: "2020-04-07",
    numberOfInfected: 5554,
    numberOfRecovered: 1491,
    numberOfCurrentlyInfected: 3837,
    numberOfDeaths: 226
  },
  {
    date: "2020-04-08",
    numberOfInfected: 5855,
    numberOfRecovered: 1621,
    numberOfCurrentlyInfected: 3993,
    numberOfDeaths: 241
  },
  {
    date: "2020-04-09",
    numberOfInfected: 5995,
    numberOfRecovered: 1736,
    numberOfCurrentlyInfected: 4005,
    numberOfDeaths: 254
  },
  {
    date: "2020-04-10",
    numberOfInfected: 6137,
    numberOfRecovered: 1773,
    numberOfCurrentlyInfected: 4094,
    numberOfDeaths: 270
  },
  {
    date: "2020-04-11",
    numberOfInfected: 6277,
    numberOfRecovered: 1955,
    numberOfCurrentlyInfected: 4041,
    numberOfDeaths: 281
  },
  {
    date: "2020-04-12",
    numberOfInfected: 6434,
    numberOfRecovered: 2123,
    numberOfCurrentlyInfected: 4019,
    numberOfDeaths: 292
  },
  {
    date: "2020-04-13",
    numberOfInfected: 6590,
    numberOfRecovered: 2235,
    numberOfCurrentlyInfected: 4047,
    numberOfDeaths: 308
  },
  {
    date: "2020-04-14",
    numberOfInfected: 6848,
    numberOfRecovered: 2515,
    numberOfCurrentlyInfected: 4013,
    numberOfDeaths: 320
  },
  {
    date: "2020-04-15",
    numberOfInfected: 7047,
    numberOfRecovered: 2748,
    numberOfCurrentlyInfected: 3969,
    numberOfDeaths: 330
  },
  {
    date: "2020-04-16",
    numberOfInfected: 7225,
    numberOfRecovered: 3023,
    numberOfCurrentlyInfected: 3860,
    numberOfDeaths: 342
  },
  {
    date: "2020-04-17",
    numberOfInfected: 7393,
    numberOfRecovered: 3389,
    numberOfCurrentlyInfected: 3653,
    numberOfDeaths: 351
  },
  {
    date: "2020-04-18",
    numberOfInfected: 7499,
    numberOfRecovered: 3847,
    numberOfCurrentlyInfected: 3291,
    numberOfDeaths: 361
  },
  {
    date: "2020-04-19",
    numberOfInfected: 7613,
    numberOfRecovered: 4141,
    numberOfCurrentlyInfected: 3105,
    numberOfDeaths: 367
  },
  {
    date: "2020-04-20",
    numberOfInfected: 7828,
    numberOfRecovered: 4312,
    numberOfCurrentlyInfected: 3142,
    numberOfDeaths: 374
  },
  {
    date: "2020-04-21",
    numberOfInfected: 8030,
    numberOfRecovered: 4700,
    numberOfCurrentlyInfected: 2944,
    numberOfDeaths: 386
  },
  {
    date: "2020-04-22",
    numberOfInfected: 8259,
    numberOfRecovered: 5087,
    numberOfCurrentlyInfected: 2772,
    numberOfDeaths: 400
  },
  {
    date: "2020-04-23",
    numberOfInfected: 8491,
    numberOfRecovered: 5384,
    numberOfCurrentlyInfected: 2697,
    numberOfDeaths: 410
  },
  {
    date: "2020-04-24",
    numberOfInfected: 8656,
    numberOfRecovered: 5526,
    numberOfCurrentlyInfected: 2714,
    numberOfDeaths: 416
  },
  {
    date: "2020-04-25",
    numberOfInfected: 8792,
    numberOfRecovered: 5669,
    numberOfCurrentlyInfected: 2702,
    numberOfDeaths: 421
  },
  {
    date: "2020-04-26",
    numberOfInfected: 8914,
    numberOfRecovered: 5805,
    numberOfCurrentlyInfected: 2683,
    numberOfDeaths: 426
  },
  {
    date: "2020-04-27",
    numberOfInfected: 9133,
    numberOfRecovered: 5959,
    numberOfCurrentlyInfected: 2739,
    numberOfDeaths: 435
  },
  {
    date: "2020-04-28",
    numberOfInfected: 9269,
    numberOfRecovered: 6121,
    numberOfCurrentlyInfected: 2703,
    numberOfDeaths: 445
  },
  {
    date: "2020-04-29",
    numberOfInfected: 9409,
    numberOfRecovered: 6366,
    numberOfCurrentlyInfected: 2589,
    numberOfDeaths: 454
  },
  {
    date: "2020-04-30",
    numberOfInfected: 9559,
    numberOfRecovered: 6546,
    numberOfCurrentlyInfected: 2550,
    numberOfDeaths: 463
  },
  {
    date: "2020-05-01",
    numberOfInfected: 9712,
    numberOfRecovered: 6729,
    numberOfCurrentlyInfected: 2509,
    numberOfDeaths: 474
  },
  {
    date: "2020-05-02",
    numberOfInfected: 9829,
    numberOfRecovered: 6889,
    numberOfCurrentlyInfected: 2458,
    numberOfDeaths: 482
  },
  {
    date: "2020-05-03",
    numberOfInfected: 9907,
    numberOfRecovered: 6987,
    numberOfCurrentlyInfected: 2429,
    numberOfDeaths: 491
  },
  {
    date: "2020-05-04",
    numberOfInfected: 10030,
    numberOfRecovered: 7088,
    numberOfCurrentlyInfected: 2444,
    numberOfDeaths: 498
  },
  {
    date: "2020-05-05",
    numberOfInfected: 10153,
    numberOfRecovered: 7296,
    numberOfCurrentlyInfected: 2356,
    numberOfDeaths: 501
  },
  {
    date: "2020-05-06",
    numberOfInfected: 10260,
    numberOfRecovered: 7493,
    numberOfCurrentlyInfected: 2260,
    numberOfDeaths: 507
  },
  {
    date: "2020-05-07",
    numberOfInfected: 10384,
    numberOfRecovered: 7711,
    numberOfCurrentlyInfected: 2160,
    numberOfDeaths: 513
  },
  {
    date: "2020-05-08",
    numberOfInfected: 10453,
    numberOfRecovered: 7927,
    numberOfCurrentlyInfected: 2009,
    numberOfDeaths: 517
  },
  {
    date: "2020-05-09",
    numberOfInfected: 10518,
    numberOfRecovered: 8093,
    numberOfCurrentlyInfected: 1905,
    numberOfDeaths: 520
  },
  {
    date: "2020-05-10",
    numberOfInfected: 10578,
    numberOfRecovered: 8217,
    numberOfCurrentlyInfected: 1836,
    numberOfDeaths: 525
  },
  {
    date: "2020-05-11",
    numberOfInfected: 10657,
    numberOfRecovered: 8328,
    numberOfCurrentlyInfected: 1800,
    numberOfDeaths: 529
  },
  {
    date: "2020-05-12",
    numberOfInfected: 10715,
    numberOfRecovered: 8530,
    numberOfCurrentlyInfected: 1649,
    numberOfDeaths: 536
  },
  {
    date: "2020-05-13",
    numberOfInfected: 10786,
    numberOfRecovered: 8580,
    numberOfCurrentlyInfected: 1665,
    numberOfDeaths: 541
  },
  {
    date: "2020-05-14",
    numberOfInfected: 10850,
    numberOfRecovered: 8805,
    numberOfCurrentlyInfected: 1504,
    numberOfDeaths: 541
  },
  {
    date: "2020-05-15",
    numberOfInfected: 10941,
    numberOfRecovered: 8959,
    numberOfCurrentlyInfected: 1435,
    numberOfDeaths: 547
  },
  {
    date: "2020-05-16",
    numberOfInfected: 10976,
    numberOfRecovered: 9107,
    numberOfCurrentlyInfected: 1319,
    numberOfDeaths: 550
  },
  {
    date: "2020-05-17",
    numberOfInfected: 11026,
    numberOfRecovered: 9227,
    numberOfCurrentlyInfected: 1246,
    numberOfDeaths: 553
  },
  {
    date: "2020-05-18",
    numberOfInfected: 11107,
    numberOfRecovered: 9301,
    numberOfCurrentlyInfected: 1250,
    numberOfDeaths: 556
  },
  {
    date: "2020-05-19",
    numberOfInfected: 11172,
    numberOfRecovered: 9416,
    numberOfCurrentlyInfected: 1198,
    numberOfDeaths: 558
  },
  {
    date: "2020-05-20",
    numberOfInfected: 11244,
    numberOfRecovered: 9536,
    numberOfCurrentlyInfected: 1145,
    numberOfDeaths: 563
  },
  {
    date: "2020-05-21",
    numberOfInfected: 11275,
    numberOfRecovered: 9643,
    numberOfCurrentlyInfected: 1069,
    numberOfDeaths: 563
  },
  {
    date: "2020-05-22",
    numberOfInfected: 11348,
    numberOfRecovered: 9764,
    numberOfCurrentlyInfected: 1020,
    numberOfDeaths: 564
  },
  {
    date: "2020-05-23",
    numberOfInfected: 11384,
    numberOfRecovered: 9836,
    numberOfCurrentlyInfected: 983,
    numberOfDeaths: 565
  },
  {
    date: "2020-05-24",
    numberOfInfected: 11420,
    numberOfRecovered: 9900,
    numberOfCurrentlyInfected: 954,
    numberOfDeaths: 566
  },
  {
    date: "2020-05-25",
    numberOfInfected: 11472,
    numberOfRecovered: 9964,
    numberOfCurrentlyInfected: 942,
    numberOfDeaths: 566
  },
  {
    date: "2020-05-26",
    numberOfInfected: 11535,
    numberOfRecovered: 10044,
    numberOfCurrentlyInfected: 922,
    numberOfDeaths: 569
  },
  {
    date: "2020-05-27",
    numberOfInfected: 11587,
    numberOfRecovered: 10106,
    numberOfCurrentlyInfected: 911,
    numberOfDeaths: 570
  },
  {
    date: "2020-05-28",
    numberOfInfected: 11626,
    numberOfRecovered: 10180,
    numberOfCurrentlyInfected: 876,
    numberOfDeaths: 570
  },
  {
    date: "2020-05-29",
    numberOfInfected: 11672,
    numberOfRecovered: 10240,
    numberOfCurrentlyInfected: 861,
    numberOfDeaths: 571
  },
  {
    date: "2020-05-30",
    numberOfInfected: 11705,
    numberOfRecovered: 10327,
    numberOfCurrentlyInfected: 803,
    numberOfDeaths: 575
  },
  {
    date: "2020-05-31",
    numberOfInfected: 11727,
    numberOfRecovered: 10362,
    numberOfCurrentlyInfected: 788,
    numberOfDeaths: 577
  },
  {
    date: "2020-06-01",
    numberOfInfected: 11763,
    numberOfRecovered: 10412,
    numberOfCurrentlyInfected: 771,
    numberOfDeaths: 580
  },
  {
    date: "2020-06-02",
    numberOfInfected: 11819,
    numberOfRecovered: 10489,
    numberOfCurrentlyInfected: 749,
    numberOfDeaths: 581
  },
  {
    date: "2020-06-03",
    numberOfInfected: 11873,
    numberOfRecovered: 10552,
    numberOfCurrentlyInfected: 739,
    numberOfDeaths: 582
  },
  {
    date: "2020-06-04",
    numberOfInfected: 11915,
    numberOfRecovered: 10620,
    numberOfCurrentlyInfected: 709,
    numberOfDeaths: 586
  },
  {
    date: "2020-06-05",
    numberOfInfected: 11950,
    numberOfRecovered: 10653,
    numberOfCurrentlyInfected: 709,
    numberOfDeaths: 588
  },
  {
    date: "2020-06-06",
    numberOfInfected: 11965,
    numberOfRecovered: 10721,
    numberOfCurrentlyInfected: 653,
    numberOfDeaths: 591
  },
  {
    date: "2020-06-07",
    numberOfInfected: 11979,
    numberOfRecovered: 10755,
    numberOfCurrentlyInfected: 631,
    numberOfDeaths: 593
  },
  {
    date: "2020-06-08",
    numberOfInfected: 12025,
    numberOfRecovered: 10792,
    numberOfCurrentlyInfected: 640,
    numberOfDeaths: 593
  },
  {
    date: "2020-06-09",
    numberOfInfected: 12053,
    numberOfRecovered: 10849,
    numberOfCurrentlyInfected: 611,
    numberOfDeaths: 593
  },
  {
    date: "2020-06-10",
    numberOfInfected: 12093,
    numberOfRecovered: 10904,
    numberOfCurrentlyInfected: 596,
    numberOfDeaths: 593
  },
  {
    date: "2020-06-11",
    numberOfInfected: 12141,
    numberOfRecovered: 10955,
    numberOfCurrentlyInfected: 592,
    numberOfDeaths: 594
  },
  {
    date: "2020-06-12",
    numberOfInfected: 12201,
    numberOfRecovered: 10993,
    numberOfCurrentlyInfected: 611,
    numberOfDeaths: 597
  },
  {
    date: "2020-06-13",
    numberOfInfected: 12228,
    numberOfRecovered: 11035,
    numberOfCurrentlyInfected: 596,
    numberOfDeaths: 597
  },
  {
    date: "2020-06-14",
    numberOfInfected: 12250,
    numberOfRecovered: 11068,
    numberOfCurrentlyInfected: 584,
    numberOfDeaths: 598
  },
  {
    date: "2020-06-15",
    numberOfInfected: 12290,
    numberOfRecovered: 11090,
    numberOfCurrentlyInfected: 602,
    numberOfDeaths: 598
  },
  {
    date: "2020-06-16",
    numberOfInfected: 12336,
    numberOfRecovered: 11125,
    numberOfCurrentlyInfected: 612,
    numberOfDeaths: 599
  },
  {
    date: "2020-06-17",
    numberOfInfected: 12412,
    numberOfRecovered: 11185,
    numberOfCurrentlyInfected: 627,
    numberOfDeaths: 600
  },
  {
    date: "2020-06-18",
    numberOfInfected: 12458,
    numberOfRecovered: 11242,
    numberOfCurrentlyInfected: 615,
    numberOfDeaths: 601
  },
  {
    date: "2020-06-19",
    numberOfInfected: 12502,
    numberOfRecovered: 11282,
    numberOfCurrentlyInfected: 618,
    numberOfDeaths: 602
  },
  {
    date: "2020-06-20",
    numberOfInfected: 12540,
    numberOfRecovered: 11282,
    numberOfCurrentlyInfected: 655,
    numberOfDeaths: 603
  },
  {
    date: "2020-06-21",
    numberOfInfected: 12573,
    numberOfRecovered: 11282,
    numberOfCurrentlyInfected: 688,
    numberOfDeaths: 603
  },
  {
    date: "2020-06-22",
    numberOfInfected: 12619,
    numberOfRecovered: 11347,
    numberOfCurrentlyInfected: 669,
    numberOfDeaths: 603
  },
  {
    date: "2020-06-23",
    numberOfInfected: 12638,
    numberOfRecovered: 11393,
    numberOfCurrentlyInfected: 641,
    numberOfDeaths: 604
  },
  {
    date: "2020-06-24",
    numberOfInfected: 12683,
    numberOfRecovered: 11422,
    numberOfCurrentlyInfected: 657,
    numberOfDeaths: 604
  },
  {
    date: "2020-06-25",
    numberOfInfected: 12715,
    numberOfRecovered: 11460,
    numberOfCurrentlyInfected: 650,
    numberOfDeaths: 605
  },
  {
    date: "2020-06-26",
    numberOfInfected: 12738,
    numberOfRecovered: 11508,
    numberOfCurrentlyInfected: 625,
    numberOfDeaths: 605
  },
  {
    date: "2020-06-27",
    numberOfInfected: 12757,
    numberOfRecovered: 11612,
    numberOfCurrentlyInfected: 540,
    numberOfDeaths: 605
  },
  {
    date: "2020-06-28",
    numberOfInfected: 12768,
    numberOfRecovered: 11612,
    numberOfCurrentlyInfected: 550,
    numberOfDeaths: 606
  },
  {
    date: "2020-06-29",
    numberOfInfected: 12798,
    numberOfRecovered: 11612,
    numberOfCurrentlyInfected: 580,
    numberOfDeaths: 606
  },
  {
    date: "2020-06-30",
    numberOfInfected: 12822,
    numberOfRecovered: 11649,
    numberOfCurrentlyInfected: 567,
    numberOfDeaths: 606
  },
  {
    date: "2020-07-01",
    numberOfInfected: 12834,
    numberOfRecovered: 11693,
    numberOfCurrentlyInfected: 535,
    numberOfDeaths: 606
  },
  {
    date: "2020-07-02",
    numberOfInfected: 12849,
    numberOfRecovered: 11769,
    numberOfCurrentlyInfected: 474,
    numberOfDeaths: 606
  },
  {
    date: "2020-07-03",
    numberOfInfected: 12868,
    numberOfRecovered: 11817,
    numberOfCurrentlyInfected: 445,
    numberOfDeaths: 606
  },
  {
    date: "2020-07-04",
    numberOfInfected: 12881,
    numberOfRecovered: 11817,
    numberOfCurrentlyInfected: 457,
    numberOfDeaths: 607
  },
  {
    date: "2020-07-05",
    numberOfInfected: 12892,
    numberOfRecovered: 11817,
    numberOfCurrentlyInfected: 468,
    numberOfDeaths: 607
  },
  {
    date: "2020-07-06",
    numberOfInfected: 12901,
    numberOfRecovered: 11935,
    numberOfCurrentlyInfected: 357,
    numberOfDeaths: 609
  },
  {
    date: "2020-07-07",
    numberOfInfected: 12914,
    numberOfRecovered: 11983,
    numberOfCurrentlyInfected: 322,
    numberOfDeaths: 609
  },
  {
    date: "2020-07-08",
    numberOfInfected: 12940,
    numberOfRecovered: 12001,
    numberOfCurrentlyInfected: 330,
    numberOfDeaths: 609
  },
  {
    date: "2020-07-09",
    numberOfInfected: 12981,
    numberOfRecovered: 12045,
    numberOfCurrentlyInfected: 327,
    numberOfDeaths: 609
  },
  {
    date: "2020-07-10",
    numberOfInfected: 13015,
    numberOfRecovered: 12077,
    numberOfCurrentlyInfected: 328,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-11",
    numberOfInfected: 13039,
    numberOfRecovered: 12077,
    numberOfCurrentlyInfected: 352,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-12",
    numberOfInfected: 13061,
    numberOfRecovered: 12077,
    numberOfCurrentlyInfected: 374,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-13",
    numberOfInfected: 13094,
    numberOfRecovered: 12130,
    numberOfCurrentlyInfected: 354,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-14",
    numberOfInfected: 13128,
    numberOfRecovered: 12160,
    numberOfCurrentlyInfected: 358,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-15",
    numberOfInfected: 13170,
    numberOfRecovered: 12182,
    numberOfCurrentlyInfected: 378,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-16",
    numberOfInfected: 13222,
    numberOfRecovered: 12195,
    numberOfCurrentlyInfected: 417,
    numberOfDeaths: 610
  },
  {
    date: "2020-07-17",
    numberOfInfected: 13254,
    numberOfRecovered: 12209,
    numberOfCurrentlyInfected: 434,
    numberOfDeaths: 611
  },
  {
    date: "2020-07-18",
    numberOfInfected: 13297,
    numberOfRecovered: 12209,
    numberOfCurrentlyInfected: 477,
    numberOfDeaths: 611
  },
  {
    date: "2020-07-19",
    numberOfInfected: 13325,
    numberOfRecovered: 12209,
    numberOfCurrentlyInfected: 505,
    numberOfDeaths: 611
  },
  {
    date: "2020-07-20",
    numberOfInfected: 13357,
    numberOfRecovered: 12251,
    numberOfCurrentlyInfected: 495,
    numberOfDeaths: 611
  },
  {
    date: "2020-07-21",
    numberOfInfected: 13394,
    numberOfRecovered: 12261,
    numberOfCurrentlyInfected: 522,
    numberOfDeaths: 611
  },
  {
    date: "2020-07-22",
    numberOfInfected: 13429,
    numberOfRecovered: 12274,
    numberOfCurrentlyInfected: 542,
    numberOfDeaths: 613
  },
  {
    date: "2020-07-23",
    numberOfInfected: 13483,
    numberOfRecovered: 12299,
    numberOfCurrentlyInfected: 571,
    numberOfDeaths: 613
  },
  {
    date: "2020-07-24",
    numberOfInfected: 13520,
    numberOfRecovered: 12340,
    numberOfCurrentlyInfected: 567,
    numberOfDeaths: 613
  },
  {
    date: "2020-07-25",
    numberOfInfected: 13547,
    numberOfRecovered: 12340,
    numberOfCurrentlyInfected: 594,
    numberOfDeaths: 613
  },
  {
    date: "2020-07-26",
    numberOfInfected: 13571,
    numberOfRecovered: 12340,
    numberOfCurrentlyInfected: 618,
    numberOfDeaths: 613
  },
  {
    date: "2020-07-27",
    numberOfInfected: 13635,
    numberOfRecovered: 12417,
    numberOfCurrentlyInfected: 605,
    numberOfDeaths: 613
  },
  {
    date: "2020-07-28",
    numberOfInfected: 13713,
    numberOfRecovered: 12451,
    numberOfCurrentlyInfected: 648,
    numberOfDeaths: 614
  },
  {
    date: "2020-07-29",
    numberOfInfected: 13778,
    numberOfRecovered: 12485,
    numberOfCurrentlyInfected: 678,
    numberOfDeaths: 615
  },
  {
    date: "2020-07-30",
    numberOfInfected: 13862,
    numberOfRecovered: 12526,
    numberOfCurrentlyInfected: 721,
    numberOfDeaths: 615
  },
  {
    date: "2020-07-31",
    numberOfInfected: 13920,
    numberOfRecovered: 12578,
    numberOfCurrentlyInfected: 726,
    numberOfDeaths: 616
  },
  {
    date: "2020-08-01",
    numberOfInfected: 13984,
    numberOfRecovered: 12578,
    numberOfCurrentlyInfected: 790,
    numberOfDeaths: 616
  },
  {
    date: "2020-08-02",
    numberOfInfected: 14062,
    numberOfRecovered: 12578,
    numberOfCurrentlyInfected: 868,
    numberOfDeaths: 616
  },
  {
    date: "2020-08-03",
    numberOfInfected: 14179,
    numberOfRecovered: 12682,
    numberOfCurrentlyInfected: 881,
    numberOfDeaths: 616
  },
  {
    date: "2020-08-04",
    numberOfInfected: 14301,
    numberOfRecovered: 12715,
    numberOfCurrentlyInfected: 970,
    numberOfDeaths: 616
  },
  {
    date: "2020-08-05",
    numberOfInfected: 14419,
    numberOfRecovered: 12753,
    numberOfCurrentlyInfected: 1049,
    numberOfDeaths: 617
  },
  {
    date: "2020-08-06",
    numberOfInfected: 14593,
    numberOfRecovered: 12787,
    numberOfCurrentlyInfected: 1189,
    numberOfDeaths: 617
  },
  {
    date: "2020-08-07",
    numberOfInfected: 14736,
    numberOfRecovered: 12840,
    numberOfCurrentlyInfected: 1279,
    numberOfDeaths: 617
  },
  {
    date: "2020-08-08",
    numberOfInfected: 14826,
    numberOfRecovered: 12840,
    numberOfCurrentlyInfected: 1368,
    numberOfDeaths: 618
  },
  {
    date: "2020-08-09",
    numberOfInfected: 14956,
    numberOfRecovered: 12840,
    numberOfCurrentlyInfected: 1496,
    numberOfDeaths: 620
  },
  {
    date: "2020-08-10",
    numberOfInfected: 15111,
    numberOfRecovered: 12925,
    numberOfCurrentlyInfected: 1565,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-11",
    numberOfInfected: 15247,
    numberOfRecovered: 12988,
    numberOfCurrentlyInfected: 1638,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-12",
    numberOfInfected: 15408,
    numberOfRecovered: 13066,
    numberOfCurrentlyInfected: 1721,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-13",
    numberOfInfected: 15524,
    numberOfRecovered: 13131,
    numberOfCurrentlyInfected: 1772,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-14",
    numberOfInfected: 15636,
    numberOfRecovered: 13216,
    numberOfCurrentlyInfected: 1799,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-15",
    numberOfInfected: 15763,
    numberOfRecovered: 13275,
    numberOfCurrentlyInfected: 1867,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-16",
    numberOfInfected: 15853,
    numberOfRecovered: 13340,
    numberOfCurrentlyInfected: 1892,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-17",
    numberOfInfected: 15949,
    numberOfRecovered: 13417,
    numberOfCurrentlyInfected: 1911,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-18",
    numberOfInfected: 16063,
    numberOfRecovered: 13529,
    numberOfCurrentlyInfected: 1913,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-19",
    numberOfInfected: 16150,
    numberOfRecovered: 13651,
    numberOfCurrentlyInfected: 1878,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-20",
    numberOfInfected: 16237,
    numberOfRecovered: 13769,
    numberOfCurrentlyInfected: 1847,
    numberOfDeaths: 621
  },
  {
    date: "2020-08-21",
    numberOfInfected: 16324,
    numberOfRecovered: 13944,
    numberOfCurrentlyInfected: 1758,
    numberOfDeaths: 622
  },
  {
    date: "2020-08-22",
    numberOfInfected: 16413,
    numberOfRecovered: 14091,
    numberOfCurrentlyInfected: 1699,
    numberOfDeaths: 623
  },
  {
    date: "2020-08-23",
    numberOfInfected: 16488,
    numberOfRecovered: 14180,
    numberOfCurrentlyInfected: 1685,
    numberOfDeaths: 623
  },
  {
    date: "2020-08-24",
    numberOfInfected: 16563,
    numberOfRecovered: 14310,
    numberOfCurrentlyInfected: 1630,
    numberOfDeaths: 623
  },
  {
    date: "2020-08-25",
    numberOfInfected: 16644,
    numberOfRecovered: 14465,
    numberOfCurrentlyInfected: 1555,
    numberOfDeaths: 624
  },
  {
    date: "2020-08-26",
    numberOfInfected: 16724,
    numberOfRecovered: 14603,
    numberOfCurrentlyInfected: 1497,
    numberOfDeaths: 624
  },
  {
    date: "2020-08-27",
    numberOfInfected: 16795,
    numberOfRecovered: 14763,
    numberOfCurrentlyInfected: 1408,
    numberOfDeaths: 624
  },
  {
    date: "2020-08-28",
    numberOfInfected: 16904,
    numberOfRecovered: 14877,
    numberOfCurrentlyInfected: 1403,
    numberOfDeaths: 624
  },
  {
    date: "2020-08-29",
    numberOfInfected: 16993,
    numberOfRecovered: 14989,
    numberOfCurrentlyInfected: 1380,
    numberOfDeaths: 624
  },
  {
    date: "2020-08-30",
    numberOfInfected: 17097,
    numberOfRecovered: 15116,
    numberOfCurrentlyInfected: 1357,
    numberOfDeaths: 624
  },
  {
    date: "2020-08-31",
    numberOfInfected: 17218,
    numberOfRecovered: 15205,
    numberOfCurrentlyInfected: 1387,
    numberOfDeaths: 626
  },
  {
    date: "2020-09-01",
    numberOfInfected: 17419,
    numberOfRecovered: 15300,
    numberOfCurrentlyInfected: 1493,
    numberOfDeaths: 626
  },
  {
    date: "2020-09-02",
    numberOfInfected: 17578,
    numberOfRecovered: 15413,
    numberOfCurrentlyInfected: 1539,
    numberOfDeaths: 626
  },
  {
    date: "2020-09-03",
    numberOfInfected: 17772,
    numberOfRecovered: 15499,
    numberOfCurrentlyInfected: 1646,
    numberOfDeaths: 627
  },
  {
    date: "2020-09-04",
    numberOfInfected: 17977,
    numberOfRecovered: 15586,
    numberOfCurrentlyInfected: 1764,
    numberOfDeaths: 627
  },
  {
    date: "2020-09-05",
    numberOfInfected: 18175,
    numberOfRecovered: 15671,
    numberOfCurrentlyInfected: 1877,
    numberOfDeaths: 627
  },
  {
    date: "2020-09-06",
    numberOfInfected: 18399,
    numberOfRecovered: 15760,
    numberOfCurrentlyInfected: 2011,
    numberOfDeaths: 628
  },
  {
    date: "2020-09-07",
    numberOfInfected: 18696,
    numberOfRecovered: 15833,
    numberOfCurrentlyInfected: 2235,
    numberOfDeaths: 628
  },
  {
    date: "2020-09-08",
    numberOfInfected: 19025,
    numberOfRecovered: 15907,
    numberOfCurrentlyInfected: 2490,
    numberOfDeaths: 628
  },
  {
    date: "2020-09-09",
    numberOfInfected: 19318,
    numberOfRecovered: 15990,
    numberOfCurrentlyInfected: 2699,
    numberOfDeaths: 629
  },
  {
    date: "2020-09-10",
    numberOfInfected: 19689,
    numberOfRecovered: 16069,
    numberOfCurrentlyInfected: 2991,
    numberOfDeaths: 629
  },
  {
    date: "2020-09-11",
    numberOfInfected: 20037,
    numberOfRecovered: 16139,
    numberOfCurrentlyInfected: 3268,
    numberOfDeaths: 630
  },
  {
    date: "2020-09-12",
    numberOfInfected: 20339,
    numberOfRecovered: 16247,
    numberOfCurrentlyInfected: 3461,
    numberOfDeaths: 631
  },
  {
    date: "2020-09-13",
    numberOfInfected: 20635,
    numberOfRecovered: 16333,
    numberOfCurrentlyInfected: 3669,
    numberOfDeaths: 633
  },
  {
    date: "2020-09-14",
    numberOfInfected: 21017,
    numberOfRecovered: 16437,
    numberOfCurrentlyInfected: 3947,
    numberOfDeaths: 633
  },
  {
    date: "2020-09-15",
    numberOfInfected: 21456,
    numberOfRecovered: 16557,
    numberOfCurrentlyInfected: 4265,
    numberOfDeaths: 634
  },
  {
    date: "2020-09-16",
    numberOfInfected: 22015,
    numberOfRecovered: 16557,
    numberOfCurrentlyInfected: 4823,
    numberOfDeaths: 635
  },
  {
    date: "2020-09-17",
    numberOfInfected: 22531,
    numberOfRecovered: 16918,
    numberOfCurrentlyInfected: 4978,
    numberOfDeaths: 635
  },
  {
    date: "2020-09-18",
    numberOfInfected: 23008,
    numberOfRecovered: 17110,
    numberOfCurrentlyInfected: 5263,
    numberOfDeaths: 635
  },
  {
    date: "2020-09-19",
    numberOfInfected: 23429,
    numberOfRecovered: 17316,
    numberOfCurrentlyInfected: 5475,
    numberOfDeaths: 638
  },
  {
    date: "2020-09-20",
    numberOfInfected: 23840,
    numberOfRecovered: 17514,
    numberOfCurrentlyInfected: 5685,
    numberOfDeaths: 641
  },
  {
    date: "2020-09-21",
    numberOfInfected: 24376,
    numberOfRecovered: 17738,
    numberOfCurrentlyInfected: 5996,
    numberOfDeaths: 642
  },
  {
    date: "2020-09-22",
    numberOfInfected: 24967,
    numberOfRecovered: 18035,
    numberOfCurrentlyInfected: 6288,
    numberOfDeaths: 644
  },
  {
    date: "2020-09-23",
    numberOfInfected: 25619,
    numberOfRecovered: 18359,
    numberOfCurrentlyInfected: 6615,
    numberOfDeaths: 645
  },
  {
    date: "2020-09-24",
    numberOfInfected: 26226,
    numberOfRecovered: 18646,
    numberOfCurrentlyInfected: 6933,
    numberOfDeaths: 647
  },
  {
    date: "2020-09-25",
    numberOfInfected: 26714,
    numberOfRecovered: 19010,
    numberOfCurrentlyInfected: 7056,
    numberOfDeaths: 648
  },
  {
    date: "2020-09-26",
    numberOfInfected: 27108,
    numberOfRecovered: 19350,
    numberOfCurrentlyInfected: 7109,
    numberOfDeaths: 649
  },
  {
    date: "2020-09-27",
    numberOfInfected: 27465,
    numberOfRecovered: 19650,
    numberOfCurrentlyInfected: 7166,
    numberOfDeaths: 649
  },
  {
    date: "2020-09-28",
    numberOfInfected: 27949,
    numberOfRecovered: 19942,
    numberOfCurrentlyInfected: 7357,
    numberOfDeaths: 650
  },
  {
    date: "2020-09-29",
    numberOfInfected: 28400,
    numberOfRecovered: 20320,
    numberOfCurrentlyInfected: 7429,
    numberOfDeaths: 651
  },
  {
    date: "2020-09-30",
    numberOfInfected: 28838,
    numberOfRecovered: 20754,
    numberOfCurrentlyInfected: 7433,
    numberOfDeaths: 651
  },
  {
    date: "2020-10-01",
    numberOfInfected: 29271,
    numberOfRecovered: 21309,
    numberOfCurrentlyInfected: 7309,
    numberOfDeaths: 653
  },
  {
    date: "2020-10-02",
    numberOfInfected: 29639,
    numberOfRecovered: 21824,
    numberOfCurrentlyInfected: 7160,
    numberOfDeaths: 655
  },
  {
    date: "2020-10-03",
    numberOfInfected: 29978,
    numberOfRecovered: 22297,
    numberOfCurrentlyInfected: 7023,
    numberOfDeaths: 658
  },
  {
    date: "2020-10-04",
    numberOfInfected: 30291,
    numberOfRecovered: 22716,
    numberOfCurrentlyInfected: 6914,
    numberOfDeaths: 661
  },
  {
    date: "2020-10-05",
    numberOfInfected: 30724,
    numberOfRecovered: 23122,
    numberOfCurrentlyInfected: 6939,
    numberOfDeaths: 663
  },
  {
    date: "2020-10-06",
    numberOfInfected: 31155,
    numberOfRecovered: 23665,
    numberOfCurrentlyInfected: 6827,
    numberOfDeaths: 663
  },
  {
    date: "2020-10-07",
    numberOfInfected: 31578,
    numberOfRecovered: 24250,
    numberOfCurrentlyInfected: 6664,
    numberOfDeaths: 664
  },
  {
    date: "2020-10-08",
    numberOfInfected: 31638,
    numberOfRecovered: 24899,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 665
  },
  {
    date: "2020-10-09",
    numberOfInfected: 31638,
    numberOfRecovered: 25502,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: 665
  },
  {
    date: "2020-10-10",
    numberOfInfected: null,
    numberOfRecovered: 25987,
    numberOfCurrentlyInfected: null,
    numberOfDeaths: null
  }
];

// 2: prepare data for chart
// seperating the objects to arrays: dates and infected
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let dates = [];
  let infected = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    dates.push(object.date);
    infected.push(object.numberOfInfected);
  }
  // returning the two arrays inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    dates,
    infected
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data = prepareData(_data);
  //open the developer console to inspect the result
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data.dates, // refering to the data object, holding data from prepareData()
      datasets: [{
        data: data.infected, // refering to the data object, holding data from prepareData()
        label: 'Total number of Infected',
        backgroundColor: 'rgb(172, 198, 201)', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgb(38, 76, 89)'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {
        display: true,
        text: 'Number of infected with Corona in DK'
      }
    }

  });
}

appendChart();