import React, { useState } from "react";
import VirtualScroll from "common/VirtualScroll";
import Tag from "./Tag";
import Checkbox from "./Checkbox";
import Sort from "./Sort";
import Card from "../../common/Card";
import { ReactComponent as Location } from "../../static/image/Location.svg";
import { ReactComponent as LeftArrow } from "../../static/image/LeftArrow.svg";

// TODO: fetch 데이터로 변경
const DUMMY_DATA = [
  {
    hotel_name: "에코랜드 호텔",
    occupancy: {
      base: 2,
      max: 3,
    },
    image: "https://source.unsplash.com/random",
    address: "중구 동호로 249 서울특별시",
    price: 320337,
    review: 1807,
    rating: 1,
  },
];
const ResultTablet = () => {
  const [isMapActive, setIsMapActive] = useState(true);
  return (
    <div className="flex p-10 bg-white">
      <div className="flex-col w-5/12">
        <div
          className="flex h-16 text-base font-medium text-center border rounded cursor-pointer w-72 border-slate-300 bg-zinc-200"
          onClick={() => {
            setIsMapActive(!isMapActive);
          }}
        >
          {isMapActive ? (
            <div className="flex items-center justify-center w-full h-full bg-map">
              <Location />
              지도보기
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full ">
              <LeftArrow />
              목록으로 돌아가기
            </div>
          )}
        </div>
        <Tag />
        <div className="my-6 text-lg font-medium">가격 범위</div>
        <div className="pb-10 border-b-2 border-slate-200">
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="99999999"
            defaultValue="Initial value"
            step="10"
            className="accent-[#FF375C] w-10/12"
          />
        </div>
        <Checkbox title="등급" />
        <Checkbox title="리뷰 평가" />
      </div>
      <div className="w-9/12 border-black px-50">
        <div className="relative h-24 bg-white divide-y rounded shadow-md divide-slate-200">
          <Sort />
        </div>
        {isMapActive ? (
          <div className="">
            <div className="flex-col items-center justify-center max-w-3xl gap-10 pt-10 mx-auto">
              {/* <VirtualScroll itemHeight={300} columnGap={10}>
                {DUMMY_DATA.map((hotel, index) => (
                  <Card key={`${hotel}-${index}`} hotel={hotel} />
                ))}
              </VirtualScroll> */}
            </div>
          </div>
        ) : (
          <div className="">지도API?</div>
        )}
      </div>
    </div>
  );
};
export default ResultTablet;