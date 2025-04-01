import { motion } from "motion/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import FlorLottie from "../../assets/Flor.json?url"
import colorBg from "../../assets/asset-color.jpg"
import cartonBg from "../../assets/asset-carton.jpg"
import Content from "../../assets/text.svg"

function Home() {
  return (
    <div
      className="h-full flex-1 p-12 overflow-y-auto flex justify-center items-start xl:items-center"
      style={{
        backgroundImage: `linear-gradient(-45deg, rgba(77, 46, 66, 0.7), rgba(229, 184, 214, 0.4), rgba(77, 46, 66, 0.7)), url(${colorBg})`,
        backgroundSize: "cover",
      }}>
      <motion.div
        initial={{
          opacity: 0,
          translate: "0px 200px",
          position: "absolute",
        }}
        animate={{
          opacity: 1,
          translate: "0px 0px",
          position: "relative",
        }}
        transition={{ duration: 0.5 }}
        className="float-animation flex-1 max-w-[800px] h-auto rounded-lg items-center justify-center flex flex-col gap-0 overflow-y-auto relative box-border"
        style={{
          backgroundImage: `linear-gradient(-45deg, rgba(210, 194, 242, 0.7), rgba(255, 255, 255, 0.5), rgba(210, 194, 242, 0.7)), url(${cartonBg})`,
          backgroundSize: "cover, 50% 50%",
          backgroundRepeat: "no-repeat, repeat",
        }}>
        <DotLottieReact
          src={FlorLottie}
          autoplay
          className="w-[350px] scale-y-[-1]"
        />
        <section className="flex-1 h-full flex flex-col items-center justify-center gap-10 w-auto">
          <img src={Content} className="flex-1" />
        </section>
        <DotLottieReact
          src={FlorLottie}
          loop
          autoplay
          className="w-full max-w-[350px] -p-8"
        />
      </motion.div>
    </div>
  )
}

export default Home
