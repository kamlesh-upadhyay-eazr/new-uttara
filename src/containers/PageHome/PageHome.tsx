import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Ramanagara",
    taxonomy: "category",
    // camp: "Rock Climbing  Course ",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3058762/pexels-photo-3058762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    href: "/listing-stay",
    name: "Badami",
    taxonomy: "category",
    // camp: "Rock Climbing  Course",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/1729927/pexels-photo-1729927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "Jakkur",
    taxonomy: "category",
    // camp: "Aero Sport Camp",
    count: 188288,
    thumbnail:
      "https://images.unsplash.com/photo-1526385604508-05e4e7f0bc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Dandeli",
    taxonomy: "category",
    // camp: "River Rafting and Kayaking Course",
    count: 188288,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661895579626-0386acbee873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "Barpole",
    taxonomy: "category",
    // camp: "Adventure & Nature Awarenes Camp",
    count: 188288,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1675403509143-8e567e28f1ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
  },
  {
    id: "6",
    href: "/listing-stay",
    name: "Vani Vilas Sagar",
    taxonomy: "category",
    // camp: "Aqua Sports Camp",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-stay",
    name: "KRS",
    taxonomy: "category",
    // camp: "Aqua Sports Camp",
    count: 188288,
    thumbnail:
      "https://images.unsplash.com/photo-1555572151-ed24ab503e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80",
  },
  {
    id: "8",
    href: "/listing-stay",
    name: "Chikmagalur",
    taxonomy: "category",
    // camp: "Mountain Biking Course",
    count: 188288,
    thumbnail:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        {/* <SectionHero className="pt-10 lg:pt-16 lg:pb-16" /> */}

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          categories={DEMO_CATS}
          uniqueClassName="PageHome_s1"
        />

        {/* SECTION2 */}
        {/* <SectionOurFeatures /> */}

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>

        {/* SECTION */}
        <SectionHowItWork />

        {/* SECTION 1 */}
        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
            uniqueClassName="PageHome_s2"
          />
        </div> */}

        {/* SECTION */}
        {/* <SectionSubscribe2 /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}

        {/* SECTION */}
        {/* <SectionGridCategoryBox /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}

        {/* SECTION 1 */}
        {/* <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome_s3"
        /> */}

        {/* SECTION */}
        {/* <SectionVideos /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="PageHome_" />
        </div> */}
      </div>
    </div>
  );
}

export default PageHome;
