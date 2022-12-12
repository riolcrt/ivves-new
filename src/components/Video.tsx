import Link from "next/link";
import React from "react";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const tools = [
  {
    Name: "MACAU for aleatoric and epistemic uncertainty in model Prediction,",
    Title: "Validation Techniques for ML ",
    image: "/img/youtube.jpg",
    href :" https://www.youtube.com/watch?v=dx2cS1LQk1k",
  },
  {
    Name: "Validation Techniques for Complex Evolving Systems",
    Title: "TESTAR Model Inference.",
    image: "/img/youtube.jpg",
    href :"https://www.youtube.com/watch?v=zJG5bVAAzVg&list=PLCF3UqMFiSf0-aWE140S95bpV1F-CLGTm",
  },
  {
    Name: "ESG topic classification, Sentimental Analysis and XAI for data Quality.",
    Title: "Validation Techniques for ML",
    image: "/img/youtube.jpg",
    href :"https://www.youtube.com/watch?v=mdQHC1eP9oI&ab_channel=ITEAIVVESWP2",
  },
];

export const Video = () => {
  return (
    <section id="Tools">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ivves tools in Action</h2>
      </div>

      <div className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            475: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {tools.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={item.href}>
              <div className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                <div className="relative block h-full w-full overflow-hidden ">
                  <img
                    className="h-full md:h-auto "
                    src={item.image}
                  
                  ></img>
                </div>

                <div className="flex flex-col border-t p-4 dark:border-slate-600">
                  <h5 className="text-md block truncate font-semibold capitalize">
                    {item.Title}
                  </h5>
                  <span className="block truncate text-slate-500 dark:text-slate-400">
                    {item.Name}
                  </span>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
