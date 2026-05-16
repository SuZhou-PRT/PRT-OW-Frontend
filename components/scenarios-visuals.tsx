import Image from "next/image"
import type { StaticImageData } from "next/image"
import ScenarioDrivingIMG from "@/public/scenarios/ScenarioDriving-IMG.png"
import ScenarioCityIMG from "@/public/scenarios/ScenarioCity-IMG.png"
import ScenarioManufactureIMG from "@/public/scenarios/Jushen.jpg"
import ScenarioAIIMG from "@/public/scenarios/ScenarioAI-IMG.png"
import ScenarioHealthIMG from "@/public/scenarios/ScenarioHealth-IMG.png"

function ScenarioImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
      placeholder="blur"
    />
  )
}

export const ScenarioDriving = () => <ScenarioImage src={ScenarioDrivingIMG} alt="自动驾驶" />
export const ScenarioCity = () => <ScenarioImage src={ScenarioCityIMG} alt="智慧城市" />
export const ScenarioManufacture = () => <ScenarioImage src={ScenarioManufactureIMG} alt="智能制造" />
export const ScenarioAI = () => <ScenarioImage src={ScenarioAIIMG} alt="互联网与AI应用" />
export const ScenarioHealth = () => <ScenarioImage src={ScenarioHealthIMG} alt="医疗健康" />
