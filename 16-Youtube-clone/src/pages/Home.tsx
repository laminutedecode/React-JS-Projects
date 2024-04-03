import Nav from '../components/Nav.tsx';
import Sidebar from "../components/Sidebar.tsx";
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import {useEffect} from "react"
import { GetVideosHome } from '../store/reducers/GetVideosHome.ts';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { clearVideos } from "../store/slice.ts";
import { HomePageVideos } from '../Types.ts';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  
  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetVideosHome(false));
  }, [dispatch]);

  return (
  
          <div className="max-h-screen overflow-hidden">
            <div style={{height: "7.5vh"}}>
              <Nav />
            </div>
            <div className="flex " style={{height: "92.5vh"}}>
              <Sidebar />
              {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(GetVideosHome(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid  gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
            </div>
          </div>
     
  )
}