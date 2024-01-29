import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.lovepik.com/free-png/20211105/lovepik-food-icon-png-image_400321882_wh1200.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resobj = [
  {
    info: {
      id: "74826",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Khandari",
      areaName: "Church Road",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10800873~p=1~eid=0000018d-52c7-e756-0e3e-3d5b00aa0124~srvts=1706490849110~45826",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 11:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=74826",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "810704",
      name: "Taste Of King",
      cloudinaryImageId: "fd46711a3f610ce76b616972345b4319",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["Indian"],
      parentId: "256833",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=810704",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "727182",
      name: "Dubey Ji Da Dhaba",
      cloudinaryImageId: "c326c52d8c1018f87e22fda6964f241e",
      locality: "Madhunagar",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages"],
      avgRating: 3.8,
      veg: true,
      parentId: "427912",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=727182",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "672634",
      name: "Cake company",
      cloudinaryImageId: "b2b1dca49b700afedab06650f6c3b06d",
      locality: "Kishan garh idgah",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 3.5,
      parentId: "14785",
      avgRatingString: "3.5",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=10610114~p=2~eid=0000018d-52c7-e756-0e3e-3d5c00aa020a~srvts=1706490849110~45826",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 07:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=672634",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "561172",
      name: "Indian Rasoi",
      cloudinaryImageId: "jmugaowhlv8kqyrcah1l",
      locality: "Kamla Nagar Road",
      areaName: "Kamla Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Burgers", "Pastas"],
      avgRating: 2.9,
      veg: true,
      parentId: "3409",
      avgRatingString: "2.9",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "6.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=561172",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "815655",
      name: "Hungry Monster",
      cloudinaryImageId: "2fef59a8d61cc3861c8f0fc1cbf12a8c",
      locality: "Satya Niketan Rd",
      areaName: "Civil Lines",
      costForTwo: "₹298 for two",
      cuisines: ["Fast Food", "Chinese", "Beverages"],
      avgRating: 5,
      parentId: "104792",
      avgRatingString: "5.0",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=815655",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "672632",
      name: "Cakeology",
      cloudinaryImageId: "28b95a24183105eafe5230e7896d32d5",
      locality: "Nagar nigam food safety",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 3.5,
      veg: true,
      parentId: "55234",
      avgRatingString: "3.5",
      totalRatingsString: "10+",
      promoted: true,
      adTrackingId:
        "cid=10610134~p=3~eid=0000018d-52c7-e756-0e3e-3d5d00aa0342~srvts=1706490849110~45826",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=672632",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "810981",
      name: "Cake Factory",
      cloudinaryImageId: "0b7a0d84eea58935521e9dfdba3f8ad9",
      locality: "Nagar Nigam Food",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Bakery"],
      parentId: "2946",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=810981",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "808009",
      name: "Delhi Gate Chai Wala",
      cloudinaryImageId: "fbaf7e524c3f3dc335c76b7b35967c38",
      locality: "Jageshwar Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks"],
      parentId: "483754",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=808009",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "670304",
      name: "Desserto",
      cloudinaryImageId: "60a8b98fc9d14de1acff6cad0731923b",
      locality: "Nagar Nigam Food Safety  Zone 11",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      veg: true,
      parentId: "401813",
      avgRatingString: "--",
      promoted: true,
      adTrackingId:
        "cid=10609342~p=5~eid=0000018d-52c7-e756-0e3e-3d5f00aa0503~srvts=1706490849110~45826",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=670304",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "459576",
      name: "pandit ji ka dhawa",
      cloudinaryImageId: "k1iwl5ztjyeeib1qi36a",
      locality: "Tajganj",
      areaName: "Civil Lines",
      costForTwo: "₹100 for two",
      cuisines: ["North Indian", "Thalis"],
      avgRating: 3.2,
      veg: true,
      parentId: "480667",
      avgRatingString: "3.2",
      totalRatingsString: "7",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=459576",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "810701",
      name: "Thali wala Brother",
      cloudinaryImageId: "d2b3bd562cdd433230fbd5cc305e3d65",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Thalis"],
      parentId: "483478",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=810701",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "807957",
      name: "Manoj Chai Wala",
      cloudinaryImageId: "fcee676df41abe3fa8b474ece9d2b77d",
      locality: "Ward No 25",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["Indian"],
      parentId: "483757",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=807957",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "790035",
      name: "Savoury Street Food",
      cloudinaryImageId: "b14cd9fc40129fcfb97aa7e621719d07",
      locality: "Pandav Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["South Indian", "Chinese", "Tandoor", "Snacks"],
      veg: true,
      parentId: "469396",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=790035",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "817688",
      name: "Shri Balal Ji Maharaj Dhaba And Family Restaurant",
      cloudinaryImageId: "2bac7a35febc2ae024028977b0e0ea82",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      parentId: "487288",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=817688",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "707514",
      name: "The Teast Of Kitchen",
      cloudinaryImageId: "203b221988ce52724674f77db2382119",
      locality: "Gular Ka Nagla",
      areaName: "Civil Lines",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Fast Food", "Pastas"],
      avgRating: 3.2,
      parentId: "423015",
      avgRatingString: "3.2",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 58,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=707514",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "97071",
      name: "Bhagwan Corner",
      cloudinaryImageId: "r2nu7k5hxb1o294n9t4a",
      locality: "Radha krishan complex",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Italian", "Pizzas", "Chinese"],
      avgRating: 3.6,
      parentId: "13573",
      avgRatingString: "3.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=97071",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "807958",
      name: "Lunch Hours",
      cloudinaryImageId: "feaa394235f23091ce4dd551d2897044",
      locality: "Jageshwar Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian"],
      parentId: "483755",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=807958",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "807951",
      name: "Pandit Ji Shudh Vaishno Dhaba",
      cloudinaryImageId: "f0f543ed5f3d319e1e7a6bba79c8e051",
      locality: "Jageshwar Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Indian"],
      parentId: "483758",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=807951",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "808010",
      name: "Paratha Gali",
      cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
      locality: "Jageshwar Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian"],
      parentId: "21776",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=808010",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "472405",
      name: "Sai Food Corner",
      cloudinaryImageId: "xps9oyu7a8abr9ln2a6u",
      locality: "2nd Block",
      areaName: "Civil Lines",
      costForTwo: "₹220 for two",
      cuisines: ["Fast Food"],
      avgRating: 2.6,
      veg: true,
      parentId: "175076",
      avgRatingString: "2.6",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-30 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=472405",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "596165",
      name: "Cake and Bake",
      cloudinaryImageId: "lrsjztpdxtlqkuzrovhs",
      locality: "Nagla Ajeeta",
      areaName: "Sikandra",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 3.7,
      veg: true,
      parentId: "4436",
      avgRatingString: "3.7",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=596165",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "814513",
      name: "Rajasthani Handi Mutton And Chicken",
      cloudinaryImageId: "7da9a494025de5231f1fdbb4ed081bd7",
      locality: "Avas Vikas Colony",
      areaName: "Civil Lines",
      costForTwo: "₹299 for two",
      cuisines: ["North Indian"],
      parentId: "485445",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=814513",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "596128",
      name: "Bhagwan cake and bake",
      cloudinaryImageId: "ebky6g6zvvm9pvnbkxej",
      locality: "Nagla Ajeeta",
      areaName: "Sikandra",
      costForTwo: "₹100 for two",
      cuisines: ["Indian", "Bakery"],
      parentId: "359501",
      avgRatingString: "--",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=596128",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "797572",
      name: "Ved Tasty Bite",
      cloudinaryImageId: "da34f1382cb97166f2bd96653bc70e1b",
      locality: "Gautam Buddha Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "South Indian", "Fast Food"],
      parentId: "476941",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-29 10:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=797572",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const ResturantCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resdata?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resobj.map((resturant) => {
          return <ResturantCard key={resturant.info.id} resdata={resturant} />;
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
