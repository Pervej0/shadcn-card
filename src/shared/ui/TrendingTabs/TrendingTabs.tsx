import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutPanelLeft } from "lucide-react";
import TabCard from "@/shared/ui/TrendingTabs/TabCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trendingMovies } from "@/asset/dummyData";
import ShowTabsContent from "./ShowTabsContent";

export default function TrendingTabs() {
  const allData = trendingMovies;
  const drama = trendingMovies.filter(
    (item) => item.genre[0].value === "drama"
  );
  const horror = trendingMovies.filter(
    (item) => item.genre[0].value === "horror"
  );

  const anime = trendingMovies.filter(
    (item) => item.genre[0].value === "anime"
  );

  const sci_fi = trendingMovies.filter(
    (item) => item.genre[0].value === "sci_fi"
  );

  const thriller = trendingMovies.filter(
    (item) => item.genre[0].value === "thriller"
  );

  const romance = trendingMovies.filter(
    (item) => item.genre[0].value === "romance"
  );

  const crime = trendingMovies.filter(
    (item) => item.genre[0].value === "crime"
  );

  return (
    <>
      <Tabs defaultValue="all" className="md:mx-14 mx-2 my-5">
        <TabsList className="rounded-full gap-x-5 bg-transparent flex-wrap">
          <TabsTrigger value="all">
            <LayoutPanelLeft /> All
          </TabsTrigger>
          <TabsTrigger value="drama">Drama</TabsTrigger>
          <TabsTrigger value="horror">Horror</TabsTrigger>
          <TabsTrigger value="anime">Anime</TabsTrigger>
          <TabsTrigger value="sci_fi">Sci-Fi</TabsTrigger>
          <TabsTrigger value="thriller">Thriller</TabsTrigger>
          <TabsTrigger value="romance">Romance</TabsTrigger>
          <TabsTrigger value="crime">Crime</TabsTrigger>
        </TabsList>
        <h1 className="text-3xl text-gray-900 font-bold md:mt-4 mt-10">
          Trending
        </h1>
        <TabsContent value="all">
          <ShowTabsContent items={allData} />
        </TabsContent>
        <TabsContent value="drama">
          <ShowTabsContent items={drama} />
        </TabsContent>
        <TabsContent value="horror">
          <ShowTabsContent items={horror} />
        </TabsContent>
        <TabsContent value="anime">
          <ShowTabsContent items={anime} />
        </TabsContent>
        <TabsContent value="sci_fi">
          <ShowTabsContent items={sci_fi} />
        </TabsContent>
        <TabsContent value="thriller">
          <ShowTabsContent items={thriller} />
        </TabsContent>
        <TabsContent value="romance">
          <ShowTabsContent items={romance} />
        </TabsContent>
        <TabsContent value="crime">
          <ShowTabsContent items={crime} />
        </TabsContent>
      </Tabs>
    </>
  );
}
